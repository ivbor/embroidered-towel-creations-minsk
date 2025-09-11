import React from 'react'

export const DeliveryPayment: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-bold mb-6 text-center">Доставка и оплата</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-3 text-center">Доставка</h3>
        <ul className="text-sm space-y-2 text-center justify-center">
          <li>По Минску - от 1 дня</li>
          <li>По Беларуси - 2-3 дня</li>
          <li>В Россию - 5-7 дней</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-3 text-center">Оплата</h3>
        <ul className="text-sm space-y-2 text-center justify-center">
          <li>Оплата через ЕРИП</li>
          <li>Безналичный расчет</li>
        </ul>
      </div>
    </div>
  </section>
)
