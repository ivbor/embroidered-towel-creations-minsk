import React from 'react'

const items = [
  'Индивидуальная вышивка',
  '100% натуральные материалы',
  'Оптовые цены',
  '100% Гарантия качества',
  'Доставка по СНГ'
]

export const Benefits: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-10">
  <h2 className="text-2xl font-bold mb-6 text-center">Почему выбирают нас</h2>

  {/* Mobile: 1 col  →  Tablet: 2 cols  →  Desktop: 4 cols */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    {items.map((t) => (
      <div
        key={t}
        className="rounded-3xl border p-6 min-h-[72px] h-full flex items-center justify-center text-center hover:shadow-md transition-shadow bg-gray-200"
      >
        <p>{t}</p>
      </div>
    ))}
  </div>
</section>
)
