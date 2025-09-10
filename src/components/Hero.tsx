import React, { useState } from 'react'
import { LeadForm } from './cta/LeadForm'

export const Hero: React.FC = () => {
  return (
    <div className="border-b bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Махровые <span className="text-orange-300">полотенца</span><br /> с индивидуальной вышивкой
          </h1>
          <ul className="space-y-2 text-2xl">
            <li>1000+ готовых макетов вышивки</li>
            <li>Подарочная упаковка</li>
            <li>Изготовление от 1 дня</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          <LeadForm/>
        </div>
      </div>
    </div>
  )
}
