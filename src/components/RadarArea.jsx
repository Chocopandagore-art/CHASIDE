import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

/**
 * Radar reutilizable.
 * datos: [{ label: 'Salud', valor: 7 }, ...]
 * max: tope de la escala (10 intereses, 4 aptitudes)
 */
export default function RadarArea({ titulo, datos, max, color }) {
  const resumen = datos.map((d) => `${d.label}: ${d.valor} de ${max}`).join(', ');

  return (
    <section className="bg-white rounded-2xl shadow-md p-4">
      <h3 className="font-extrabold text-lg text-center" style={{ color }}>
        {titulo}
      </h3>
      <div className="h-72 w-full" role="img" aria-label={`${titulo}. ${resumen}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datos} outerRadius="66%">
            <PolarGrid />
            <PolarAngleAxis dataKey="label" tick={{ fontSize: 11, fill: '#1A2B5C' }} />
            <PolarRadiusAxis
              angle={90}
              domain={[0, max]}
              tickCount={max <= 4 ? max + 1 : 6}
              tick={{ fontSize: 10, fill: '#6b7280' }}
              axisLine={false}
            />
            <Radar
              dataKey="valor"
              stroke={color}
              fill={color}
              fillOpacity={0.35}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
