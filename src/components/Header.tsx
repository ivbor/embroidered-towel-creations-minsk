import React, { useState } from 'react'
import { CTAFormModal } from './cta/CTAFormModal'

const nav = [
  { id: 'calculator', label: 'Калькулятор' },
  { id: 'delivery-payment', label: 'Доставка и оплата' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'faq', label: 'FAQ' },
]

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b header">
        <img 
          src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
          alt="Rusan Logo" 
          className="h-12 w-auto"
        />
        <div className="border-b header-top">
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-4 justify-between container">
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 contacts">
              <a href="mailto:itiel@tut.by" className="text-sm underline underline-offset-4">itiel@tut.by</a>
              <p className="text-sm font-medium">Беларусь, г. Минск, ул. Гамарника, 22</p>
              <p className="text-sm font-medium">9:00 - 20:00</p>
              <a href="tel:+375291870066" className="text-sm font-medium">+375 29 187-00-66</a>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-[auto_1fr_auto] gap-4 items-center container navbar">
            <nav className="ml-auto hidden md:flex items-center gap-6">
              {nav.map(i => (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  {i.label}
                </a>
              ))}
              <button
                onClick={() => setOpen(true)}
                className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
              >
                Оставить заявку
              </button>
            </nav>
          </div>
        </div>
      </header>
      <CTAFormModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
