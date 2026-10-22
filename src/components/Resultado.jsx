import { useState } from 'react';
import RadarArea from './RadarArea.jsx';
import { AREAS, ORDEN_AREAS } from '../data/preguntas.js';

const pct = (x) => Math.round(x * 100);

async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = texto;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function Resultado({ resultado, onReiniciar }) {
  const { interes, aptitud, afinidad, ranking, carreras } = resultado;
  const top3 = ranking.slice(0, 3);
  const areaTop = ranking[0];
  const sinPerfil = afinidad[areaTop] === 0;
  const [aviso, setAviso] = useState('');

  const datosInteres = ORDEN_AREAS.map((a) => ({ label: AREAS[a].corto, valor: interes[a] }));
  const datosAptitud = ORDEN_AREAS.map((a) => ({ label: AREAS[a].corto, valor: aptitud[a] }));

  const compartir = async () => {
    const texto =
      `Mi perfil vocacional (CHASIDE – UPDS Sucre)\n` +
      `Áreas más fuertes: ${top3.map((a) => `${AREAS[a].nombre} (${pct(afinidad[a])}%)`).join(', ')}\n` +
      `Carreras sugeridas: ${carreras.map((c) => c.nombre).join(', ')}\n` +
      `¡Haz el test tú también!`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mi perfil vocacional', text: texto, url });
        return;
      } catch (e) {
        if (e && e.name === 'AbortError') return; // el usuario canceló
      }
    }
    const ok = await copiar(`${texto}\n${url}`);
    setAviso(ok ? '¡Copiado al portapapeles!' : 'No se pudo compartir');
    setTimeout(() => setAviso(''), 2500);
  };

  return (
    <main className="min-h-screen max-w-xl mx-auto px-4 py-6 space-y-6">
      <header className="flex flex-col items-center text-center">
        <img
          src="/logo-upds.png"
          alt="Universidad Privada Domingo Savio"
          className="h-16 w-auto mb-3"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <h1 className="text-3xl font-extrabold text-upds-marino">Tu perfil vocacional</h1>
      </header>

      {sinPerfil ? (
        <section className="bg-white rounded-2xl shadow-md p-5 text-center text-gray-700">
          No marcaste ningún "SÍ", por lo que no podemos identificar un perfil.
          Reinicia el test y responde con sinceridad.
        </section>
      ) : (
        <>
          <section className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-xl font-extrabold text-upds-marino mb-4">
              🌟 Tus áreas más fuertes
            </h2>
            <ul className="space-y-4">
              {top3.map((a) => (
                <li key={a}>
                  <div className="flex justify-between font-bold text-sm mb-1">
                    <span className="text-gray-800">{AREAS[a].nombre}</span>
                    <span style={{ color: AREAS[a].color }}>{pct(afinidad[a])}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct(afinidad[a])}%`, backgroundColor: AREAS[a].color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <RadarArea
            titulo="Intereses (lo que te gusta)"
            datos={datosInteres}
            max={10}
            color="#0056A4"
          />
          <RadarArea
            titulo="Aptitudes (lo que hacés bien)"
            datos={datosAptitud}
            max={4}
            color="#E30613"
          />

          <section>
            <h2 className="text-xl font-extrabold text-upds-marino mb-3">
              🎓 Carreras UPDS recomendadas para vos
            </h2>
            <div className="space-y-4">
              {carreras.map((c, i) => (
                <article
                  key={c.nombre}
                  className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-upds-verde"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-upds-verde">#{i + 1}</p>
                      <p className="text-xs text-gray-500 font-semibold">{c.facultad}</p>
                      <h3 className="text-lg font-extrabold text-upds-marino leading-tight">
                        {c.nombre}
                      </h3>
                    </div>
                    <span className="text-2xl font-extrabold text-upds-azul whitespace-nowrap">
                      {pct(c.score)}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{c.descripcion}</p>
                </article>
              ))}
            </div>
          </section>

          {areaTop === 'D' && (
            <section
              className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-amber-900 text-sm font-semibold"
              role="note"
            >
              Tu perfil se inclina por Defensa y Seguridad, un área en la que la UPDS
              Sucre no ofrece carreras actualmente. Te invitamos a conversar con el equipo
              de orientación.
            </section>
          )}
        </>
      )}

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={compartir}
          className="min-h-[64px] rounded-2xl bg-upds-azul text-white text-lg font-extrabold shadow-md active:scale-95 transition-transform"
        >
          Compartir
        </button>
        <button
          type="button"
          onClick={onReiniciar}
          className="min-h-[64px] rounded-2xl bg-gray-200 text-gray-800 text-lg font-extrabold shadow-md active:scale-95 transition-transform"
        >
          Reiniciar
        </button>
      </div>
      <p className="h-5 text-center text-sm font-semibold text-upds-verde" aria-live="polite">
        {aviso}
      </p>

      <footer className="text-center text-xs text-gray-500 pb-6 space-y-1">
        <p>
          Instrumento orientativo. No reemplaza una consulta con un Gabinete de
          Orientación Vocacional.
        </p>
        <p>CHASIDE ® – De León &amp; Rodríguez.</p>
      </footer>
    </main>
  );
}
