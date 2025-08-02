import React from 'react';
import { ClipboardList, CheckSquare } from 'lucide-react';

const AdmissionsInfo = () => {
    const admissionSteps = [
        "Completa el formulario de contacto.",
        "Un asesor se comunicará contigo para agendar una visita.",
        "Realiza una visita guiada en el plantel de tu interés.",
        "Entrega la documentación requerida y finaliza la inscripción."
    ];

    const requirements = [
        "Acta de nacimiento (original y 4 copias).",
        "CURP del alumno y de ambos padres.",
        "Certificado médico con tipo de sangre.",
        "Boletas oficiales de ciclos anteriores.",
        "Certificado del ciclo anterior (si aplica).",
        "INE de ambos padres (a color, ampliada al 200%).",
        "Comprobante de domicilio reciente."
    ];

    return (
        <div className="bg-brand-background p-8 rounded-lg">
            <div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <CheckSquare className="text-accent" />
                    Nuestro Proceso de Admisión
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-brand-text-light">
                    {admissionSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="mt-8 border-t pt-8">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <ClipboardList className="text-accent" />
                    Requisitos de Inscripción
                </h3>
                <ul className="space-y-3 text-brand-text-light">
                    {requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">✓</span>
                            <span>{req}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdmissionsInfo;
