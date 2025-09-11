import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { LeadForm } from './LeadForm'

export const CTAFormModal: React.FC<{ open: boolean; onClose: ()=>void }> = ({ open, onClose, text1, text2 }) => {
  useEffect(()=>{
    function onKey(e: KeyboardEvent){ if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return ()=>document.removeEventListener('keydown', onKey)
  },[onClose])
  if (!open) return null
  const root = document.getElementById('modal-root')!
  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">×</button>
        <h3 className="text-lg font-semibold mb-2">Оставьте заявку</h3>
        <LeadForm text1={text1} text2={text2} />
      </div>
    </div>,
    root
  )
}
