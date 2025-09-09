import React from 'react'

const data = [
  { t:'Выбор полотенец', d:'Определяем размеры, плотность, цвет и количество. Консультируем.', time:'~2 часа' },
  { t:'Дизайн вышивки', d:'Каталог или ваш макет. Перед стартом — визуализация.', time:'~1 день' },
  { t:'Производство', d:'Выполняем вышивку на производстве в Минске. Контроль качества.', time:'3–5 дней' },
  { t:'Упаковка и доставка', d:'Подарочная или стандартная упаковка. Быстрая доставка.', time:'~1 день' },
]

export const Steps: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-bold mb-6">Этапы работы</h2>
    <ol className="grid md:grid-cols-4 gap-4">
      {data.map((s, i)=>(
        <li key={i} className="rounded-2xl border p-4 bg-white">
          <div className="text-xs text-gray-500 mb-1">Этап {i+1} • {s.time}</div>
          <h3 className="font-semibold">{s.t}</h3>
          <p className="text-sm mt-1">{s.d}</p>
        </li>
      ))}
    </ol>
  </section>
)
