import React, { useMemo, useState } from 'react'
import { LeadForm } from './cta/LeadForm'

type Q = { key: string; title: string; options: string[] }
const questions: Q[] = [
  { key: 'qty', title: 'Выберите желаемое количество', options: ['<20','20-30','31-40','41-50','51-60','60+'] },
  { key: 'type', title: 'Выберите тип вышивки', options: ['Логотип компании','Текст/слоган','Комбинированная'] },
  { key: 'color', title: 'Выберите цвет полотенец', options: ['Белый','Черный','Розовый','Желтый','Серый','Голубой'] },
  { key: 'goal', title: 'Цель заказа', options: ['Отель/гостиница','Спа-центр','Фитнес-центр','Корпоративный подарок','Сувениры для мероприятий','Кафе и рестораны','Подарки клиентам','Свадьбы и торжества','Другие цели'] },
]

export const CalculatorQuiz: React.FC = () => {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const [done, setDone] = useState(false)

  const q = questions[step]
  const leftCta = useMemo(()=>(
    <div className="rounded-2xl border p-6 bg-stone-100">
      <h3 className="text-xl font-bold mb-2 text-center">Ответьте на {questions.length} вопроса и получите:</h3>
        <div className="rounded-2xl border m-6 bg-gray-200 text-center">Скидки до 20%</div>
        <div className="rounded-2xl border m-6 bg-gray-200 text-center">Бесплатную подарочную упаковку</div>
        <div className="rounded-2xl border m-6 bg-gray-200 text-center">Индивидуальную консультацию</div>
    </div>
  ),[])

  function choose(opt: string) {
    const next = { ...answers, [q.key]: opt }
    setAnswers(next)
    if (step < questions.length - 1) {
      setStep(step + 1) // auto-advance per brief :contentReference[oaicite:6]{index=6}
    } else {
      setDone(true)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Рассчитайте срок изготовления заказа</h2>
      {!done ? (
        <div className="grid md:grid-cols-2 gap-6 bg-white">
          {leftCta}
          <div className="rounded-2xl border p-6 bg-stone-100">
{/*             <div className="text-sm text-gray-500 mb-2">Шаг {step+1} из {questions.length}</div> */}
            <div className="rounded-2xl bg-white">
              <h3 className="text-lg font-semibold mb-4">{q.title}</h3>
              <div className="rounded-2xl grid grid-cols-2 gap-3 bg-white">
                {q.options.map(opt=>(
                  <button
                    key={opt}
                    onClick={()=>choose(opt)}
                    className="rounded-xl border px-3 py-2 hover:shadow-sm active:scale-[.99] transition bg-gray-200"
                  >{opt}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {leftCta}
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">Благодарим за ответы. Наш специалист свяжется с вами в ближайшее время</h3>
{/*             <ul className="text-sm mb-4">
              {Object.entries(answers).map(([k,v])=>(
                <li key={k}><span className="font-medium">{k}:</span> {v}</li>
              ))}
            </ul> */}
            <LeadForm submitLabel="Получить расчет стоимости" />
          </div>
        </div>
      )}

      <div className="mt-8">
        <div className="rounded-2xl border p-6 bg-gray-50">
          <div className="md:flex items-center justify-between gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-center">Не нашли подходящий вариант?</h3>
            </div>
            {/* phone required, name optional per brief :contentReference[oaicite:7]{index=7} */}
            <LeadForm submitLabel="Индивидуальный расчет" phoneRequired />
          </div>
        </div>
      </div>
    </section>
  )
}
