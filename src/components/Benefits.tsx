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
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
      {items.map((t) => (
        <div key={t} className="rounded-3xl border p-4 hover:shadow-md transition-shadow h-full text-center justify-center">
          <p>{t}</p>
        </div>
      ))}
    </div>
  </section>
)
