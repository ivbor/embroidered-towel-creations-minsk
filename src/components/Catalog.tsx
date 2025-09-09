import React from 'react'

export const Catalog: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-bold mb-6">Каталог</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-2">Характеристики</h3>
        <ul className="text-sm space-y-1">
          <li>Плотность: 430–500 г/м²</li>
          <li>Размеры: 30×50, 50×90, 70×140</li>
          <li>Материал: 100% хлопок</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-2">Варианты цветов</h3>
        <div className="grid grid-cols-3 gap-2">
          {['Белый','Черный','Серый','Голубой','Розовый','Желтый'].map(c=>(
            <div key={c} className="aspect-video rounded-xl border grid place-items-center text-sm">{c}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
