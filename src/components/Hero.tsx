import React, { useState } from 'react'
import { LeadForm } from './cta/LeadForm'

export const Hero: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="border-b bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Махровые полотенца с индивидуальной вышивкой
          </h1>
          <ul className="space-y-2 text-sm">
            <li>1000+ готовых макетов вышивки</li>
            <li>Подарочная упаковка</li>
            <li>Изготовление от 1 дня</li>
            <li>Доставка по СНГ • 100% гарантия • Оптовые цены</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          {!submitted ? (
            <>
              <h2 className="text-xl font-bold mb-2">Получить скидку −10%</h2>
              {/* name optional, phone required per brief :contentReference[oaicite:5]{index=5} */}
              <LeadForm
                submitLabel="Получить скидку −10%"
                onSuccess={() => setSubmitted(true)}
              />
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-lg font-semibold">Спасибо! Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
