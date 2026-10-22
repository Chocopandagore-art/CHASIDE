import { useEffect, useMemo, useState } from 'react';
import Inicio from './components/Inicio.jsx';
import Cuestionario from './components/Cuestionario.jsx';
import Resultado from './components/Resultado.jsx';
import {
  PREGUNTAS,
  ORDEN_AREAS,
  ITEMS_INTERES,
  ITEMS_APTITUD,
} from './data/preguntas.js';
import {
  PESO_INTERES,
  PESO_APTITUD,
  recomendarCarreras,
} from './data/carreras.js';

/**
 * Calcula todo el resultado a partir de las respuestas { [idPregunta]: true|false }.
 * 1) SÍ por área y tipo  2) normalización  3) afinidad 60/40  4) carreras
 */
export function calcularResultado(respuestas) {
  const interes = {};
  const aptitud = {};
  ORDEN_AREAS.forEach((a) => {
    interes[a] = 0;
    aptitud[a] = 0;
  });

  PREGUNTAS.forEach((p) => {
    if (respuestas[p.id] === true) {
      if (p.tipo === 'interes') interes[p.area] += 1;
      else aptitud[p.area] += 1;
    }
  });

  const afinidad = {};
  ORDEN_AREAS.forEach((a) => {
    const interesNorm = interes[a] / ITEMS_INTERES;
    const aptitudNorm = aptitud[a] / ITEMS_APTITUD;
    afinidad[a] = interesNorm * PESO_INTERES + aptitudNorm * PESO_APTITUD;
  });

  // Desempate: mayor afinidad, luego mayor interés, luego orden CHASIDE
  const ranking = [...ORDEN_AREAS].sort(
    (x, y) => afinidad[y] - afinidad[x] || interes[y] - interes[x]
  );

  const carreras = recomendarCarreras(afinidad, 3);

  return { interes, aptitud, afinidad, ranking, carreras };
}

export default function App() {
  const [pantalla, setPantalla] = useState('inicio'); // inicio | test | resultado
  const [respuestas, setRespuestas] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pantalla]);

  const resultado = useMemo(
    () => (pantalla === 'resultado' ? calcularResultado(respuestas) : null),
    [pantalla, respuestas]
  );

  const terminar = (respuestasFinales) => {
    setRespuestas(respuestasFinales);
    setPantalla('resultado');
  };

  const reiniciar = () => {
    setRespuestas({});
    setPantalla('inicio');
  };

  if (pantalla === 'inicio') {
    return <Inicio onComenzar={() => setPantalla('test')} />;
  }

  if (pantalla === 'test') {
    return (
      <Cuestionario
        respuestas={respuestas}
        onResponder={setRespuestas}
        onTerminar={terminar}
        onSalir={() => setPantalla('inicio')}
      />
    );
  }

  return <Resultado resultado={resultado} onReiniciar={reiniciar} />;
}
