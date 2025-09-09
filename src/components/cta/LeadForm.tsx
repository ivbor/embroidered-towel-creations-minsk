import React, { useState } from 'react'

type Props = {
  submitLabel: string
  onSuccess?: () => void
  nameRequired?: boolean
  phoneRequired?: boolean
}

export const LeadForm: React.FC<Props> = ({ submitLabel, onSuccess, nameRequired=false, phoneRequired=true }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  function validate() {
    if (nameRequired && !name.trim()) return 'Проверьте правильность заполнения формы'
    if (phoneRequired && !/^\+?\d[\d\s\-()]{6,}$/.test(phone)) return 'Проверьте правильность заполнения формы'
    return null
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setError(null)
    // TODO: send to backend / email handler; stub success now
    setSent(true)
    onSuccess?.()
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Имя"
               className={`rounded-xl border px-3 py-2 ${error && nameRequired && !name ? 'border-red-500' : ''}`} />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Телефон*"
               className={`rounded-xl border px-3 py-2 ${error && phoneRequired && !/^\+?\d[\d\s\-()]{6,}$/.test(phone) ? 'border-red-500' : ''}`}
               inputMode="tel" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Почта"
               className="rounded-xl border px-3 py-2" inputMode="email" />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button
        type="submit"
        className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
      >
        {submitLabel}
      </button>
      {sent && <div className="text-sm text-green-700">Спасибо! Наш специалист свяжется с вами в ближайшее время.</div>}
    </form>
  )
}
