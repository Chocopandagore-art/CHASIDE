import { useState } from 'react';
import { AREAS, ORDEN_AREAS } from '../data/preguntas.js';
import RadarArea from './RadarArea.jsx';

export default function Resultado({ resultado, onReiniciar }) {
  const { intereses, aptitudes, afinidad, carreras } = resultado;
  const [copiado, setCopiado] = useState(false);

  // Top 3 áreas por afinidad
  const topAreas = ORDEN_AREAS
    .map(a => ({ area: a, valor: afinidad[a] }))
    .sort((x, y) => y.valor - x.valor)
    .slice(0, 3);

  const topCarreras = carreras.slice(0, 3);
  const areaTop = topAreas[0]?.area;
  const avisoDefensa = areaTop === 'D';

  async function handleCompartir() {
    const areasTxt = topAreas
      .map(t => `${AREAS[t.area].corto} (${Math.round(t.valor * 100)}%)`)
      .join(', ');
    const carrerasTxt = topCarreras
      .map((c, i) => `${i + 1}) ${c.nombre}`)
      .join(', ');
    const texto =
      `Mi perfil vocacional CHASIDE (UPDS Sucre)\n\n` +
      `Áreas más fuertes: ${areasTxt}.\n` +
      `Carreras sugeridas: ${carrerasTxt}.\n\n` +
      `Hacé tu test: [link del QR]`;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mi perfil CHASIDE', text: texto });
        return;
      } catch (_) { /* usuario cancela */ }
    }
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (_) {
      alert('No se pudo copiar. Copiá manualmente:\n\n' + texto);
    }
  }

  return (
    <div className="min-h-full px-5 py-6 max-w-xl mx-auto">
      <header className="flex flex-col items-center text-center mb-6">
        <img
          src="/logo-upds.png"
          alt="UPDS"
          className="h-14 w-auto mb-3 object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h1 className="text-2xl font-extrabold text-upds-marino">
          Tu perfil vocacional
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Resultados basados en el instrumento CHASIDE
        </p>
      </header>

      {/* Top 3 áreas */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-5">
        <h2 className="font-bold text-upds-marino text-lg mb-4">
          🌟 Tus áreas más fuertes
        </h2>
        <div className="space-y-3">
          {topAreas.map((t, i) => {
            const a = AREAS[t.area];
            const pct = Math.round(t.valor * 100);
            return (
              <div key={t.area}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-upds-marino text-sm">
                      #{i + 1}
                    </span>
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: a.color }}
                    />
                    <span className="font-semibold text-slate-700 text-sm">
                      {a.corto}
                    </span>
                  </div>
                  <span className="font-bold text-slate-700 text-sm tabular-nums">
                    {pct}%
                  </span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, backgroundColor: a.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Radares separados */}
      <section className="space-y-5 mb-5">
        <RadarArea
          titulo="Intereses (lo que te gusta)"
          datos={intereses}
          max={10}
          color="#0056A4"
          unidad="pts"
        />
        <RadarArea
          titulo="Aptitudes (lo que hacés bien)"
          datos={aptitudes}
          max={4}
          color="#E30613"
          unidad="pts"
        />
      </section>

      {/* Aviso especial si el área top es D */}
      {avisoDefensa && (
        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4 mb-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>⚠️ Atención:</strong> Tu perfil se inclina por{' '}
            <strong>Defensa y Seguridad</strong>, un área en la que la UPDS Sucre
            no ofrece carreras actualmente. Te invitamos a conversar con el
            equipo de orientación para explorar alternativas afines.
          </p>
        </section>
      )}

      {/* Top 3 carreras */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-5">
        <h2 className="font-bold text-upds-marino text-lg mb-4">
          🎓 Carreras UPDS recomendadas para vos
        </h2>
        <div className="space-y-3">
          {topCarreras.map((c, i) => {
            const pct = Math.round(c.score * 100);
            return (
              <article
                key={c.id}
                className="border-l-4 border-upds-verde bg-slate-50 rounded-r-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-upds-verde text-white font-extrabold flex items-center justify-center">
                    #{i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-bold text-upds-marino text-base leading-tight">
                        {c.nombre}
                      </h3>
                      <span className="font-bold text-upds-verde text-sm tabular-nums">
                        {pct}%
                      </span>
                    </div>
                    <p className="text-xs text-upds-azul font-semibold mt-0.5">
                      {c.facultad}
                    </p>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {c.descripcion}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Acciones */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={handleCompartir}
          className="h-[60px] rounded-2xl bg-upds-azul hover:bg-blue-800 text-white font-bold active:scale-95 transition-transform"
        >
          {copiado ? '✓ Copiado' : 'Compartir'}
        </button>
        <button
          onClick={onReiniciar}
          className="h-[60px] rounded-2xl bg-white border-2 border-upds-rojo text-upds-rojo font-bold hover:bg-red-50 active:scale-95 transition-transform"
        >
          Reiniciar
        </button>
      </div>

      <footer className="text-center text-xs text-slate-500 leading-relaxed px-2 pb-4">
        Instrumento orientativo. No reemplaza una consulta con un Gabinete de
        Orientación Vocacional.
        <br />
        <span className="text-slate-400">CHASIDE ® – De León &amp; Rodríguez.</span>
      </footer>
    </div>
  );
}
