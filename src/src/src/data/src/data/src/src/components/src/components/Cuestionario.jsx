import { AREAS } from '../data/preguntas.js';

export default function Cuestionario({
  pregunta, indice, total, respuestaActual, onResponder, onAtras, puedeAtras
}) {
  const progreso = ((indice) / total) * 100;
  const area = AREAS[pregunta.area];

  return (
    <div className="min-h-full flex flex-col max-w-xl mx-auto">
      {/* Barra de progreso */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="h-2 bg-slate-200">
          <div
            className="h-full bg-upds-verde transition-all duration-300 ease-out"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onAtras}
            disabled={!puedeAtras}
            className="text-upds-azul font-semibold text-sm disabled:text-slate-300 disabled:cursor-not-allowed active:scale-95 transition-transform"
          >
            ← Atrás
          </button>
          <div className="font-bold text-upds-marino text-sm tabular-nums">
            {indice + 1} / {total}
          </div>
        </div>
      </div>

      {/* Pregunta */}
      <div className="flex-1 px-5 py-6 flex flex-col">
        <div
          key={pregunta.id}
          className="animate-fade-slide-in flex-1 flex flex-col"
        >
          <div className="mb-2">
            <span
              className="inline-block text-xs font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: area.color }}
            >
              {area.corto}
            </span>
            <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {pregunta.tipo === 'interes' ? 'Interés' : 'Aptitud'}
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-6">
            <p className="text-lg font-semibold text-upds-marino leading-snug">
              {pregunta.texto}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto">
            <button
              onClick={() => onResponder(true)}
              className={`h-[64px] rounded-2xl font-extrabold text-lg shadow-md active:scale-95 transition-all ${
                respuestaActual === true
                  ? 'bg-upds-verde text-white ring-4 ring-upds-verde/30'
                  : 'bg-upds-verde text-white hover:bg-green-700'
              }`}
            >
              SÍ
            </button>
            <button
              onClick={() => onResponder(false)}
              className={`h-[64px] rounded-2xl font-extrabold text-lg shadow-md active:scale-95 transition-all ${
                respuestaActual === false
                  ? 'bg-slate-600 text-white ring-4 ring-slate-600/30'
                  : 'bg-slate-400 text-white hover:bg-slate-500'
              }`}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
