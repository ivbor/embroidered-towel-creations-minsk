import React, { useState } from 'react'
import { CTAFormModal } from './cta/CTAFormModal'

export const Footer: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          {/* Left: logo + tagline (image can be any src you use) */}
          <img
          src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png"
          alt="Rusan Logo"
          className="h-16 w-auto object-contain logo"
          />

          {/* Middle: nav + contacts + CTA */}
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <nav className="text-base space-y-1 text-center">
              <a href="#calculator" className="block hover:opacity-80">Рассчитать стоимость</a>
              <a href="#catalog" className="block hover:opacity-80">Каталог</a>
              <a href="#delivery-payment" className="block hover:opacity-80">Доставка и оплата</a>
              <a href="#steps" className="block hover:opacity-80">Этапы работы</a>
              <a href="#reviews" className="block hover:opacity-80">Отзывы</a>
              <a href="#faq" className="block hover:opacity-80">Вопросы</a>
            </nav>

            <div className="text-base text-center space-y-1">
              <a href="tel:+375291870066" className="block font-medium">+375 29 187-00-66</a>
              <a href="mailto:itiel@tut.by" className="block underline underline-offset-4">itiel@tut.by</a>
              <div>г. Минск, ул. Гамарника, 22</div>

              <button
                onClick={() => setOpen(true)}
                className="rounded-full px-6 py-2 text-base font-semibold bg-orange-300 hover:bg-orange-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
              >
                Оставить заявку
              </button>
            </div>
          </div>

          {/* Right: legal / company info */}
          <div className="text-center text-base space-y-1">
            <p>ИП Литвин Иван Григорьевич 220040 г.</p>
            <p>Минск, ул. Восточная 38-184</p>
            <p>р/с № BY25AKBVB3013000005854000000,</p>
            <p>Банк: ОАО &quot;АСБ Беларусбанк&quot;</p>
            <p>ул.Мясникова, 32, 220050, г.Минск БИК</p>
            <p>AKBBBY2X</p>
            <p>Тел. +375 44 564-14-00</p>
            <p>УНП 193309437</p>
          </div>
        </div>
      </footer>

      <CTAFormModal text1="Оставить заявку на консультацию" text2="Отправить" open={open} onClose={() => setOpen(false)} />
    </>
  )
}

