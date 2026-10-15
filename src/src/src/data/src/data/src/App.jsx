import { useState } from 'react';
import Inicio from './components/Inicio.jsx';
import Cuestionario from './components/Cuestionario.jsx';
import Resultado from './components/Resultado.jsx';
import { PREGUNTAS, TOTAL_PREGUNTAS } from './data/preguntas.js';
import { calcularPerfil, calcularCarreras } from './data/carreras.js';

export default function App() {
  const [screen, setScreen] = useState('inicio'); // inicio | cuestionario | resultado
  const [respuestas, setRespuestas] = useState({}); // { [id]: true|false }
  const [indice, setIndice] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleComenzar() {
    setRespuestas({});
    setIndice(0);
    setScreen('cuestionario');
  }

  function handleResponder(valor) {
    const id = PREGUNTAS[indice].id;
    const nuevas = { ...respuestas, [id]: valor };
    setRespuestas(nuevas);

    if (indice + 1 >= TOTAL_PREGUNTAS) {
      // Última pregunta: calcular y pasar a resultado
      const perfil = calcularPerfil(nuevas, PREGUNTAS);
      const carreras = calcularCarreras(perfil.afinidad);
      setResultado({ ...perfil, carreras });
      setScreen('resultado');
    } else {
      setIndice(indice + 1);
    }
  }

  function handleAtras() {
    if (indice > 0) setIndice(indice - 1);
  }

  function handleReiniciar() {
    setRespuestas({});
    setIndice(0);
    setResultado(null);
    setScreen('inicio');
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-slate-50 to-slate-100">
      {screen === 'inicio' && <Inicio onComenzar={handleComenzar} />}
      {screen === 'cuestionario' && (
        <Cuestionario
          pregunta={PREGUNTAS[indice]}
          indice={indice}
          total={TOTAL_PREGUNTAS}
          respuestaActual={respuestas[PREGUNTAS[indice].id]}
          onResponder={handleResponder}
          onAtras={handleAtras}
          puedeAtras={indice > 0}
        />
      )}
      {screen === 'resultado' && resultado && (
        <Resultado resultado={resultado} onReiniciar={handleReiniciar} />
      )}
    </div>
  );
}
