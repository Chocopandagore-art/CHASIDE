// ============================================================
// CHASIDE - Datos oficiales (NO MODIFICAR la plantilla)
// ============================================================

export const ORDEN_AREAS = ['C', 'H', 'A', 'S', 'I', 'D', 'E'];

export const AREAS = {
  C: { clave: 'C', nombre: 'Administrativas y Contables', corto: 'Admin/Contab.', color: '#0056A4' },
  H: { clave: 'H', nombre: 'Humanísticas y Sociales', corto: 'Humanísticas', color: '#E30613' },
  A: { clave: 'A', nombre: 'Artísticas', corto: 'Artísticas', color: '#9C27B0' },
  S: { clave: 'S', nombre: 'Medicina y Ciencias de la Salud', corto: 'Salud', color: '#00A651' },
  I: { clave: 'I', nombre: 'Ingeniería y Computación', corto: 'Ingeniería', color: '#FF9800' },
  D: { clave: 'D', nombre: 'Defensa y Seguridad', corto: 'Defensa', color: '#455A64' },
  E: { clave: 'E', nombre: 'Ciencias Exactas y Agrarias', corto: 'Exactas/Agr.', color: '#8BC34A' },
};

export const ITEMS_INTERES = 10;
export const ITEMS_APTITUD = 4;
export const TOTAL_PREGUNTAS = 98;

export const PLANTILLA = {
  interes: {
    C: [98, 12, 64, 53, 85, 1, 78, 20, 71, 91],
    H: [9, 34, 80, 25, 95, 67, 41, 74, 56, 89],
    A: [21, 45, 96, 57, 28, 11, 50, 3, 81, 36],
    S: [33, 92, 70, 8, 87, 62, 23, 44, 16, 52],
    I: [75, 6, 19, 38, 60, 27, 83, 54, 47, 97],
    D: [84, 31, 48, 73, 5, 65, 14, 37, 58, 24],
    E: [77, 42, 88, 17, 93, 32, 68, 49, 35, 61],
  },
  aptitud: {
    C: [15, 51, 2, 46],
    H: [63, 30, 72, 86],
    A: [22, 39, 76, 82],
    S: [69, 40, 29, 4],
    I: [26, 59, 90, 10],
    D: [13, 66, 18, 43],
    E: [94, 7, 79, 55],
  },
};

// Índice 0 = pregunta 1
const TEXTOS = [
  "¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?",
  "¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?",
  "¿Te gustaría dirigir un proyecto para diseñar barrios en tu provincia?",
  "¿Ante una frustración siempre opones un pensamiento positivo?",
  "¿Te dedicarías a ayudar a personas accidentadas o atacadas por asaltantes?",
  "¿Cuando eras chico, te interesaba saber cómo estaban construidos tus juguetes?",
  "¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?",
  "¿Escuchas atentamente los problemas que te plantean tus amigos?",
  "¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?",
  "¿Sos exigente y crítico con tu equipo de trabajo?",
  "¿Te atrae armar rompecabezas o puzzles?",
  "¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?",
  "¿Usar uniforme te hace sentir distinto, importante?",
  "¿Participarías de una investigación sobre la violencia en el fútbol?",
  "¿Organizas tu dinero de manera que te alcance hasta el próximo cobro?",
  "¿Convences fácilmente a otras personas sobre la validez de tus argumentos?",
  "¿Estás informado sobre los nuevos descubrimientos que se están realizando sobre la Teoría del Big Bang?",
  "Ante una situación de emergencia, ¿actuás rápidamente?",
  "¿Cuando tenés que resolver un problema matemático, perseverás hasta encontrar la solución?",
  "¿Si te convocara tu club preferido para dirigir un campo de deportes, aceptarías?",
  "¿Sos el que pone un toque de alegría en las fiestas?",
  "¿Crees que los detalles son tan importantes como el todo?",
  "¿Te sentirías a gusto trabajando en un ámbito hospitalario?",
  "¿Te gustaría participar para mantener el orden en situaciones de emergencia o cataclismos?",
  "¿Pasarías varias horas leyendo algún libro de tu interés?",
  "¿Planificas detalladamente tus trabajos antes de empezar?",
  "¿Entablas una relación casi personal con tu computadora?",
  "¿Disfrutas modelando con arcilla o plastilina?",
  "¿Ayudas habitualmente a los ciegos a cruzar la calle?",
  "¿Consideras importante que los alumnos de la primaria sean críticos y participativos?",
  "¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?",
  "¿Te gustaría crear nuevas técnicas para descubrir enfermedades a través del microscopio?",
  "¿Participarías en una campaña de prevención contra la enfermedad de Chagas?",
  "¿Te interesan los temas relacionados con el pasado y la evolución del hombre?",
  "¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
  "Fuera de los horarios escolares, ¿dedicas algún día de la semana a la actividad física?",
  "¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?",
  "¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?",
  "¿Te gusta más el trabajo manual que el trabajo intelectual?",
  "¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tus servicios como profesional?",
  "¿Participarías en una investigación sobre violencia en el fútbol?",
  "¿Te gustaría trabajar en un laboratorio mientras estudias?",
  "¿Arriesgarías tu vida para salvar la vida de otro que no conoces?",
  "¿Te agradaría hacer un curso de primeros auxilios?",
  "¿Tolerarías empezar tantas veces como fuere necesario hasta obtener el logro deseado?",
  "¿Distribuís tus horarios del día adecuadamente para poder hacer todo lo planeado?",
  "¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?",
  "¿Elegirías una profesión en la que tuvieras que estar algunos meses alejado de tu familia, por ejemplo el marino?",
  "¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?",
  "¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?",
  "¿Te resulta fácil coordinar un grupo de trabajo?",
  "¿Te resultó interesante el estudio de las ciencias biológicas?",
  "¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?",
  "¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu provincia?",
  "¿Tenés interés por saber cuáles son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?",
  "¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?",
  "¿Desearías que te regalen algún instrumento musical para tu cumpleaños?",
  "¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?",
  "¿Crees que tus ideas son importantes y haces todo lo posible para ponerlas en práctica?",
  "¿Cuando se descompone un artefacto en tu casa, te dispones prontamente a repararlo?",
  "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?",
  "¿Acostumbras a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
  "¿Preservar las raíces culturales de nuestro país te parece importante y necesario?",
  "¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
  "¿Te gustaría realizar tareas auxiliares en un barco, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc.?",
  "¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?",
  "¿La libertad y la justicia son valores fundamentales en tu vida?",
  "¿Aceptarías hacer una práctica rentada en una industria de productos alimenticios en el sector de control de calidad?",
  "¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?",
  "¿Te interesaría investigar sobre alguna nueva vacuna?",
  "¿En un equipo de trabajo, preferís el rol de coordinador?",
  "¿En una discusión entre amigos, te ofreces como mediador?",
  "¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?",
  "¿Lucharías por una causa justa hasta las últimas consecuencias?",
  "¿Te gustaría investigar científicamente sobre cultivos agrícolas?",
  "¿Harías un nuevo diseño de una prenda pasada de moda ante una reunión imprevista?",
  "¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?",
  "¿Dirigirías el área de importación y exportación de una empresa?",
  "¿Te inhibís al entrar a un lugar nuevo con gente desconocida?",
  "¿Te gratificaría el trabajar con niños?",
  "¿Harías el diseño de un afiche para una campaña contra el SIDA?",
  "¿Dirigirías un grupo de teatro independiente?",
  "¿Enviarías tu currículum a una empresa automotriz que solicita gerente para su área de producción?",
  "¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?",
  "¿Te pagarías tus estudios trabajando en una auditoría?",
  "¿Sos de los que defendés causas perdidas?",
  "¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?",
  "¿Sabrías responder qué significa ADN y ARN?",
  "¿Elegirías una carrera cuyo instrumento de trabajo fuere la utilización de un idioma extranjero?",
  "¿Trabajar con objetos te resulta más gratificante que trabajar con personas?",
  "¿Te resultaría gratificante ser asesor contable en una empresa reconocida?",
  "Ante un llamado solidario, ¿te ofrecerías para cuidar a un enfermo?",
  "¿Te atrae investigar sobre los misterios del universo, por ejemplo los agujeros negros?",
  "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?",
  "¿Dedicarías parte de tu tiempo a ayudar a personas de zonas carenciadas?",
  "¿Cuando elegís tu ropa o decorás un ambiente tenés en cuenta la combinación de los colores, las telas o el estilo de los muebles?",
  "¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?",
  "¿Sabes qué es el PBI?",
];

// Mapa número -> { area, tipo }, con verificación de integridad
const mapa = {};
['interes', 'aptitud'].forEach((tipo) => {
  ORDEN_AREAS.forEach((area) => {
    PLANTILLA[tipo][area].forEach((n) => {
      if (mapa[n]) throw new Error(`CHASIDE: ítem duplicado en plantilla: ${n}`);
      mapa[n] = { area, tipo };
    });
  });
});

if (TEXTOS.length !== TOTAL_PREGUNTAS || Object.keys(mapa).length !== TOTAL_PREGUNTAS) {
  throw new Error('CHASIDE: la plantilla o los textos no tienen 98 ítems.');
}

export const PREGUNTAS = TEXTOS.map((texto, i) => ({
  id: i + 1,
  texto,
  area: mapa[i + 1].area,
  tipo: mapa[i + 1].tipo,
}));
