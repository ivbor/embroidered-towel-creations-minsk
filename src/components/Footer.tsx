import React, { useState } from 'react'
import { CTAFormModal } from './cta/CTAFormModal'

export const Footer: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-[auto_1fr] gap-6 items-start">
          {/* Left: logo (non-clickable) per brief :contentReference[oaicite:11]{index=11} */}
          <div className="font-black text-xl select-none">RUSAN</div>
          <div className="grid sm:grid-cols-3 gap-4">
            <nav className="text-sm space-y-2">
              <a href="#calculator" className="block hover:opacity-80">Рассчитать стоимость</a>
              <a href="#catalog" className="block hover:opacity-80">Каталог</a>
              <a href="#delivery-payment" className="block hover:opacity-80">Доставка и оплата</a>
              <a href="#steps" className="block hover:opacity-80">Этапы работы</a>
              <a href="#reviews" className="block hover:opacity-80">Отзывы</a>
              <a href="#faq" className="block hover:opacity-80">Вопросы</a>
            </nav>
            <div className="text-sm space-y-1">
              <a href="tel:+375445641400" className="block font-medium">+375 44 564-14-00</a>
              <a href="mailto:itiel@tut.by" className="block underline underline-offset-4">itiel@tut.by</a>
              <div>г. Минск, ул. Гамарника, 22</div>
              <div>ИП Литвин Иван Григорьевич • УНП 193309437</div>
            </div>
            <div className="self-start">
              <button
                onClick={()=>setOpen(true)}
                className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </footer>
      <CTAFormModal open={open} onClose={()=>setOpen(false)} />
    </>
  )
}
