// Catálogo oficial de carreras UPDS Sucre.
// Los pesos por área deben sumar 1.0 en cada carrera.
// PESO_INTERES y PESO_APTITUD son CONSTANTES del modelo (60/40).

export const PESO_INTERES   = 0.6;
export const PESO_APTITUD   = 0.4;

export const CARRERAS = [
  {
    id: 'medicina',
    nombre: 'Medicina',
    facultad: 'Ciencias de la Salud',
    descripcion: 'Formación integral para el diagnóstico, tratamiento y prevención de enfermedades.',
    pesos: { S: 1.0 }
  },
  {
    id: 'fisioterapia',
    nombre: 'Fisioterapia y Kinesiología',
    facultad: 'Ciencias de la Salud',
    descripcion: 'Rehabilitación física y tratamiento del movimiento humano.',
    pesos: { S: 1.0 }
  },
  {
    id: 'administracion',
    nombre: 'Administración de Empresas',
    facultad: 'Ciencias Empresariales y Económicas',
    descripcion: 'Gestión de organizaciones, recursos y estrategia empresarial.',
    pesos: { C: 1.0 }
  },
  {
    id: 'ing-comercial',
    nombre: 'Ingeniería Comercial',
    facultad: 'Ciencias Empresariales y Económicas',
    descripcion: 'Gestión comercial con base analítica y tecnológica.',
    pesos: { C: 0.7, I: 0.3 }
  },
  {
    id: 'contaduria',
    nombre: 'Contaduría Pública',
    facultad: 'Ciencias Empresariales y Económicas',
    descripcion: 'Auditoría, contabilidad, tributación y finanzas.',
    pesos: { C: 1.0 }
  },
  {
    id: 'marketing',
    nombre: 'Marketing y Publicidad',
    facultad: 'Ciencias Empresariales y Económicas',
    descripcion: 'Creatividad aplicada a la comunicación de marcas y productos.',
    pesos: { C: 0.6, A: 0.4 }
  },
  {
    id: 'ing-sistemas',
    nombre: 'Ingeniería de Sistemas',
    facultad: 'Ingeniería y Tecnología',
    descripcion: 'Desarrollo de software, datos e infraestructura tecnológica.',
    pesos: { I: 1.0 }
  },
  {
    id: 'ing-industrial',
    nombre: 'Ingeniería Industrial',
    facultad: 'Ingeniería y Tecnología',
    descripcion: 'Optimización de procesos productivos y logística.',
    pesos: { I: 0.7, E: 0.3 }
  },
  {
    id: 'ing-redes',
    nombre: 'Ingeniería en Redes y Telecomunicaciones',
    facultad: 'Ingeniería y Tecnología',
    descripcion: 'Diseño y gestión de redes y sistemas de comunicación.',
    pesos: { I: 1.0 }
  },
  {
    id: 'ing-petrolera',
    nombre: 'Ingeniería en Gestión Petrolera',
    facultad: 'Ingeniería y Tecnología',
    descripcion: 'Exploración, extracción y gestión de hidrocarburos.',
    pesos: { I: 0.5, E: 0.5 }
  },
  {
    id: 'ing-ambiental',
    nombre: 'Ingeniería en Gestión Ambiental',
    facultad: 'Ingeniería y Tecnología',
    descripcion: 'Sostenibilidad, impacto ambiental y gestión de recursos naturales.',
    pesos: { E: 0.6, I: 0.4 }
  },
  {
    id: 'derecho',
    nombre: 'Derecho',
    facultad: 'Ciencias Sociales y Jurídicas',
    descripcion: 'Formación jurídica para la defensa, asesoría y función pública.',
    pesos: { H: 1.0 }
  },
  {
    id: 'psicologia',
    nombre: 'Psicología',
    facultad: 'Ciencias Sociales y Jurídicas',
    descripcion: 'Estudio del comportamiento humano y acompañamiento terapéutico.',
    pesos: { H: 0.6, S: 0.4 }
  },
  {
    id: 'comunicacion',
    nombre: 'Ciencias de la Comunicación Social',
    facultad: 'Ciencias Sociales y Jurídicas',
    descripcion: 'Periodismo, medios, comunicación institucional y digital.',
    pesos: { H: 0.6, A: 0.4 }
  }
];

/**
 * Calcula puntajes normalizados y afinidad combinada por área.
 * @param {Object} respuestas - { [idPregunta]: true/false }
 * @param {Array} preguntas - array de PREGUNTAS
 * @returns {{ intereses, aptitudes, afinidad }} - cada uno { C, H, A, S, I, D, E }
 */
export function calcularPerfil(respuestas, preguntas) {
  const areas = ['C','H','A','S','I','D','E'];
  const puntajeInteres  = { C:0, H:0, A:0, S:0, I:0, D:0, E:0 };
  const puntajeAptitud  = { C:0, H:0, A:0, S:0, I:0, D:0, E:0 };

  preguntas.forEach(p => {
    const r = respuestas[p.id];
    if (r === true) {
      if (p.tipo === 'interes')  puntajeInteres[p.area]  += 1;
      if (p.tipo === 'aptitud') puntajeAptitud[p.area] += 1;
    }
  });

  const intereses = {};
  const aptitudes = {};
  const afinidad  = {};

  areas.forEach(a => {
    intereses[a] = puntajeInteres[a];             // 0..10
    aptitudes[a] = puntajeAptitud[a];             // 0..4
    const iNorm = puntajeInteres[a] / 10;
    const aNorm = puntajeAptitud[a] / 4;
    afinidad[a] = iNorm * PESO_INTERES + aNorm * PESO_APTITUD; // 0..1
  });

  return { intereses, aptitudes, afinidad };
}

/**
 * Calcula score de cada carrera usando afinidad combinada.
 */
export function calcularCarreras(afinidad) {
  return CARRERAS.map(c => {
    let score = 0;
    Object.entries(c.pesos).forEach(([area, peso]) => {
      score += (afinidad[area] || 0) * peso;
    });
    return { ...c, score };
  }).sort((a, b) => b.score - a.score);
}
