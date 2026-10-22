// ============================================================
// Pesos de la afinidad combinada (CONSTANTES CONFIGURABLES)
// Justificación: los intereses predicen mejor la permanencia en la carrera
// (la motivación es más estable); la aptitud inicial se entrena.
// Deben sumar 1.
// ============================================================
export const PESO_INTERES = 0.6;
export const PESO_APTITUD = 0.4;

export const FACULTADES = {
  salud: 'Ciencias de la Salud',
  empresarial: 'Ciencias Empresariales y Económicas',
  ingenieria: 'Ingeniería y Tecnología',
  sociales: 'Ciencias Sociales y Jurídicas',
};

// pesos: { área CHASIDE: peso }. La suma de pesos de cada carrera es 1.
export const CARRERAS = [
  { nombre: 'Medicina', facultad: FACULTADES.salud, pesos: { S: 1.0 },
    descripcion: 'Formación integral para el diagnóstico, tratamiento y prevención de enfermedades.' },
  { nombre: 'Fisioterapia y Kinesiología', facultad: FACULTADES.salud, pesos: { S: 1.0 },
    descripcion: 'Rehabilitación física y tratamiento del movimiento humano.' },

  { nombre: 'Administración de Empresas', facultad: FACULTADES.empresarial, pesos: { C: 1.0 },
    descripcion: 'Gestión de organizaciones, recursos y estrategia empresarial.' },
  { nombre: 'Ingeniería Comercial', facultad: FACULTADES.empresarial, pesos: { C: 0.7, I: 0.3 },
    descripcion: 'Gestión comercial con base analítica y tecnológica.' },
  { nombre: 'Contaduría Pública', facultad: FACULTADES.empresarial, pesos: { C: 1.0 },
    descripcion: 'Auditoría, contabilidad, tributación y finanzas.' },
  { nombre: 'Marketing y Publicidad', facultad: FACULTADES.empresarial, pesos: { C: 0.6, A: 0.4 },
    descripcion: 'Creatividad aplicada a la comunicación de marcas y productos.' },

  { nombre: 'Ingeniería de Sistemas', facultad: FACULTADES.ingenieria, pesos: { I: 1.0 },
    descripcion: 'Desarrollo de software, datos e infraestructura tecnológica.' },
  { nombre: 'Ingeniería Industrial', facultad: FACULTADES.ingenieria, pesos: { I: 0.7, E: 0.3 },
    descripcion: 'Optimización de procesos productivos y logística.' },
  { nombre: 'Ingeniería en Redes y Telecomunicaciones', facultad: FACULTADES.ingenieria, pesos: { I: 1.0 },
    descripcion: 'Diseño y gestión de redes y sistemas de comunicación.' },
  { nombre: 'Ingeniería en Gestión Petrolera', facultad: FACULTADES.ingenieria, pesos: { I: 0.5, E: 0.5 },
    descripcion: 'Exploración, extracción y gestión de hidrocarburos.' },
  { nombre: 'Ingeniería en Gestión Ambiental', facultad: FACULTADES.ingenieria, pesos: { E: 0.6, I: 0.4 },
    descripcion: 'Sostenibilidad, impacto ambiental y gestión de recursos naturales.' },

  { nombre: 'Derecho', facultad: FACULTADES.sociales, pesos: { H: 1.0 },
    descripcion: 'Formación jurídica para la defensa, asesoría y función pública.' },
  { nombre: 'Psicología', facultad: FACULTADES.sociales, pesos: { H: 0.6, S: 0.4 },
    descripcion: 'Estudio del comportamiento humano y acompañamiento terapéutico.' },
  { nombre: 'Ciencias de la Comunicación Social', facultad: FACULTADES.sociales, pesos: { H: 0.6, A: 0.4 },
    descripcion: 'Periodismo, medios, comunicación institucional y digital.' },
];

/**
 * Score = suma ponderada de las afinidades por área. Como los pesos de cada
 * carrera suman 1 y la afinidad va de 0 a 1, el score también va de 0 a 1.
 */
export function recomendarCarreras(afinidad, cantidad = 3) {
  return CARRERAS.map((c) => ({
    ...c,
    score: Object.entries(c.pesos).reduce(
      (acc, [area, peso]) => acc + peso * (afinidad[area] ?? 0),
      0
    ),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, cantidad);
}
