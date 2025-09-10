import React, { useState } from 'react'
import { LeadForm } from './cta/LeadForm'

export const Hero: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl m-3">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Махровые <span className="text-orange-300">полотенца</span><br /> 
            Нанесение вышивки
          </h1>
          <ul className="space-y-2 text-2xl list-disc">
            <li>1000+ готовых макетов вышивки</li>
            <li>Подарочная упаковка</li>
            <li>Изготовление от 1 дня</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-stone-100 p-6 hover:shadow-md transition-shadow">
          <LeadForm/>
        </div>
      </div>
    </div>
  )
}
