"use client";

import React, { useState, useEffect } from 'react';

// --- Tipos para la data del API y el Formulario ---
interface Horario {
    hora: string;
    fechaCompletaISO: string;
}
interface DiaDisponible {
    fecha: string;
    nombreDia: string;
    horarios: Horario[];
}
interface TipoDeCita {
    id: string;
    nombre: string;
    duracionMinutos: number;
    diasDisponibles: DiaDisponible[];
}
interface Oferta {
    id: string;
    nombre: string;
    tiposDeCita: TipoDeCita[];
}
interface FormData {
    nombre: string;
    email: string;
    telefono: string;
    colegio: 'Albatros' | 'Tecno' | '';
    nivel_educativo: 'Kinder' | 'Primaria' | 'Secundaria' | '';
    grado: string;
    fechaHoraCita: string; // Almacenará la fechaCompletaISO
}
interface FormErrors {
    nombre?: string;
    email?: string;
    telefono?: string;
    colegio?: string;
    nivel_educativo?: string;
    grado?: string;
    fechaHoraCita?: string;
}

const nivelesPorColegio: { [key in 'Albatros' | 'Tecno']: ('Kinder' | 'Primaria' | 'Secundaria')[] } = {
    Albatros: ['Kinder', 'Primaria'],
    Tecno: ['Kinder', 'Primaria', 'Secundaria'],
};

const gradosPorNivel: { [key in 'Kinder' | 'Primaria' | 'Secundaria']: string[] } = {
    Kinder: ['1', '2', '3'],
    Primaria: ['1', '2', '3', '4', '5', '6'],
    Secundaria: ['1', '2', '3'],
};

// --- Componente Principal del Formulario ---
const AdmissionsForm = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        telefono: '',
        colegio: '',
        nivel_educativo: '',
        grado: '',
        fechaHoraCita: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [apiError, setApiError] = useState('');

    const [availability, setAvailability] = useState<Oferta[]>([]);
    const [loadingAvailability, setLoadingAvailability] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const negocioId = 'cmcb10kno000mgulq4ilqe9ug';
                const response = await fetch(`/api/availability/check?negocioId=${negocioId}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('La API devolvió un error:', errorText);
                    throw new Error('La respuesta de la API no fue exitosa.');
                }
                const data = await response.json();
                setAvailability(data.data.ofertas);
            } catch (error) {
                console.error("Error al obtener la disponibilidad:", error);
            } finally {
                setLoadingAvailability(false);
            }
        };
        fetchAvailability();
    }, []);

    const nivelesDisponibles = formData.colegio ? nivelesPorColegio[formData.colegio] : [];
    const gradosDisponibles = formData.nivel_educativo ? gradosPorNivel[formData.nivel_educativo] : [];

    const currentOferta = formData.colegio ? availability.find(o => o.nombre.toLowerCase().includes(formData.colegio.toLowerCase())) : undefined;
    const currentTipoCita = currentOferta?.tiposDeCita[0];
    const availableDates = currentTipoCita?.diasDisponibles || [];
    const availableTimes = availableDates.find(d => d.fecha === selectedDate)?.horarios || [];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleColegioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newColegio = e.target.value as FormData['colegio'];
        setFormData(prev => ({
            ...prev,
            colegio: newColegio,
            nivel_educativo: '',
            grado: '',
            fechaHoraCita: ''
        }));
        setSelectedDate('');
    };

    const handleNivelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newNivel = e.target.value as FormData['nivel_educativo'];
        setFormData(prev => ({
            ...prev,
            nivel_educativo: newNivel,
            grado: ''
        }));
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(e.target.value);
        setFormData(prev => ({ ...prev, fechaHoraCita: '' }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El formato del email es inválido.";
        }
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es requerido.";
        } else if (formData.telefono.replace(/\D/g, '').length < 10) {
            newErrors.telefono = "El teléfono debe tener al menos 10 dígitos.";
        }
        if (!formData.colegio) newErrors.colegio = "Selecciona un plantel.";
        if (!formData.nivel_educativo) newErrors.nivel_educativo = "Selecciona un nivel.";
        if (!formData.grado) newErrors.grado = "Selecciona un grado.";
        if (!formData.fechaHoraCita) newErrors.fechaHoraCita = "Selecciona una fecha y hora.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setFormStatus('loading');
        setApiError('');

        // --- AJUSTE DEFINITIVO: Formateamos la fecha al formato exacto de ManyChat ---
        const dateToFormat = new Date(formData.fechaHoraCita);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: '2-digit',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Mexico_City', // Zona horaria clave
        }).format(dateToFormat).replace(',', '') + " CST";

        const payload = {
            ...formData,
            fechaHoraCita: formattedDate, // Usamos la fecha formateada
            tipoDeCitaId: currentTipoCita?.id || 'clxilh37e000108l430f7326p',
            negocioId: 'clv8d2k6q000008l41x2f1vxf',
            ofertaId: currentOferta?.id || 'clxilh37e000008l40a7p784n',
            source: 'Formulario Web Admisiones'
        };

        try {
            const response = await fetch('/api/appointments/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ nombre: '', email: '', telefono: '', colegio: '', nivel_educativo: '', grado: '', fechaHoraCita: '' });
                setSelectedDate('');
            } else {
                const errorData = await response.json();
                console.error("Error del servidor:", errorData);
                setApiError(errorData.error || 'No pudimos procesar tu solicitud.');
                setFormStatus('error');
            }
        } catch (error) {
            console.error("Error de red:", error);
            setApiError('Hubo un problema de conexión. Revisa tu internet.');
            setFormStatus('error');
        }
    };

    const getDatePlaceholder = () => {
        if (loadingAvailability) return 'Cargando disponibilidad...';
        if (!formData.colegio) return 'Selecciona un plantel primero';
        if (availableDates.length === 0) return 'No hay fechas disponibles';
        return 'Selecciona una fecha...';
    };

    return (
        <div className="bg-brand-surface p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-2">Solicita Informes</h2>
            <p className="text-brand-text-light mb-6">Completa el formulario y un asesor se pondrá en contacto contigo.</p>

            {formStatus === 'success' && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md" role="alert">
                    <p className="font-bold">¡Gracias!</p>
                    <p>Hemos recibido tu solicitud. Un asesor se comunicará contigo a la brevedad.</p>
                </div>
            )}
            {formStatus === 'error' && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert">
                    <p className="font-bold">Hubo un error</p>
                    <p>{apiError}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-brand-text">Nombre completo del padre/madre</label>
                        <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`} />
                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                    </div>
                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-brand-text">Teléfono de Contacto</label>
                        <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.telefono ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`} />
                        {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text">Correo Electrónico</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="colegio" className="block text-sm font-medium text-brand-text">Plantel de Interés</label>
                        <select name="colegio" id="colegio" value={formData.colegio} onChange={handleColegioChange} className={`mt-1 block w-full px-3 py-2 border ${errors.colegio ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}>
                            <option value="">Selecciona...</option>
                            <option value="Albatros">Albatros (Zumpango Centro)</option>
                            <option value="Tecno">Tecno (San Lorenzo)</option>
                        </select>
                        {errors.colegio && <p className="text-red-500 text-xs mt-1">{errors.colegio}</p>}
                    </div>
                    <div>
                        <label htmlFor="nivel_educativo" className="block text-sm font-medium text-brand-text">Nivel Educativo</label>
                        <select name="nivel_educativo" id="nivel_educativo" value={formData.nivel_educativo} onChange={handleNivelChange} disabled={!formData.colegio} className={`mt-1 block w-full px-3 py-2 border ${errors.nivel_educativo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100`}>
                            <option value="">Selecciona un plantel...</option>
                            {nivelesDisponibles.map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                        {errors.nivel_educativo && <p className="text-red-500 text-xs mt-1">{errors.nivel_educativo}</p>}
                    </div>
                    <div>
                        <label htmlFor="grado" className="block text-sm font-medium text-brand-text">Grado</label>
                        <select name="grado" id="grado" value={formData.grado} onChange={handleChange} disabled={!formData.nivel_educativo} className={`mt-1 block w-full px-3 py-2 border ${errors.grado ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100`}>
                            <option value="">Selecciona un nivel...</option>
                            {gradosDisponibles.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        {errors.grado && <p className="text-red-500 text-xs mt-1">{errors.grado}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fechaCita" className="block text-sm font-medium text-brand-text">Fecha para la cita</label>
                        <select name="fechaCita" id="fechaCita" value={selectedDate} onChange={handleDateChange} disabled={!formData.colegio || loadingAvailability || availableDates.length === 0} className={`mt-1 block w-full px-3 py-2 border ${errors.fechaHoraCita ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100`}>
                            <option value="">{getDatePlaceholder()}</option>
                            {availableDates.map(d => <option key={d.fecha} value={d.fecha}>{new Date(d.fecha + 'T12:00:00Z').toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</option>)}
                        </select>
                        {errors.fechaHoraCita && <p className="text-red-500 text-xs mt-1">{errors.fechaHoraCita}</p>}
                    </div>
                    <div>
                        <label htmlFor="horaCita" className="block text-sm font-medium text-brand-text">Hora disponible</label>
                        <select name="fechaHoraCita" id="horaCita" value={formData.fechaHoraCita} onChange={handleChange} disabled={!selectedDate} className={`mt-1 block w-full px-3 py-2 border ${errors.fechaHoraCita ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100`}>
                            <option value="">Selecciona una fecha...</option>
                            {availableTimes.map(h => <option key={h.fechaCompletaISO} value={h.fechaCompletaISO}>{h.hora}</option>)}
                        </select>
                        {errors.fechaHoraCita && <p className="text-red-500 text-xs mt-1">{errors.fechaHoraCita}</p>}
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={formStatus === 'loading'} className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors duration-300 disabled:bg-gray-400">
                        {formStatus === 'loading' ? 'Enviando...' : 'Solicitar Información'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionsForm;
