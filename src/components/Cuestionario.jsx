import { useRef, useState } from 'react';
import { PREGUNTAS, TOTAL_PREGUNTAS } from '../data/preguntas.js';

export default function Cuestionario({ respuestas, onResponder, onTerminar, onSalir }) {
  const [indice, setIndice] = useState(0);
  const [direccion, setDireccion] = useState('adelante');
  const bloqueo = useRef(false); // evita doble toque que salte preguntas

  const pregunta = PREGUNTAS[indice];
  const progreso = (indice / TOTAL_PREGUNTAS) * 100;
  const actual = respuestas[pregunta.id];

  const responder = (valor) => {
    if (bloqueo.current) return;
    bloqueo.current = true;
    setTimeout(() => {
      bloqueo.current = false;
    }, 220);

    const nuevas = { ...respuestas, [pregunta.id]: valor };
    onResponder(nuevas);

    if (indice === TOTAL_PREGUNTAS - 1) {
      onTerminar(nuevas);
      return;
    }
    setDireccion('adelante');
    setIndice((i) => i + 1);
  };

  const atras = () => {
    if (indice === 0) {
      onSalir();
      return;
    }
    setDireccion('atras');
    setIndice((i) => i - 1);
  };

  const animacion =
    direccion === 'adelante'
      ? 'animate-entrar-derecha motion-reduce:animate-none'
      : 'animate-entrar-izquierda motion-reduce:animate-none';

  return (
    <main className="min-h-screen flex flex-col max-w-xl mx-auto px-4 py-5">
      <div
        className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={TOTAL_PREGUNTAS}
        aria-valuenow={indice}
        aria-label="Progreso del test"
      >
        <div
          className="h-full bg-upds-verde transition-all duration-200"
          style={{ width: `${progreso}%` }}
        />
      </div>

      <header className="flex items-center justify-between mt-4">
        <button
          type="button"
          onClick={atras}
          className="min-h-[48px] px-4 rounded-xl text-upds-marino font-bold active:scale-95 transition-transform"
        >
          ← Atrás
        </button>
        <span className="text-upds-marino font-extrabold text-lg">
          {indice + 1} / {TOTAL_PREGUNTAS}
        </span>
      </header>

      <section className="flex-1 flex items-center py-6">
        <div
          key={pregunta.id}
          className={`w-full bg-white rounded-3xl shadow-lg p-7 min-h-[220px] flex items-center justify-center ${animacion}`}
        >
          <h2 className="text-2xl font-bold text-upds-marino text-center leading-snug">
            {pregunta.texto}
          </h2>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4 pb-4">
        <button
          type="button"
          onClick={() => responder(true)}
          aria-pressed={actual === true}
          className={`min-h-[72px] rounded-2xl bg-upds-verde text-white text-2xl font-extrabold shadow-md active:scale-95 transition-transform ${
            actual === true ? 'ring-4 ring-offset-2 ring-upds-marino' : ''
          }`}
        >
          SÍ
        </button>
        <button
          type="button"
          onClick={() => responder(false)}
          aria-pressed={actual === false}
          className={`min-h-[72px] rounded-2xl bg-gray-200 text-gray-800 text-2xl font-extrabold shadow-md active:scale-95 transition-transform ${
            actual === false ? 'ring-4 ring-offset-2 ring-upds-marino' : ''
          }`}
        >
          NO
        </button>
      </div>
    </main>
  );
}
