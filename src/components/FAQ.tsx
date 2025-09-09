import React, { useState } from 'react'
import { LeadForm } from './cta/LeadForm'

const Q = [
  { q:'Какие материалы используются для полотенец?',
    a:'Хлопок 430–500 г/м²: мягкость, долговечность, отличная впитываемость.' },
  { q:'Можно ли сделать индивидуальную вышивку?',
    a:'Да, по вашему макету или поможем разработать уникальный дизайн.' },
  { q:'Какие сроки изготовления заказа?',
    a:'В среднем 3–7 рабочих дней после утверждения макета.' },
  { q:'Есть ли доставка по Беларуси?',
    a:'Да, собственной курьерской службой или партнёрами.' },
  { q:'Какие варианты упаковки доступны?',
    a:'Подарочная, стандартная или без упаковки.' },
]

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState(0) // first open by default per brief :contentReference[oaicite:10]{index=10}
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
          <ul className="divide-y">
            {Q.map((item, idx)=>(
              <li key={idx}>
                <button
                  onClick={()=>setOpen(idx)}
                  className="w-full text-left py-3 flex items-center justify-between"
                  aria-expanded={open===idx}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className={`transition-transform ${open===idx ? 'rotate-180' : ''}`}>▾</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open===idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3 text-sm text-gray-700">{item.a}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border p-6 bg-white">
          <h3 className="text-lg font-semibold mb-2">Остались вопросы? Оставьте заявку и мы свяжемся с вами в течение 10 минут!</h3>
          {/* Name & Phone required; email optional; phone masked on input side by browser pattern; success message handled in LeadForm */}
          <LeadForm submitLabel="Оставить заявку" nameRequired phoneRequired />
        </div>
      </div>
    </section>
  )
}
