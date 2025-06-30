// src/app/privacidad/page.tsx

import React from 'react';

const PrivacidadPage = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:px-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-albatrosBlue mb-8 text-center">
                Aviso de Privacidad
            </h1>

            {/* Sección: Identidad y domicilio del Responsable */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Identidad y domicilio del Responsable
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    El Responsable de los datos personales que usted proporciona es el Grupo Cultural Albatros (en lo sucesivo “Colegio Albatros”) con domicilios ubicados en:
                </p>
                <ul className="list-disc list-inside font-body text-gray-700 leading-relaxed mb-4 pl-4">
                    <li>Av. Federico Gómez N° 32 Bo. de Santiago, Zumpango Estado de México. C.P. 55600.</li>
                    <li>Segunda cerrada de Chamizal N° 17 Bo. de San Lorenzo, Zumpango Estado de México. C.P. 55600.</li>
                </ul>
            </section>

            {/* Sección: Datos personales y datos personales sensibles */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Datos personales y datos personales sensibles tratados por Colegio Albatros
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Colegio Albatros como parte de su registro de alumnos recabará y tratará datos personales de identificación, datos personales de contacto, datos personales laborales, datos personales sobre características físicas, datos personales académicos, datos personales patrimoniales, datos personales financieros, datos personales biométricos y en algunas ocasiones, datos concernientes a su estado de salud físico y emocional.
                </p>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Asimismo, le informamos que el tratamiento de sus datos personales sensibles tiene como propósito que Colegio Albatros cumpla con las obligaciones derivadas de la relación jurídica que tenemos con usted. Nos comprometemos a que los mismos serán tratados bajo estrictas medidas de seguridad, siempre garantizando su confidencialidad.
                </p>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Por otro lado, le informamos que Colegio Albatros recabará y tratará datos personales de identificación, datos personales de contacto, datos personales académicos, datos personales laborales y datos personales patrimoniales de sus familiares y/o terceros con los que usted tenga una relación, ya sea que ejerzan su patria potestad o que le brinden apoyo económico que sea necesario para cumplir con las finalidades primarias y necesarias para la relación jurídica establecida con usted. De este modo, al proporcionar los datos personales necesarios relacionados con sus familiares y/o terceros usted reconoce tener el consentimiento de éstos para que Colegio Albatros trate éstos para cumplir con las finalidades primarias y necesarias señaladas en el presente Aviso.
                </p>
            </section>

            {/* Sección: Finalidades primarias */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Finalidades primarias
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Colegio Albatros tratará sus datos personales para las siguientes finalidades primarias y necesarias para cumplir con nuestras obligaciones derivadas de nuestra relación jurídica:
                </p>
                <ul className="list-disc list-inside font-body text-gray-700 leading-relaxed mb-4 pl-4">
                    <li>Para prestarle todos los servicios y realizar todas las actividades que resulten necesarias para el desarrollo de académico y extracurricular y contribuir a su formación integral.</li>
                    <li>Para evaluarle e informarle del desempeño académico y extracurricular.</li>
                    <li>Para difundirle conocimientos del más alto nivel ético, científico, cultural, tecnológico y profesional.</li>
                    <li>En caso de solicitarlo, para otorgarle apoyos económicos, becas y/o préstamos, en caso de cumplir los requisitos establecidos.</li>
                    <li>Para enviarle información sobre asuntos escolares y administrativos.</li>
                    <li>En caso de solicitarlo, para inscribirle y participar en programas de vinculación, incluidos los de internacionalización, con instituciones educativas y no educativas en el extranjero.</li>
                    <li>Para la creación de un perfil de alumno y asignarle una matrícula.</li>
                    <li>Para identificarle en la aplicación de exámenes.</li>
                    <li>Para la asignación y/o selección de residencia, en los casos que aplique.</li>
                    <li>Para la administración de su estancia escolar en Colegio Albatros.</li>
                    <li>Para la administración del acceso físico a las instalaciones de Colegio Albatros.</li>
                    <li>Para la administración del acceso electrónico a los sistemas e infraestructura tecnológica de Colegio Albatros.</li>
                    <li>Para contactar a sus familiares o terceros de contacto en caso de una emergencia.</li>
                    <li>Para la contratación y/o cancelación de los seguros necesarios.</li>
                    <li>Para realizar reportes semanales, mensuales y anuales.</li>
                    <li>Para las gestiones de facturación y procesos de cobranza correspondientes.</li>
                    <li>Para el registro y acreditación del servicio social comunitario y/o profesional, en aquellos casos que sea necesaria su obtención.</li>
                    <li>En caso de solicitarlos, para programas de prevención de accidentes, de nutrición, de ayuda psicológica y la aplicación y/o revisión de exámenes médicos.</li>
                    <li>En caso de ser seleccionado de manera aleatoria, para realizar pruebas de detección de drogas de no uso médico, para prevenir y evitar riesgos a la salud.</li>
                    <li>En caso de resultar candidato a evaluación profesional para la prevención y control de riesgos de salud, para llevar un registro de la asistencia y atención de dicha evaluación profesional.</li>
                    <li>Para la elaboración de identificaciones.</li>
                    <li>Para la compra – venta de certificados.</li>
                    <li>Para revalidación y acreditación de estudios, así como para realizar todos los trámites necesarios ante las autoridades escolares correspondientes.</li>
                    <li>Para inscribirle a eventos y/o actividades extracurriculares en las que participe representando a Colegio Albatros.</li>
                    <li>Para la aplicación de encuestas y evaluaciones relacionadas con la calidad de los productos y servicios que ofrecemos (ECOA Y ECAG)</li>
                    <li>Para llevar un expediente y control médico de medicinas y necesidades de salud especiales que tenga, y para saber si está en condiciones físicas de realizar deportes y/o otras actividades necesarias.</li>
                    <li>En los casos que aplique, para llevar un registro de su historial y comportamiento crediticio.</li>
                    <li>En los casos que lo requiera, para enviar a la base de datos del buró de crédito en caso de que usted incumpla con la obligación de pago derivada de la relación jurídica con Colegio Albatros, en cuyo caso, el uso de su información se regirá de conformidad con lo establecido por la Ley para Regular las Sociedades de Información Crediticia.</li>
                </ul>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Le informamos que usted no puede oponerse para que el Colegio Albatros cese el tratamiento de sus datos para las finalidades primarias y necesarias, anteriormente mencionadas, en virtud de que el tratamiento es necesario para cumplir con las obligaciones derivadas de la relación ente usted e Colegio Albatros.
                </p>
                {/* Este párrafo se repite en tu texto, lo incluyo aquí de nuevo si es intencional */}
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Por otro lado, le informamos que Colegio Albatros recabará y tratará datos personales de identificación, datos personales de contacto, datos personales académicos, datos personales laborales y datos personales patrimoniales de sus familiares y/o terceros con los que usted tenga una relación, ya sea que ejerzan su patria potestad o que le brinden apoyo económico que sea necesario para cumplir con las finalidades primarias y necesarias para la relación jurídica establecida con usted. De este modo, al proporcionar los datos personales necesarios relacionados con sus familiares y/o terceros usted reconoce tener el consentimiento de éstos para que Colegio Albatros trate éstos para cumplir con las finalidades primarias y necesarias señaladas en el presente Aviso.
                </p>
                {/* Las finalidades primarias se repiten, aquí está la segunda instancia como en tu texto */}
                <h3 className="font-heading text-2xl font-bold text-albatrosBlue mb-4">Finalidades primarias</h3>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Colegio Albatros tratará sus datos personales para las siguientes finalidades primarias y necesarias para cumplir con nuestras obligaciones derivadas de nuestra relación jurídica:
                </p>
                <ul className="list-disc list-inside font-body text-gray-700 leading-relaxed mb-4 pl-4">
                    <li>Para prestarle todos los servicios y realizar todas las actividades que resulten necesarias para el desarrollo de académico y extracurricular y contribuir a su formación integral.</li>
                    <li>Para evaluarle e informarle del desempeño académico y extracurricular.</li>
                    <li>Para difundirle conocimientos del más alto nivel ético, científico, cultural, tecnológico y profesional</li>
                    <li>En caso de solicitarlo, para otorgarle apoyos económicos, becas y/o préstamos, en caso de cumplir los requisitos establecidos.</li>
                    <li>Para enviarle información sobre asuntos escolares y administrativo</li>
                    <li>En caso de solicitarlo, para inscribirle y participar en programas de vinculación, incluidos los de internacionalización, con instituciones educativas y no educativas en el extranjero.</li>
                    <li>Para la creación de un perfil de alumno y asignarle una matrícula.</li>
                    <li>Para identificarle en la aplicación de exámenes.</li>
                    <li>Para la asignación y/o selección de residencia, en los casos que aplique.</li>
                    <li>Para la administración de su estancia escolar en Colegio Albatros.</li>
                    <li>Para la administración del acceso físico a las instalaciones de Colegio Albatros.</li>
                    <li>Para la administración del acceso electrónico a los sistemas e infraestructura tecnológica de Colegio Albatros.</li>
                    <li>Para contactar a sus familiares o terceros de contacto en caso de una emergencia.</li>
                    <li>Para la contratación y/o cancelación de los seguros necesarios.</li>
                    <li>Para realizar reportes semanales, mensuales y anuales.</li>
                    <li>Para las gestiones de facturación y procesos de cobranza correspondientes.</li>
                    <li>Para el registro y acreditación del servicio social comunitario y/o profesional, en aquellos casos que sea necesaria su obtención.</li>
                    <li>En caso de solicitarlos, para programas de prevención de accidentes, de nutrición, de ayuda psicológica y la aplicación y/o revisión de exámenes médicos.</li>
                    <li>En caso de ser seleccionado de manera aleatoria, para realizar pruebas de detección de drogas de no uso médico, para prevenir y evitar riesgos a la salud.</li>
                    <li>En caso de resultar candidato a evaluación profesional para la prevención y control de riesgos de salud, para llevar un registro de la asistencia y atención de dicha evaluación profesional.</li>
                    <li>Para la elaboración de identificaciones.</li>
                    <li>Para la compra – venta de certificados.</li>
                    <li>Para revalidación y acreditación de estudios, así como para realizar todos los trámites necesarios ante las autoridades escolares correspondientes.</li>
                    <li>Para inscribirle a eventos y/o actividades extracurriculares en las que participe representando a Colegio Albatros.</li>
                    <li>Para la aplicación de encuestas y evaluaciones relacionadas con la calidad de los productos y servicios que ofrecemos (ECOA Y ECAG)</li>
                    <li>Para llevar un expediente y control médico de medicinas y necesidades de salud especiales que tenga, y para saber si está en condiciones físicas de realizar deportes y/o otras actividades necesarias.</li>
                    <li>En los casos que aplique, para llevar un registro de su historial y comportamiento crediticio.</li>
                    <li>En los casos que lo requiera, para enviar a la base de datos del buró de crédito en caso de que usted incumpla con la obligación de pago derivada de la relación jurídica con Colegio Albatros, en cuyo caso, el uso de su información se regirá de conformidad con lo establecido por la Ley para Regular las Sociedades de Información Crediticia.</li>
                </ul>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Le informamos que usted no puede oponerse para que el Colegio Albatros cese el tratamiento de sus datos para las finalidades primarias y necesarias, anteriormente mencionadas, en virtud de que el tratamiento es necesario para cumplir con las obligaciones derivadas de la relación ente usted e Colegio Albatros.
                </p>
            </section>


            {/* Sección: Finalidades secundarias */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Finalidades secundarias
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    De manera adicional, Colegio Albatros utilizará su información personal para las siguientes finalidades que no son necesarias para el servicio que nos solicita, pero que nos permiten y facilitan brindarle una mejor atención:
                </p>
                <ul className="list-disc list-inside font-body text-gray-700 leading-relaxed mb-4 pl-4">
                    <li>Para enviarle información promocional de cursos, diplomados, seminarios, simposios, talleres extra-académicos y eventos.</li>
                    <li>Para que su imagen personal (ya sea foto, video, etc.) sea utilizada y divulgada en la elaboración de material informativo y promocional.</li>
                    <li>Para realizar difusión de felicitaciones y demás celebraciones y días especiales, así como de reconocimientos por logros destacados.</li>
                    <li>Para la aplicación de encuestas y evaluaciones para mejorar la calidad de los productos y servicios que ofrecemos.</li>
                    <li>En caso que aplique, para gestionar su perfil en nuestra bolsa de trabajo.</li>
                    <li>En caso que aplique, para recomendarle con distintas empresas en sus vacantes de prácticas profesionales</li>
                    <li>Para recomendarle con empresas pertenecientes a la bolsa de trabajo de Colegio Albatros respecto a sus vacantes de empleo.</li>
                    <li>Para realizar estudios de hábitos de consumo.</li>
                    <li>Para promocionar la vida académica, de investigación, de extensión, los eventos deportivos, culturales, recreativos y sociales que realiza Colegio Albatros.</li>
                    <li>Para enviarle publicidad y comunicaciones con fines de mercadotecnia, tele-marketing o campañas financieras.</li>
                    <li>Para informar a sus familiares y/o los terceros previamente autorizados sobre su desempeño académico y extracurricular.</li>
                    <li>Para la aplicación de encuestas, evaluaciones, referencias e información necesaria con respecto de Colegio Albatros, lo anterior para la valoración de las empresas dedicadas a clasificar, evaluar y/o posicionar a diversas instituciones educativas.</li>
                </ul>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    En caso de que no desee que sus datos personales sean tratados para alguna o todas las finalidades adicionales, desde este momento usted nos puede comunicar lo anterior al correo <a href="mailto:datos@grupoculturalalbatros.com" className="text-albatrosBlue hover:underline">datos@grupoculturalalbatros.com</a>, indicándonos en el cuerpo del correo su nombre completo, su relación con el instituto y que no desea que sus datos sean tratados para alguna o todas las finalidades secundarias.
                </p>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    La negativa para el uso de sus datos personales para fines adicionales, no podrá ser un motivo para negarle los servicios solicitados o dar por terminada la relación establecida con nosotros.
                </p>
            </section>

            {/* Sección: Uso de Cookies */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Uso de Cookies
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Le informamos que en algunas de nuestras páginas de internet utilizamos cookies y otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que se pueden obtener a través del uso de estas tecnologías son los siguientes: Identificadores, nombre usuario y contraseñas de una sesión, región en la que se encuentra, tipo de navegador, tipo de sistema operativo, fecha y hora del inicio y final de una sesión, páginas web visitadas, búsquedas realizadas y publicidad revisada. Estas tecnologías podrán deshabilitarse siguiendo los procedimientos del navegador de internet que utiliza.
                </p>
            </section>

            {/* Sección: Cambios al Aviso de Privacidad */}
            <section className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                    Cambios al Aviso de Privacidad
                </h2>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Colegio Albatros le notificará de cualquier cambio a su aviso de privacidad a través de la liga <a href="https://grupoculturalalbatros.com/" target="_blank" rel="noopener noreferrer" className="text-albatrosBlue hover:underline">https://grupoculturalalbatros.com/</a> y posteriormente accediendo a su aviso de privacidad.
                </p>
            </section>
        </div>
    );
};

export default PrivacidadPage;