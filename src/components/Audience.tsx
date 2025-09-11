import React from 'react'

const groups = [
  'Гостиниц и отелей','Спа','Фитнес-центров','Корпоративных подарков',
  'Сувениров для мероприятий','Кафе и ресторанов','Подарков клиентам','Свадьб и торжеств'
]

const images = [
  'hotel.jpeg','spa.webp','gym.webp','gift.webp',
  'souvenir.webp','cafe.jpg','present.jpg','wedding.jpg'
]

export const Audience: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Лучший выбор для</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {groups.map((g, i) => (
      <figure
        key={g}
        className={`rounded-3xl border p-6 text-center text-white bg-cover bg-center`}
        style={{ backgroundImage: `url(/lovable-uploads/${images[i]}.jpg)` }}
      >
      <figcaption className="font-medium bg-black/40 rounded-md inline-block px-2">
        {g}
      </figcaption>
    </figure>
  ))}
    </div>
  </section>
)
