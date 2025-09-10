import React from 'react'

const groups = [
  'Гостиниц и отелей','Спа','Фитнес-центров','Корпоративных подарков',
  'Сувениров для мероприятий','Кафе и ресторанов','Подарков клиентам','Свадьб и торжеств'
]

export const Audience: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Лучший выбор для</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {groups.map((g)=>(
        <figure key={g} className="rounded-xl border p-4 bg-white">
          <figcaption className="text-sm font-medium">{g}</figcaption>
        </figure>
      ))}
    </div>
  </section>
)
