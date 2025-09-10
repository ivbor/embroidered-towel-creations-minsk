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
        {/* === Mobile (<= md): compact bar with logo + CTA === */}
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between md:hidden container">
          <img
            src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png"
            alt="Rusan Logo"
            className="h-8 w-auto object-contain logo"
          />
          <button
            onClick={() => setOpen(true)}
            className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow btn btn--primary"
          >
            Оставить заявку
          </button>
        </div>

        {/* === Desktop/Tablet: one grid (3 cols × 2 rows) ===
             Left logo spans 2 rows; center has contacts (row 1) + navbar (row 2);
             right CTA spans 2 rows. */}
        <div className="mx-auto max-w-6xl px-4 md:py-2 grid grid-cols-1 gap-y-2 md:grid-cols-[auto_1fr_auto] md:grid-rows-2 md:gap-x-6 items-center container">
          {/* Left: Logo (spans 2 rows) */}
          <div className="hidden md:flex row-span-2 items-center justify-start logo">
            <img
              src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png"
              alt="Rusan Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

         {/* Center / Row 1: contacts (keeps legacy hooks: contacts) */}
          <div className="contacts md:col-start-2 md:row-start-1 flex items-center flex-wrap gap-x-6 gap-y-1 text-sm">
            <a href="mailto:itiel@tut.by" className="underline underline-offset-4">itiel@tut.by</a>
           <p className="font-medium">Беларусь, г. Минск, ул. Гамарника, 22</p>
            <p className="font-medium">9:00 - 20:00</p>
            <a href="tel:+375291870066" className="font-medium">+375 29 187-00-66</a>
          </div>
          {/* Center / Row 2: navbar (centered) */}
          <nav className="navbar md:col-start-2 md:row-start-2 hidden md:flex items-center justify-center gap-6">
            {nav.map(i => (
              <button className="rounded-full px-5 py-2 text-sm font-semibold bg-gray-200 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform btn btn--primary">
              <a
                key={i.id}
                href={`#${i.id}`}
                className="text-sm hover:opacity-80 transition-opacity nav-link"
              >
                {i.label}
              </a>
              </button>
            ))}
          </nav>

          {/* Right: CTA (spans 2 rows) */}
          <div className="hidden md:flex row-span-2 items-center justify-end">
            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-5 py-2 text-sm font-semibold bg-orange-300 hover:bg-orange-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform btn btn--primary"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </header>
      <CTAFormModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

