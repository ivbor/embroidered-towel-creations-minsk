import React, { useMemo, useState } from 'react'
import { LeadForm } from './cta/LeadForm'
import { CTAFormModal } from './cta/CTAFormModal'

type Q = { key: string; title: string; options: string[] }
const questions: Q[] = [
  { key: 'qty', title: 'Выберите желаемое количество', options: ['<20','20-30','31-40','41-50','51-60','60+'] },
  { key: 'type', title: 'Выберите тип вышивки', options: ['Логотип компании','Текст/слоган','Комбинированная'] },
  { key: 'color', title: 'Выберите цвет полотенец', options: ['Белый','Черный','Розовый','Желтый','Серый','Голубой'] },
  { key: 'goal', title: 'Цель заказа', options: ['Отель/гостиница','Спа-центр','Фитнес-центр','Корпоративный подарок','Сувениры для мероприятий','Кафе и рестораны','Подарки клиентам','Свадьбы и торжества','Другие цели'] },
]

export const CalculatorQuiz: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const q = questions[step]

  const leftCta = useMemo(() => (
    <div className="bg-stone-100 rounded-2xl p-6 m-3 h-full flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center">Ответьте на {questions.length} вопроса и получите:</h3>
      {/* taller tiles */}
      <div className="rounded-2xl border bg-gray-200 text-center px-4 py-10 min-h-[104px]">Скидки до 20%</div>
      <div className="rounded-2xl border bg-gray-200 text-center px-4 py-10 min-h-[104px]">Бесплатную подарочную упаковку</div>
      <div className="rounded-2xl border bg-gray-200 text-center px-4 py-10 min-h-[104px]">Индивидуальную консультацию</div>
    </div>
  ), [])

  function choose(opt: string) {
    const next = { ...answers, [q.title]: opt }
    setAnswers(next)
    if (step < questions.length - 1) setStep(step + 1)
    else setDone(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Рассчитайте срок изготовления заказа</h2>

      {/* WHITE wrapper */}
      <div className="rounded-3xl bg-white p-4 md:p-6 shadow-sm">
        {!done ? (
          // Two equal columns; each column gets margin inside white wrapper
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {leftCta}

            {/* right column (darker), quiz on white with margin */}
            <div className="bg-stone-100 rounded-2xl p-4 m-3 h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 m-2">
                <h3 className="text-lg font-semibold mb-4 text-center">{q.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => choose(opt)}
                      className="rounded-xl border px-3 py-2 hover:shadow-sm active:scale-[.99] transition bg-gray-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {leftCta}
            <div className="bg-stone-100 rounded-2xl p-4 m-3 h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 m-2">
                <h3 className="text-xl font-bold mb-2 text-center">
                  Благодарим за ответы. Наш специалист свяжется с вами в ближайшее время
                </h3>
                <LeadForm text1="Получить расчет стоимости" text2="Получить скидку -10%!" message={JSON.stringify(answers)} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* bottom CTA block unchanged */}
      <div className="mt-8">
        <div className="rounded-2xl border p-6 bg-gray-50">
          <div className="grid md:grid-cols-2 md:flex items-center justify-center gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-center">Не нашли подходящий вариант?</h3>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-5 py-2 text-sm font-semibold bg-orange-300 hover:bg-orange-400 text-black text-center shadow hover:scale-[1.02] active:scale-100 transition-transform btn btn--primary"
            >
              Индивидуальный расчет
            </button>
          </div>
        </div>
      </div>

      <CTAFormModal text1="Оставьте заявку на индивидуальный расчет!" text2="Получить скидку -10%!" open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
