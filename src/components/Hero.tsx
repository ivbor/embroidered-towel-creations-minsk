import React, { useState } from 'react'
import { LeadForm } from './cta/LeadForm'

export const Hero: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  return (
    {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-stone-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Производство в Минске
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Махровые <span className="text-amber-600">полотенца</span><br />
                Нанесение вышивки
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Большой выбор цветов и размеров полотенец. Более 1000 готовых макетов вышивки. 
                Подарочная упаковка. Скидки от 10% в зависимости от количества. Доставка по Беларуси и России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700"
                onClick={handleTelegramClick}
                >
                  Рассчитать заказ
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-amber-600 text-amber-700 hover:bg-amber-50"
                  onClick={handleTelegramClick}
                >
                  Узнать цвета в наличии
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Срок изготовления от 1 дня</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="bg-amber-50 rounded-lg p-6 mb-4">
                  <Package className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Оптом и в розницу</h3>
                  <p className="text-gray-600 text-sm">Продажа полотенец большим количеством и поштучно</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <Palette className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Индивидуальная вышивка</h3>
                  <p className="text-gray-600 text-sm">По желанию - нанесение вышивки на полотенца</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Button after Hero */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <LeadForm/>
        </div>
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700"
            onClick={handleTelegramClick}
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

    
    <div className="border-b bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Махровые полотенца с индивидуальной вышивкой
          </h1>
          <ul className="space-y-2 text-sm">
            <li>1000+ готовых макетов вышивки</li>
            <li>Подарочная упаковка</li>
            <li>Изготовление от 1 дня</li>
            <li>Доставка по СНГ • 100% гарантия • Оптовые цены</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          {!submitted ? (
            <>
              <h2 className="text-xl font-bold mb-2">Получить скидку −10%</h2>
              {/* name optional, phone required per brief :contentReference[oaicite:5]{index=5} */}
              <LeadForm
                submitLabel="Получить скидку −10%"
                onSuccess={() => setSubmitted(true)}
              />
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-lg font-semibold">Спасибо! Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
