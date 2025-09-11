import React from 'react'

const data = [
  { t:'Выбор полотенец', d:'Определяем размеры, плотность, цвет и количество. Консультируем.', time:'~2 часа' },
  { t:'Дизайн вышивки', d:'Каталог или ваш макет. Перед стартом — визуализация.', time:'~1 день' },
  { t:'Производство', d:'Выполняем вышивку на производстве в Минске. Контроль качества.', time:'3–5 дней' },
  { t:'Упаковка и доставка', d:'Подарочная или стандартная упаковка. Быстрая доставка.', time:'~1 день' },
]

export const Steps: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-6">Этапы работы</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс работы</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Выбор полотенец</h4>
                    <p className="text-gray-600">Определяем размеры, плотность, цвет и количество. Консультируем.</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-white rounded-full flex items-center justify-center font-bold">~2 часа</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Дизайн вышивки</h4>
                    <p className="text-gray-600">Каталог или ваш макет. Перед стартом — визуализация.</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-white rounded-full flex items-center justify-center font-bold">~1 день</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Производство</h4>
                    <p className="text-gray-600">Выполняем вышивку на производстве в Минске. Контроль качества.</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-white rounded-full flex items-center justify-center font-bold">3–5 дней</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Упаковка на выбор и быстрая доставка</h4>
                    <p className="text-gray-500">Подарочная или стандартная упаковка. Быстрая доставка.</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-white rounded-full flex items-center justify-center font-bold">~1 день</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  // <section className="mx-auto max-w-6xl px-4 py-12">
  //   <h2 className="text-2xl font-bold mb-6">Этапы работы</h2>
  //   <ol className="grid md:grid-cols-4 gap-4">
  //     {data.map((s, i)=>(
  //       <li key={i} className="rounded-2xl border p-4 bg-white">
  //         <div className="text-xs text-gray-500 mb-1">Этап {i+1} • {s.time}</div>
  //         <h3 className="font-semibold">{s.t}</h3>
  //         <p className="text-sm mt-1">{s.d}</p>
  //       </li>
  //     ))}
  //   </ol>
  // </section>
)
