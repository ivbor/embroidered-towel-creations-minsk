import React from 'react'

export const DeliveryPayment: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-bold mb-6 text-center">Доставка и оплата</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-3 text-center">Доставка</h3>
        <ul className="text-sm space-y-2">
          <li>Курьерская по РБ и СНГ</li>
          <li>Сроки зависят от тиража и адреса</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 bg-white">
        <h3 className="font-semibold mb-3 text-center">Оплата</h3>
        <ul className="text-sm space-y-2">
          <li>Безналичный расчет</li>
          <li>Наличный расчет</li>
        </ul>
      </div>
    </div>
  </section>
)
