import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const LeadForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleFormSubmit = async () => {
    try {
      const message = `Новая заявка:
        Имя: ${formData.name}
        Телефон: ${formData.phone}
        Email: ${formData.email}`;

      const response = await fetch("https://api.rusan.by/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message": message })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.details || "Failed to send");

      // Success
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: ''
      });

    } catch (error) {
      // Error
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке заявки. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };
  // async function submit(e: React.FormEvent) {
  //   e.preventDefault()
  //   const err = validate()
  //   if (err) { setError(err); return }
  //   setError(null)
  //   // TODO: send to backend / email handler; stub success now
  //   setSent(true)
  //   onSuccess?.()
  // }

  return (
    // <form onSubmit={submit} className="space-y-3">
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Оставьте заявку на индивидуальный расчет!</h2>
      
      <div className="space-y-4">
        <Input 
          placeholder="Имя"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Input 
          placeholder="Телефон*"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <Input 
          placeholder="Почта"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Button
          className="w-full bg-amber-600 hover:bg-amber-700"
          size="lg"
          onClick={handleFormSubmit}>
            Получить скидку -10%!
        </Button>
      </div>
    </div>
    //   <div className="grid grid-cols-1 gap-3">
    //     <input value={name} onChange={e=>setName(e.target.value)} placeholder="Имя"
    //            className={`rounded-xl border px-3 py-2 ${error && nameRequired && !name ? 'border-red-500' : ''}`} />
    //     <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Телефон*"
    //            className={`rounded-xl border px-3 py-2 ${error && phoneRequired && !/^\+?\d[\d\s\-()]{6,}$/.test(phone) ? 'border-red-500' : ''}`}
    //            inputMode="tel" />
    //     <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Почта"
    //            className="rounded-xl border px-3 py-2" inputMode="email" />
    //   </div>
    //   {error && <div className="text-red-600 text-sm">{error}</div>}
    //   <button
    //     type="submit"
    //     className="rounded-full px-4 py-2 text-sm font-semibold bg-amber-400 text-black shadow hover:scale-[1.02] active:scale-100 transition-transform"
    //   >
    //     {submitLabel}
    //   </button>
    //   {sent && <div className="text-sm text-green-700">Спасибо! Наш специалист свяжется с вами в ближайшее время.</div>}
    // </form>
  )
}
