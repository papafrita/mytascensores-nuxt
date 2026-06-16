export interface ServiceFeature {
  title: string
  desc: string
}

export interface ServiceStep {
  phase: string
  title: string
  desc: string
}

export interface ServiceMetric {
  num: string
  lbl: string
}

export interface ServiceData {
  category: string
  title: string
  seoTitle: string
  meta: string
  icon: string
  image: string
  description: string
  overview: string
  features: string[]
  detailedFeatures: ServiceFeature[]
  steps: ServiceStep[]
  metrics: ServiceMetric[]
  metric: ServiceMetric
}

export type ServiceId = 'correctivo' | 'reparacion' | 'importacion'

export const useServicesData = () => {
  const servicesData: Record<ServiceId, ServiceData> = {
    correctivo: {
      category: 'Servicio Correctivo 24/7',
      title: 'Mantenimiento Correctivo',
      seoTitle: 'Servicio de Emergencias 24/7 | MYT Ascensores',
      meta: 'Asistencia inmediata 24/7 para el rescate rápido de pasajeros, bloqueos y fallas operacionales críticas con técnicos de turno.',
      icon: 'clipboard-list',
      image: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (3).jpeg',
      description: 'Atendemos requerimientos puntuales y llamadas de emergencias técnicas las 24 horas del día para resolver interrupciones, ajustar componentes y mantener los equipos disponibles.',
      overview: 'Las interrupciones en el servicio de transporte vertical causan graves inconvenientes en comunidades residenciales, oficinas y recintos de salud. Nuestro Mantenimiento Correctivo y Servicio de Emergencias 24/7 está diseñado para devolver sus ascensores a la operación segura en tiempo récord.<br><br>Contamos con un centro de despacho telefónico permanente y cuadrillas de técnicos de turno equipados con vehículos de respuesta rápida y stock crítico de repuestos multimarca. Priorizamos de forma absoluta los rescates de pasajeros atrapados y los bloqueos totales del equipo, aplicando protocolos de seguridad estandarizados para mitigar cualquier riesgo físico.',
      features: [
        'Atención técnica 24/7/365',
        'Rescate y ajustes express',
        'Disponibilidad operacional garantizada'
      ],
      detailedFeatures: [
        { title: 'Respuesta Rápida Telefónica y Despacho 24/7', desc: 'Canal de emergencias exclusivo operativo las 24 horas del día, los 365 días del año, incluyendo fines de semana y festivos.' },
        { title: 'Técnicos Expertos de Guardia Permanente', desc: 'Personal capacitado en rescate y diagnóstico multimarca listo para movilizarse en cualquier comuna de la Región Metropolitana.' },
        { title: 'Protocolo Estandarizado de Rescate', desc: 'Procedimientos certificados para la liberación controlada de pasajeros en cabina, priorizando la calma y la seguridad total.' },
        { title: 'Repuestos Críticos a Bordo', desc: 'Móviles provistos con stock crítico (contactores, patines de puerta, sensores de pozo) para solucionar fallas en la primera visita.' }
      ],
      steps: [
        { phase: 'Paso 1', title: 'Recepción del Incidente', desc: 'Registramos la llamada al +56 9 3183 1327 y clasificamos la urgencia (atrapados o falla de bloqueo de cabina).' },
        { phase: 'Paso 2', title: 'Despacho de Cuadrilla Técnica', desc: 'Asignamos al móvil de turno más cercano al edificio utilizando nuestro sistema de posicionamiento georreferenciado.' },
        { phase: 'Paso 3', title: 'Maniobra de Rescate y Seguridad', desc: 'Al llegar, el técnico estabiliza el equipo en la zona de desembarque y procede a evacuar de forma segura a los pasajeros.' },
        { phase: 'Paso 4', title: 'Diagnóstico Técnico y Reparación', desc: 'Una vez evacuados, diagnosticamos el origen del bloqueo y reparamos el componente para dejar el ascensor operable.' }
      ],
      metrics: [
        { num: '24h', lbl: 'Rescate' },
        { num: 'Rápido', lbl: 'Arribo' },
        { num: 'Experto', lbl: 'Soporte' }
      ],
      metric: { num: '24 / 7', lbl: 'Disponibilidad de Respuesta' }
    },
    reparacion: {
      category: 'Servicio Correctivo',
      title: 'Reparación y Normalización',
      seoTitle: 'Reparación y Normalización de Ascensores | MYT',
      meta: 'Adecuación a la normativa vigente del MINVU, diagnóstico avanzado y subsanación de observaciones técnicas para obtener tu certificación legal.',
      icon: 'cog',
      image: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (2).jpeg',
      description: 'Diagnosticamos fallas, corregimos desviaciones técnicas y normalizamos equipos para recuperar seguridad, continuidad operacional y cumplimiento normativo exigido por el MINVU.',
      overview: 'La Ley de Ascensores en Chile exige que todos los equipos de transporte vertical cumplan con rigurosos estándares de seguridad técnica para obtener su certificación legal. Nuestro servicio de Reparación y Normalización se enfoca en diagnosticar fallas estructurales, eléctricas o mecánicas y ejecutar planes de acción rápidos para corregir desviaciones técnicas.<br><br>Desde el cambio de cables de tracción y poleas desgastadas hasta la actualización de tableros de control con tecnología variadora de frecuencia (VVVF) y sistemas de rescate automático (ARD), devolvemos a sus equipos la máxima seguridad operacional y el cumplimiento legal absoluto ante el MINVU.',
      features: [
        'Diagnóstico de fallas avanzado',
        'Corrección técnica inmediata',
        'Normalización y certificación legal'
      ],
      detailedFeatures: [
        { title: 'Subsanación de Observaciones de Certificación', desc: 'Corregimos de forma inmediata las no conformidades detectadas en las revisiones de organismos de certificación externa.' },
        { title: 'Modernización Electrónica (VVVF)', desc: 'Reemplazamos controles de relés por microprocesadores modernos, reduciendo hasta un 40% el consumo energético del edificio.' },
        { title: 'Renovación de Cables y Poleas de Tracción', desc: 'Cambio de cables de acero de alta resistencia y re-mecanizado de gargantas de poleas para evitar deslizamientos peligrosos.' },
        { title: 'Seguridad en Cabina y Pasadizo', desc: 'Instalación de barreras infrarrojas de puerta, intercomunicadores de emergencia y sistemas de iluminación autónoma.' }
      ],
      steps: [
        { phase: 'Paso 1', title: 'Análisis de Observaciones', desc: 'Evaluamos la carpeta de certificación rechazada o levantamos un diagnóstico estructural detallado del ascensor.' },
        { phase: 'Paso 2', title: 'Diseño e Ingeniería de Proyecto', desc: 'Presentamos una cotización detallada de repuestos homologados y un plan calendarizado para mitigar la suspensión del servicio.' },
        { phase: 'Paso 3', title: 'Ejecución e Instalación Técnica', desc: 'Nuestros montajistas expertos retiran componentes obsoletos e instalan los repuestos certificados bajo estricto control de torque.' },
        { phase: 'Paso 4', title: 'Prueba de Carga y Recepción', desc: 'Realizamos ensayos dinámicos con sobrecarga física antes del proceso de re-inspección para garantizar la aprobación legal inmediata.' }
      ],
      metrics: [
        { num: '+1000', lbl: 'Reparaciones' },
        { num: 'MINVU', lbl: 'Norma' },
        { num: '100%', lbl: 'Seguro' }
      ],
      metric: { num: '100%', lbl: 'Aprobación de Certificaciones' }
    },
    importacion: {
      category: 'Proyectos Especiales',
      title: 'Importación e Instalación',
      seoTitle: 'Importación e Instalación de Ascensores | MYT',
      meta: 'Proyectos llave en mano para obras nuevas y reemplazo total. Equipos Gearless eficientes, ingeniería de montaje y aprobación municipal.',
      icon: 'download',
      image: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (4).jpeg',
      description: 'Acompañamos proyectos de importación, instalación y puesta en marcha de equipos de transporte vertical, coordinando cada etapa técnica con foco en trazabilidad y excelencia operacional.',
      overview: 'Para obras nuevas, edificios residenciales, comerciales o reemplazos completos de equipos antiguos, MYT ofrece una solución integral de ingeniería en Importación e Instalación de ascensores. Colaboramos estrechamente con prestigiosas fábricas globales para importar tecnologías de punta que se adapten a las dimensiones específicas de su escotilla y a los requerimientos de tráfico de su proyecto.<br><br>Nuestros ingenieros civiles e instaladores mecánicos certificados lideran todo el proceso de montaje estructural, cableado eléctrico, calibración de seguridad y tramitación de la primera certificación ante la municipalidad, asegurando una ejecución de obra limpia, a tiempo y en presupuesto.',
      features: [
        'Importación directa multimarca',
        'Montaje completo e ingeniería',
        'Puesta en marcha con trazabilidad'
      ],
      detailedFeatures: [
        { title: 'Estudio de Flujo y Tráfico Vertical', desc: 'Diseñamos la solución óptima evaluando el tráfico del edificio para recomendar la capacidad de carga (kg) y velocidad adecuada.' },
        { title: 'Tecnología Gearless de Alta Eficiencia', desc: 'Importamos sistemas sin sala de máquinas (MRL), ideales para optimizar el espacio arquitectónico del edificio.' },
        { title: 'Montaje Mecánico e Ingeniería Láser', desc: 'Instalación de rieles guía, chasis y cabina alineados milimétricamente con instrumentos láser para viajes extremadamente suaves.' },
        { title: 'Carpeta Técnica y Tramitación DOM', desc: 'Nos encargamos de toda la tramitación legal ante la Dirección de Obras Municipales para la recepción municipal.' }
      ],
      steps: [
        { phase: 'Paso 1', title: 'Diseño e Ingeniería de Pozo', desc: 'Revisamos los planos arquitectónicos de la escotilla para definir el anclaje estructural y las holguras mecánicas.' },
        { phase: 'Paso 2', title: 'Importación Directa y Logística', desc: 'Coordinamos la fabricación a medida en plantas especializadas internacionales y gestionamos el transporte marítimo seguro.' },
        { phase: 'Paso 3', title: 'Montaje Estructural Completo', desc: 'Armamos el chasis, motor gearless de imán permanente, tendido de cables de tracción e instalación eléctrica del control.' },
        { phase: 'Paso 4', title: 'Pruebas de Seguridad e Inscripción', desc: 'Efectuamos el test de paracaídas y el frenado límite antes de certificar e inscribir oficialmente el equipo en el Registro MINVU.' }
      ],
      metrics: [
        { num: 'Global', lbl: 'Origen' },
        { num: '+50', lbl: 'Instalaciones' },
        { num: 'ISO', lbl: 'Calidad' }
      ],
      metric: { num: '+50', lbl: 'Edificios Nuevos Habilitados' }
    }
  }

  return { servicesData }
}
