import React from 'react'
import './reviews.css'

type Item = { img: string; text: string; org: string }
const items: Item[] = [
  { img: '/review1.jpg', text: 'Текст отзыва... Название организации', org: 'Организация А' },
  { img: '/review2.jpg', text: 'Текст отзыва... Название организации', org: 'Организация Б' },
  { img: '/review3.jpg', text: 'Текст отзыва... Название организации', org: 'Организация В' },
]

export const ReviewsFlip: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="text-2xl font-bold mb-6">Примеры работ и отзывы</h2>
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it, i)=>(
        <div key={i} className="flip">
          <div className={`flip-card ${i===1 ? 'flip-initial-back' : ''}`}>
            <div className="flip-front">
              <img src={it.img} alt={it.org} className="w-full h-48 object-cover rounded-xl"/>
            </div>
            <div className="flip-back rounded-xl">
              <div className="p-4 text-sm">
                <p className="mb-2">{it.text}</p>
                <div className="text-gray-500">{it.org}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)
