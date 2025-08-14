
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import InstagramGallery from '@/components/InstagramGallery';
import TowelCarousel from '@/components/TowelCarousel';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Package, 
  Truck, 
  Award, 
  Users,
  Gift,
  Building2,
  Heart,
  Palette,
  Clock,
  Shield,
  ChevronRight,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
        message: ''
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

  const handleTelegramClick = () => {
    window.open('https://t.me/DarRusan', '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+375291870066';
  };

  const handleViberClick = () => {
    window.open('viber://chat?number=+375291870066', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/rusan.by/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Fixed Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={handlePhoneCall}
          className="w-28 h-28 rounded-full bg-red-600 hover:bg-red-700 shadow-lg flex items-center justify-center p-0"
          size="lg"
        >
          <Phone className="!w-16 !h-16 text-white" strokeWidth={1.5} />
        </Button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div>
                <img 
                  src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
                  alt="Rusan Logo" 
                  className="h-12 w-auto"
                />
                <p className="text-sm text-gray-600">Швейное ателье. Вышивка. Ремонт.</p>
              </div>
            </div>
            <nav className="flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-amber-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">Портфолио</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-amber-600 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-2"
                  onClick={handleTelegramClick}
                >
                <a href="#contacts">
                <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="86px" viewBox="0 0 25 25" version="1.1">
                <g id="surface1">
                <path style={{ stroke:'none',fillRule:'nonzero',fill:'rgb(0%,0%,0%)',fillOpacity:'1'}} d="M 21.574219 3.808594 C 21.574219 3.808594 23.597656 3.019531 23.425781 4.933594 C 23.371094 5.722656 22.867188 8.484375 22.472656 11.472656 L 21.121094 20.320312 C 21.121094 20.320312 21.011719 21.617188 20 21.84375 C 18.988281 22.066406 17.46875 21.054688 17.1875 20.828125 C 16.964844 20.660156 12.972656 18.121094 11.566406 16.882812 C 11.171875 16.542969 10.722656 15.867188 11.625 15.078125 L 17.523438 9.441406 C 18.199219 8.765625 18.875 7.1875 16.0625 9.105469 L 8.195312 14.460938 C 8.195312 14.460938 7.296875 15.023438 5.609375 14.515625 L 1.953125 13.386719 C 1.953125 13.386719 0.605469 12.542969 2.910156 11.699219 C 8.53125 9.046875 15.445312 6.34375 21.574219 3.808594 Z M 21.574219 3.808594 "/>
                </g>
                </svg>
                </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-2"
                  onClick={handleViberClick}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="86px" viewBox="0 0 25 25" version="1.1">
                <g id="surface1">
                <path style={{ stroke:'none',fillRule:'nonzero',fill:'rgb(48.235294%,31.764707%,61.56863%)',fillOpacity:'1'}} d="M 3.125 0 L 21.875 0 C 23.601562 0 25 1.398438 25 3.125 L 25 21.875 C 25 23.601562 23.601562 25 21.875 25 L 3.125 25 C 1.398438 25 0 23.601562 0 21.875 L 0 3.125 C 0 1.398438 1.398438 0 3.125 0 Z M 3.125 0 "/>
                <path style={{ stroke:'none',fillRule:'evenodd',fill:'rgb(100%,100%,100%)',fillOpacity:1}} d="M 20.601562 16.867188 C 20.003906 16.386719 19.371094 15.957031 18.742188 15.519531 C 17.492188 14.640625 16.351562 14.574219 15.417969 15.984375 C 14.894531 16.777344 14.160156 16.8125 13.394531 16.464844 C 11.28125 15.507812 9.652344 14.03125 8.695312 11.882812 C 8.273438 10.933594 8.277344 10.082031 9.265625 9.410156 C 9.789062 9.054688 10.316406 8.632812 10.277344 7.855469 C 10.222656 6.84375 7.761719 3.460938 6.792969 3.101562 C 6.390625 2.957031 5.988281 2.964844 5.582031 3.101562 C 3.304688 3.867188 2.363281 5.738281 3.265625 7.957031 C 5.957031 14.570312 10.699219 19.175781 17.226562 21.984375 C 17.597656 22.144531 18.011719 22.207031 18.21875 22.265625 C 19.707031 22.28125 21.445312 20.847656 21.949219 19.429688 C 22.433594 18.0625 21.410156 17.519531 20.601562 16.867188 Z M 13.285156 3.78125 C 18.054688 4.515625 20.253906 6.785156 20.863281 11.589844 C 20.917969 12.03125 20.753906 12.699219 21.386719 12.710938 C 22.050781 12.726562 21.890625 12.066406 21.894531 11.621094 C 21.949219 7.097656 18.003906 2.902344 13.421875 2.746094 C 13.078125 2.796875 12.359375 2.507812 12.316406 3.285156 C 12.285156 3.804688 12.890625 3.71875 13.285156 3.78125 Z M 13.285156 3.78125 "/>
                <path style={{stroke:'none',fillRule:'evenodd',fill:'rgb(100%,100%,100%)',fillOpacity:'1'}} d="M 14.21875 5.097656 C 13.757812 5.042969 13.152344 4.828125 13.046875 5.464844 C 12.933594 6.132812 13.609375 6.0625 14.042969 6.160156 C 16.988281 6.820312 18.015625 7.890625 18.5 10.816406 C 18.570312 11.242188 18.429688 11.90625 19.15625 11.792969 C 19.691406 11.714844 19.496094 11.144531 19.542969 10.8125 C 19.566406 8.007812 17.160156 5.453125 14.21875 5.097656 Z M 14.21875 5.097656 "/>
                <path style={{stroke:'none',fillRule:'evenodd',fill:'rgb(100%,100%,100%)',fillOpacity:'1'}} d="M 14.488281 7.394531 C 14.179688 7.402344 13.882812 7.433594 13.769531 7.761719 C 13.597656 8.25 13.953125 8.367188 14.316406 8.425781 C 15.527344 8.621094 16.160156 9.332031 16.28125 10.539062 C 16.316406 10.863281 16.523438 11.128906 16.839844 11.09375 C 17.277344 11.039062 17.316406 10.652344 17.304688 10.28125 C 17.324219 8.925781 15.792969 7.359375 14.488281 7.394531 Z M 14.488281 7.394531 "/>
                </g>
                </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-2"
                  onClick={handleInstagramClick}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="86px" viewBox="0 0 25 25" version="1.1">
                <g id="surface1">
                <path style={{stroke:'none',fillRule:'nonzero',fill:'rgb(84.313726%,18.431373%,50.196081%)',fillOpacity:'1'}} d="M 12.511719 6.167969 C 9.007812 6.167969 6.183594 8.992188 6.183594 12.496094 C 6.183594 15.996094 9.007812 18.820312 12.511719 18.820312 C 16.011719 18.820312 18.835938 15.996094 18.835938 12.496094 C 18.835938 8.992188 16.011719 6.167969 12.511719 6.167969 Z M 12.511719 16.609375 C 10.246094 16.609375 8.398438 14.761719 8.398438 12.496094 C 8.398438 10.226562 10.242188 8.382812 12.511719 8.382812 C 14.78125 8.382812 16.625 10.226562 16.625 12.496094 C 16.625 14.761719 14.773438 16.609375 12.511719 16.609375 Z M 20.570312 5.910156 C 20.570312 6.730469 19.910156 7.386719 19.097656 7.386719 C 18.277344 7.386719 17.621094 6.722656 17.621094 5.910156 C 17.621094 5.09375 18.28125 4.433594 19.097656 4.433594 C 19.910156 4.433594 20.570312 5.09375 20.570312 5.910156 Z M 24.761719 7.40625 C 24.667969 5.429688 24.21875 3.679688 22.769531 2.238281 C 21.328125 0.792969 19.574219 0.34375 17.597656 0.242188 C 15.5625 0.128906 9.453125 0.128906 7.417969 0.242188 C 5.445312 0.335938 3.695312 0.789062 2.246094 2.230469 C 0.800781 3.671875 0.351562 5.425781 0.253906 7.402344 C 0.136719 9.4375 0.136719 15.542969 0.253906 17.582031 C 0.347656 19.558594 0.800781 21.308594 2.246094 22.753906 C 3.695312 24.195312 5.441406 24.648438 7.417969 24.746094 C 9.453125 24.863281 15.5625 24.863281 17.597656 24.746094 C 19.574219 24.652344 21.328125 24.199219 22.769531 22.753906 C 24.210938 21.308594 24.664062 19.558594 24.761719 17.582031 C 24.878906 15.542969 24.878906 9.445312 24.761719 7.40625 Z M 22.128906 19.769531 C 21.699219 20.847656 20.871094 21.679688 19.785156 22.113281 C 18.160156 22.757812 14.304688 22.609375 12.511719 22.609375 C 10.714844 22.609375 6.855469 22.753906 5.238281 22.113281 C 4.15625 21.683594 3.328125 20.851562 2.890625 19.769531 C 2.246094 18.144531 2.394531 14.289062 2.394531 12.496094 C 2.394531 10.699219 2.253906 6.839844 2.890625 5.222656 C 3.320312 4.140625 4.152344 3.308594 5.238281 2.875 C 6.863281 2.230469 10.714844 2.378906 12.511719 2.378906 C 14.304688 2.378906 18.164062 2.238281 19.785156 2.875 C 20.863281 3.304688 21.695312 4.136719 22.128906 5.222656 C 22.773438 6.84375 22.625 10.699219 22.625 12.496094 C 22.625 14.289062 22.773438 18.148438 22.128906 19.769531 Z M 22.128906 19.769531 "/>
                </g>
                </svg>
                </Button>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">+375 29 187-00-66</p>
                <p className="text-xs text-gray-600">Минск, Беларусь</p>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
              <a href="#contacts">
                Оставить заявку
              </a>
              </Button>
            </div>
          </div>

          {/* Mobile Layout - Only social icons and CTA button */}
          <div className="md:hidden h-[20vh] max-h-40 flex flex-col justify-center">
            {/* Social Icons Row */}
            <div className="flex justify-center items-center space-x-6 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={handleTelegramClick}
              >
                <svg width="86px" height="86px" viewBox="0 0 9.6 9.6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 4.614C9 1.862 8.031 0.6 4.8 0.6S0.6 1.862 0.6 4.614c0 1.958 0.491 3.162 1.939 3.693v0.926c0 0.341 0.428 0.497 0.649 0.237l0.747 -0.877q0.403 0.035 0.865 0.035c3.231 0 4.2 -1.262 4.2 -4.013M4.113 7.96q0.321 0.025 0.687 0.025c2.734 0 3.554 -1.06 3.554 -3.371S7.534 1.242 4.8 1.242 1.246 2.302 1.246 4.614c0 1.633 0.41 2.642 1.615 3.093v1.373c0 0.12 0.15 0.174 0.228 0.083z" fill="#BFC8D0"/>
                  <path d="M4.8 7.756q-0.37 0 -0.695 -0.026l-1.037 1.223a0.131 0.131 0 0 1 -0.231 -0.084v-1.396C1.615 7.015 1.2 5.989 1.2 4.328 1.2 1.978 2.031 0.9 4.8 0.9s3.6 1.078 3.6 3.428 -0.831 3.428 -3.6 3.428" fill="#9179EE"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 4.314C9 1.562 8.031 0.3 4.8 0.3S0.6 1.562 0.6 4.314c0 1.958 0.491 3.162 1.939 3.693v0.926c0 0.341 0.428 0.497 0.649 0.237l0.747 -0.877q0.403 0.035 0.865 0.035c3.231 0 4.2 -1.262 4.2 -4.013M4.113 7.66q0.321 0.025 0.687 0.025c2.734 0 3.554 -1.06 3.554 -3.371S7.534 0.942 4.8 0.942 1.246 2.002 1.246 4.314c0 1.633 0.41 2.642 1.615 3.093v1.373c0 0.12 0.15 0.174 0.228 0.083z" fill="white"/>
                  <path d="m3.463 3.64 -0.012 0.007 -0.011 0.009a0.408 0.408 0 0 0 -0.098 0.49c0.091 0.194 0.293 0.59 0.649 0.889 0.347 0.292 0.719 0.449 0.962 0.5l0.015 0.003h0.014l0.004 0.001c0.006 0.001 0.013 0.002 0.024 0.004l0.026 -0.148 -0.026 0.148 0.006 0.001c0.075 0.013 0.255 0.045 0.406 -0.105 0.097 -0.097 0.185 -0.197 0.223 -0.242a0.234 0.234 0 0 1 0.224 -0.038c0.208 0.07 0.456 0.229 0.576 0.31 0.093 0.062 0.303 0.213 0.397 0.281h0c0.008 0.006 0.026 0.024 0.036 0.05 0.008 0.021 0.012 0.049 -0.007 0.09 -0.035 0.076 -0.144 0.222 -0.29 0.349 -0.149 0.129 -0.305 0.211 -0.429 0.211h-0.002a0.9 0.9 0 0 1 -0.067 -0.013 2.7 2.7 0 0 1 -0.184 -0.049 5.7 5.7 0 0 1 -0.589 -0.218c-0.469 -0.202 -1.061 -0.522 -1.614 -0.993 -0.348 -0.296 -0.677 -0.706 -0.932 -1.09 -0.258 -0.387 -0.43 -0.73 -0.478 -0.888l-0.003 -0.011 -0.005 -0.011a0.36 0.36 0 0 1 -0.028 -0.137 0.24 0.24 0 0 1 0.052 -0.159c0.126 -0.151 0.259 -0.299 0.553 -0.442a0.3 0.3 0 0 1 0.113 -0.026c0.043 -0.001 0.066 0.01 0.075 0.018 0.112 0.099 0.287 0.273 0.404 0.422a7.8 7.8 0 0 1 0.274 0.371 1.2 1.2 0 0 1 0.032 0.05q0.002 0.002 0.005 0.022a0.3 0.3 0 0 1 0.002 0.058 0.15 0.15 0 0 1 -0.044 0.103c-0.088 0.081 -0.207 0.155 -0.254 0.181Zm1.42 -1.686q0 0 0 0a0.021 0.021 0 0 1 0.014 -0.005c1.197 0 2.152 0.911 2.153 2.017l-0.001 0.001a0.021 0.021 0 0 1 -0.013 0.004 0.021 0.021 0 0 1 -0.014 -0.004l-0.001 -0.001c0 -1.117 -0.96 -2.007 -2.124 -2.007a0.021 0.021 0 0 1 -0.014 -0.005Zm0 1.239q0 0 0 0v-0.001a0.021 0.021 0 0 1 0.014 -0.004c0.471 0 0.836 0.357 0.837 0.778l-0.001 0.001a0.021 0.021 0 0 1 -0.014 0.004 0.021 0.021 0 0 1 -0.013 -0.004l-0.001 -0.001c0 -0.433 -0.371 -0.769 -0.808 -0.769a0.021 0.021 0 0 1 -0.014 -0.004Zm0 -0.619q0 0 0 0V2.574a0.021 0.021 0 0 1 0.014 -0.004c0.834 0 1.495 0.634 1.495 1.397l-0.001 0.001a0.021 0.021 0 0 1 -0.013 0.004 0.021 0.021 0 0 1 -0.013 -0.004l-0.001 -0.001c-0.001 -0.775 -0.665 -1.388 -1.466 -1.388a0.021 0.021 0 0 1 -0.014 -0.004Z" fill="white" stroke="white" strokeLinecap="round" strokeWidth="0.3"/>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={handleInstagramClick}
              >
                <svg width="86px" height="86px" viewBox="0 0 14.4 14.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path cx="24" cy="24" r="20" fill="#C13584" d="M13.2 7.2A6 6 0 0 1 7.2 13.2A6 6 0 0 1 1.2 7.2A6 6 0 0 1 13.2 7.2z"/>
                  <path d="M7.2 4.249c0.961 0 1.075 0.004 1.455 0.021 0.351 0.016 0.541 0.075 0.668 0.124 0.168 0.065 0.288 0.143 0.414 0.269s0.204 0.246 0.269 0.414c0.049 0.127 0.108 0.317 0.124 0.668 0.017 0.379 0.021 0.493 0.021 1.455s-0.004 1.075 -0.021 1.455c-0.016 0.351 -0.075 0.541 -0.124 0.668 -0.065 0.168 -0.143 0.288 -0.269 0.414s-0.246 0.204 -0.414 0.269c-0.127 0.049 -0.317 0.108 -0.668 0.124 -0.379 0.017 -0.493 0.021 -1.455 0.021s-1.075 -0.004 -1.455 -0.021c-0.351 -0.016 -0.541 -0.075 -0.668 -0.124a1.11 1.11 0 0 1 -0.414 -0.269c-0.126 -0.126 -0.204 -0.246 -0.269 -0.414 -0.049 -0.127 -0.108 -0.317 -0.124 -0.668 -0.017 -0.379 -0.021 -0.493 -0.021 -1.455 0 -0.961 0.004 -1.075 0.021 -1.454 0.016 -0.351 0.075 -0.541 0.124 -0.668 0.065 -0.168 0.143 -0.288 0.269 -0.414s0.246 -0.204 0.414 -0.269c0.127 -0.049 0.317 -0.108 0.668 -0.124 0.379 -0.017 0.493 -0.021 1.455 -0.021M7.2 3.6c-0.978 0 -1.1 0.004 -1.484 0.022 -0.383 0.018 -0.645 0.078 -0.874 0.167a1.77 1.77 0 0 0 -0.638 0.415 1.77 1.77 0 0 0 -0.415 0.638c-0.089 0.229 -0.15 0.49 -0.167 0.874C3.604 6.1 3.6 6.222 3.6 7.2s0.004 1.1 0.022 1.484c0.018 0.383 0.078 0.645 0.167 0.874 0.092 0.237 0.215 0.438 0.415 0.638a1.77 1.77 0 0 0 0.638 0.415c0.229 0.089 0.49 0.15 0.874 0.167 0.384 0.017 0.507 0.022 1.484 0.022s1.1 -0.004 1.484 -0.022c0.383 -0.018 0.645 -0.078 0.874 -0.167a1.77 1.77 0 0 0 0.638 -0.415 1.77 1.77 0 0 0 0.415 -0.638c0.089 -0.229 0.15 -0.49 0.167 -0.874 0.017 -0.384 0.022 -0.507 0.022 -1.484s-0.004 -1.1 -0.022 -1.484c-0.017 -0.383 -0.078 -0.645 -0.167 -0.874a1.77 1.77 0 0 0 -0.415 -0.638 1.77 1.77 0 0 0 -0.637 -0.415c-0.229 -0.089 -0.491 -0.15 -0.874 -0.167C8.3 3.604 8.178 3.6 7.2 3.6" fill="white"/>
                  <path d="M7.202 5.353a1.849 1.849 0 1 0 0 3.697 1.849 1.849 0 0 0 0 -3.697m0 3.049a1.2 1.2 0 1 1 0 -2.4 1.2 1.2 0 0 1 0 2.4" fill="white"/>
                  <path d="M9.555 5.279a0.432 0.432 0 1 1 -0.864 0 0.432 0.432 0 0 1 0.864 0" fill="white"/>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={handleViberClick}
              >
                <svg width="86px" height="86px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
                  <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
                  <defs>
                    <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#37BBFE"/>
                      <stop offset="1" stopColor="#007DBB"/>
                    </linearGradient>
                  </defs>
                </svg>
              </Button>
            </div>

            {/* CTA Button Row */}
            <div className="flex justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-2">
                <a href="#contacts">
                  Оставить заявку
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

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

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы - оптовые производители качественных полотенец с возможностью персонализации
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Оптовые цены</h3>
                <p className="text-gray-600 text-sm">Выгодные условия для крупных заказов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">1000+ макетов</h3>
                <p className="text-gray-600 text-sm">Готовые дизайны или ваш макет</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Gift className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Подарочная упаковка</h3>
                <p className="text-gray-600 text-sm">Коробки, пакеты, ленты, банты</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Быстро</h3>
                <p className="text-gray-600 text-sm">Изготовление от 1 дня</p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* CTA Button after Benefits */}
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleTelegramClick}
            >
              Выбрать полотенца
            </Button>
          </div>
        </div>
      </section>

      {/* First Carousel - between "Почему выбирают нас" and "Каталог полотенец" */}
      <TowelCarousel images={[
        "/lovable-uploads/ee09870d-04e5-4ed0-ad5a-3c2235e3fd75.png",
        "/lovable-uploads/12ba7a46-7134-4624-b3d4-9fbc0b816f59.png",
        "/lovable-uploads/2a544414-329d-4abc-b345-1191b817b92c.png",
        "/lovable-uploads/596afad8-3979-4d8a-88e8-f5e8d35ad177.png",
        "/lovable-uploads/d8d36018-48d7-4c21-8271-6bc4c648b3e1.png",
        "/lovable-uploads/cb7e78b4-b53a-4a5e-a38a-eac127ec6632.png",
        "/lovable-uploads/69a5a933-331d-4add-882a-132a7bfd847a.png",
        "/lovable-uploads/f5d80a56-50cf-4e1b-b93c-304789d86c3d.png"
      ]} />

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог полотенец</h2>
            <p className="text-gray-600">Широкий ассортимент качественных полотенец для оптовых покупателей</p>
          </div>
          
          {/* Towel Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-amber-600" />
                  Плотность материала
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">430 гр/м²</div>
                    <div className="text-sm text-gray-600">Стандартная плотность</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">500 гр/м²</div>
                    <div className="text-sm text-gray-600">Премиум качество</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Размеры полотенец
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline" className="justify-center p-2">40×70 см</Badge>
                  <Badge variant="outline" className="justify-center p-2">50×90 см</Badge>
                  <Badge variant="outline" className="justify-center p-2">70×140 см</Badge>
                  <Badge variant="outline" className="justify-center p-2">100×150 см</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Telegram Button */}
          <div className="text-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleTelegramClick}
            >
              Узнать цвета в наличии
            </Button>
          </div>

          {/* Product Categories with Background Images */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b7f2f16f.jpg" 
                  alt="Фото: белые полотенца с вышивкой SPA" 
                  className="w-auto"
                />
              </div>
              <CardContent className="p-6 relative z-20 text-white">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Для бизнеса</h3>
                <p className="text-gray-200 mb-4">Любое количество</p>
                { /*
                <div className="text-sm text-gray-200 space-y-1">
                  <p>Персональная вышивка</p>
                  <p>Подарочная упаковка</p>
                </div>
                */ }
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/IMG_0089.jpg" 
                  alt="Фото: свадебные полотенца" 
                  className="w-auto"
                />
              </div>
              <CardContent className="p-6 relative z-20 text-white">
                <Heart className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Подарочные наборы</h3>
                <p className="text-gray-200 mb-4">Праздники, дни рождения</p>
                { /*
                <div className="text-sm text-gray-200 space-y-1">
                  <p>Быстрое оформление</p>
                  <p>Приоритетное производство</p>
                </div>
                */ }
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7b901cf8.jpg" 
                  alt="Фото: полотенца с логотипом банка" 
                  className="w-auto"
                />
              </div>
              <CardContent className="p-6 relative z-20 text-white">
                <Building2 className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Корпоративные заказы</h3>
                <p className="text-gray-200 mb-4">Для компаний и организаций</p>
                { /*
                <div className="text-sm text-gray-200 space-y-1">
                  <p>Личный менеджер</p>
                  <p>Максимальные скидки</p>
                </div>
                */ }
              </CardContent>
            </Card>
          </div>
        </div>
        {/* CTA Button after Catalog */}
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={handleTelegramClick}
            >
              Рассчитать заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Выгодные условия</h2>
            <p className="text-gray-600">Скидки на оптовые заказы и персонализацию</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-amber-200 relative">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-amber-100 text-amber-800">От 2 штук</Badge>
                <CardTitle className="text-2xl">-10%</CardTitle>
                <CardDescription>Скидка на небольшие заказы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Персональная вышивка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Подарочная упаковка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 relative transform scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Популярно</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-blue-100 text-blue-800">От 10 штук</Badge>
                <CardTitle className="text-2xl">-20%</CardTitle>
                <CardDescription>Оптимальный заказ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Быстрое оформление</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Приоритетное производство</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-green-100 text-green-800">Крупный опт</Badge>
                <CardTitle className="text-2xl">Договорная</CardTitle>
                <CardDescription>Индивидуальные условия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Максимальные скидки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Личный менеджер</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* CTA Button after Pricing */}
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleTelegramClick}
            >
              Узнать условия
            </Button>
          </div>
        </div>
      </section>

      {/* Second Carousel - between "Выгодные условия" and "Наши услуги" */}
      <TowelCarousel images={[
        "/lovable-uploads/af3ccc65-18af-4591-b511-5345978cb39a.png",
        "/lovable-uploads/fdcd1846-7c62-4aeb-9a3d-8838fed3a055.png",
        "/lovable-uploads/acd0d9a5-e1e3-443c-8727-2d1fb23f1053.png",
        "/lovable-uploads/f6df139d-aa2a-4952-aa61-d164efa82f24.png",
        "/lovable-uploads/d6e1ae17-16ae-4e5c-98ec-d209b0b25944.png",
        "/lovable-uploads/b7db4e1a-ce9d-4dbe-916f-a424ec2185d1.png",
        "/lovable-uploads/aa44f238-6ef8-4d69-b2c4-97f0543fa51a.png",
        "/lovable-uploads/ad5bf7b1-2a77-4b15-8e1d-7ef5ae1b36f9.png"
      ]} />

      {/* Services Section */}
      <section id="services" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600">Полный цикл от производства до доставки</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс работы</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Выбор полотенец</h4>
                    <p className="text-gray-600">Определяем размеры, плотность и количество</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Дизайн вышивки (по желанию)</h4>
                    <p className="text-gray-600">Выбираете из каталога или предоставляете свой макет</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Производство</h4>
                    <p className="text-gray-600">Изготовление и контроль качества в Минске</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Упаковка на выбор и быстрая доставка</h4>
                    <p className="text-gray-500">Подарочная, обычная или без упаковки, собственная логистика</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Palette className="h-10 w-10 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Индивидуальная вышивка</h4>
              </Card>
              <Card className="p-4 text-center">
                <Clock className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Изготовление от 1 дня</h4>
              </Card>
              <Card className="p-4 text-center">
                <Truck className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Доставка по СНГ</h4>
              </Card>
              <Card className="p-4 text-center">
                <Award className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Гарантия качества</h4>
              </Card>
            </div>
          </div>
        </div>
        {/* CTA Button after Services */}
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center">
            <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={handleTelegramClick}
            >
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      <InstagramGallery />

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Оставьте заявку</h2>
              <p className="text-gray-600 mb-8">
                Расскажите о вашем заказе, и мы рассчитаем стоимость
              </p>
              
              <div className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input 
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Input 
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Textarea 
                  placeholder="Опишите ваш заказ: количество, размеры, тип вышивки"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <Button
                className="w-full bg-amber-600 hover:bg-amber-700"
                size="lg"
                onClick={handleFormSubmit}>
                  Отправить заявку
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+375 29 187-00-66</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">itiel@tut.by</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес производства</h4>
                    <p className="text-gray-600">г. Минск, ул. Гамарника, 22</p>
                    <p className="text-gray-600">Rusan</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Время работы производства</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Пн-Вс: 9:00 - 20:00</p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Доставка</h4>
                  <p className="text-amber-700 text-sm">
                    По Минску - от 1 дня<br />
                    По Беларуси - 2-3 дня<br />
                    В Россию - 5-7 дней
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                { /*
                <img 
                  src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
                  alt="Rusan Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
                */ }
                <div>
                  <img 
                    src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
                    alt="Rusan Logo" 
                    className="h-8 w-auto brightness-0 invert"
                  />
                  { /*
                  <h3 className="text-xl font-bold">Rusan</h3>
                  */ }
                  <p className="text-gray-400 text-sm">Швейное ателье</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Оптовые производители качественных полотенец с возможностью индивидуальной вышивки. 
                Производство в Минске.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Полотенца 430 гр/м²</li>
                <li>Полотенца 500 гр/м²</li>
                <li>Подарочные наборы</li>
                <li>Корпоративные заказы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Индивидуальная вышивка</li>
                <li>Подарочная упаковка</li>
                <li>Экспресс-доставка</li>
                <li>Разработка макетов</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>+375 29 187-00-66</p>
                <p>itiel@tut.by</p>
                <p>г. Минск, ул. Гамарника, 22</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ИП Литвин Иван Григорьевич 220040 г. Минск, ул. Восточная 38-184</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>р/с № BY25AKBB30130000058540000000, Банк: ОАО "АСБ Беларусбанк" ул.Мясникова, 32, 220050, г.Минск БИК AKBBBY2X</p>
                <p>Тел. +375 44 564-14-00</p>
                <p>УНП 193309437</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Rusan. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Условия использования</a>
              <a href="oferta.pdf" className="text-gray-400 hover:text-white text-sm">Договор оферты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
