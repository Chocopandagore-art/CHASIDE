export default function Inicio({ onComenzar }) {
  return (
    <div className="min-h-full flex flex-col px-5 py-8 max-w-xl mx-auto">
      <header className="flex flex-col items-center text-center mb-8">
        <img
          src="/logo-upds.png"
          alt="Universidad Privada Domingo Savio"
          className="h-20 w-auto mb-5 object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h1 className="text-3xl font-extrabold text-upds-marino leading-tight">
          Test de Orientación Vocacional
        </h1>
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-upds-azul/10 text-upds-azul font-bold text-sm tracking-wide">
          <span>CHASIDE</span>
        </div>
        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          Descubrí tus áreas de interés y aptitud, y conocé las carreras de la{' '}
          <span className="font-semibold text-upds-marino">UPDS Sucre</span>{' '}
          que mejor se adaptan a tu perfil.
        </p>
      </header>

      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-6">
        <h2 className="font-bold text-upds-marino mb-3 text-lg">¿Qué vas a hacer?</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-upds-verde text-white text-xs font-bold">✓</span>
            <span><strong>98 preguntas</strong> con respuesta Sí / No</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-upds-verde text-white text-xs font-bold">✓</span>
            <span>Duración aproximada: <strong>~8 minutos</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-upds-verde text-white text-xs font-bold">✓</span>
            <span><strong>100% anónimo</strong> — no guardamos tus datos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-upds-verde text-white text-xs font-bold">✓</span>
            <span>Al final vas a ver <strong>gráficos y carreras sugeridas</strong></span>
          </li>
        </ul>
      </section>

      <button
        onClick={onComenzar}
        className="w-full h-[64px] rounded-2xl bg-upds-rojo hover:bg-red-700 text-white font-extrabold text-lg shadow-lg active:scale-95 transition-transform"
      >
        Comenzar test →
      </button>

      <footer className="mt-8 text-center text-xs text-slate-500 leading-relaxed px-2">
        Instrumento orientativo. No reemplaza una consulta con un Gabinete de
        Orientación Vocacional.
      </footer>
    </div>
  );
}
