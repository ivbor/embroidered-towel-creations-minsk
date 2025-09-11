import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const LeadForm: React.FC = ({text1, text2, message=""}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: message
  });

  const handleFormSubmit = async () => {
    try {
      const message = `Новая заявка:
        Имя: ${formData.name}
        Телефон: ${formData.phone}
        Email: ${formData.email}
        Сообщение: ${formData.message}`;

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
        email: '',
        message: message
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

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text1}</h2>
      
      <div className="space-y-4">
        <Input 
          placeholder="Имя"
          className="text-center placeholder:text-center"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Input 
          placeholder="Телефон*"
          className="text-center placeholder:text-center"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <Input 
          placeholder="Почта"
          className="text-center placeholder:text-center"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Button
          className="w-full bg-orange-300 hover:bg-orange-400 !text-black hover:!text-black"
          size="lg"
          onClick={handleFormSubmit}>
            {text2}
        </Button>
      </div>
    </div>
  )
}
