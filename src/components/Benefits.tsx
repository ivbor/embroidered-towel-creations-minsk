import React from 'react'

const items = [
  'Индивидуальная вышивка',
  '100% натуральные материалы',
  'Опыт работы с корпоративными клиентами',
  'Гарантия качества',
]

export const Benefits: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-2xl font-bold mb-6">Почему выбирают нас</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((t) => (
        <div key={t} className="rounded-xl border p-4 hover:shadow-sm transition-shadow">
          <p>{t}</p>
        </div>
      ))}
    </div>
  </section>
)
