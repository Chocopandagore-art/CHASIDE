import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip
} from 'recharts';
import { AREAS, ORDEN_AREAS } from '../data/preguntas.js';

/**
 * Radar reutilizable para mostrar perfil por área CHASIDE.
 * @param {Object} props
 * @param {string} props.titulo
 * @param {Object} props.datos - { C, H, A, S, I, D, E } con valores numéricos
 * @param {number} props.max - valor máximo del eje (10 para intereses, 4 para aptitudes)
 * @param {string} props.color - color del polígono
 * @param {string} props.unidad - etiqueta del eje (ej: "puntos")
 */
export default function RadarArea({ titulo, datos, max, color, unidad = 'pts' }) {
  const data = ORDEN_AREAS.map(a => ({
    area: AREAS[a].corto,
    valor: datos[a] ?? 0,
    fullMark: max
  }));

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
      <h3 className="font-bold text-upds-marino text-center mb-1">{titulo}</h3>
      <p className="text-center text-xs text-slate-500 mb-2">
        Escala 0 – {max} {unidad}
      </p>
      <div className="w-full" style={{ height: '280px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis
              dataKey="area"
              tick={{ fill: '#1A2B5C', fontSize: 11, fontWeight: 600 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, max]}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              tickCount={max + 1}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                fontSize: 12
              }}
              formatter={(v) => [`${v} ${unidad}`, 'Valor']}
            />
            <Radar
              name={titulo}
              dataKey="valor"
              stroke={color}
              fill={color}
              fillOpacity={0.45}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
