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
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          {/* Logo must be left, non-clickable per brief :contentReference[oaicite:3]{index=3} */}
          <div aria-label="RUSAN" className="font-black text-xl select-none">RUSAN</div>
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
            {/* Contacts: clickable tel/mailto per brief :contentReference[oaicite:4]{index=4} */}
            <a href="tel:+375291870066" className="text-sm font-medium">+375 29 187-00-66</a>
            <a href="mailto:itiel@tut.by" className="text-sm underline underline-offset-4">itiel@tut.by</a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
            >
              Оставить заявку
            </button>
          </nav>
        </div>
      </header>
      <CTAFormModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
