import React from 'react';
import AdmissionsForm from './AdmissionsForm';
import AdmissionsInfo from './AdmissionsInfo';

const AdmissionsSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Columna del Formulario */}
                    <div>
                        <AdmissionsForm />
                    </div>
                    {/* Columna de Información */}
                    <div>
                        <AdmissionsInfo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionsSection;
