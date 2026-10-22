const CARACTERISTICAS = [
  { icono: '📝', texto: '98 preguntas de Sí / No' },
  { icono: '⏱️', texto: 'Dura aproximadamente 8 minutos' },
  { icono: '🔒', texto: '100% anónimo, no guardamos tus datos' },
  { icono: '📊', texto: 'Resultado con gráficos y carreras sugeridas' },
];

export default function Inicio({ onComenzar }) {
  return (
    <main className="min-h-screen flex flex-col items-center px-5 py-8 max-w-xl mx-auto">
      <img
        src="/logo-upds.png"
        alt="Universidad Privada Domingo Savio"
        className="h-20 w-auto mb-6"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      <h1 className="text-3xl font-extrabold text-upds-marino text-center leading-tight">
        Test de Orientación Vocacional
      </h1>
      <p className="mt-1 text-2xl font-extrabold text-upds-rojo tracking-widest">
        CHASIDE
      </p>

      <p className="mt-4 text-center text-gray-700 text-base">
        Descubre qué áreas te atraen y en cuáles tienes mayor aptitud, y conoce
        las carreras de la UPDS Sucre que mejor se ajustan a tu perfil.
      </p>

      <ul className="mt-6 w-full bg-white rounded-2xl shadow-md p-5 space-y-3">
        {CARACTERISTICAS.map((c) => (
          <li key={c.texto} className="flex items-center gap-3 text-gray-800 font-semibold">
            <span className="text-2xl" aria-hidden="true">{c.icono}</span>
            <span>{c.texto}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onComenzar}
        className="mt-8 w-full min-h-[64px] rounded-2xl bg-upds-azul text-white text-xl font-extrabold shadow-lg active:scale-95 transition-transform"
      >
        Comenzar test →
      </button>

      <footer className="mt-auto pt-8 text-center text-xs text-gray-500">
        Instrumento orientativo. No reemplaza una consulta con un Gabinete de
        Orientación Vocacional.
      </footer>
    </main>
  );
}
