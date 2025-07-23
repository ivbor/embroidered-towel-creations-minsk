
import { useState } from 'react';
import { Button } from "@/components/ui/button";
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
  MessageCircle,
  Send
} from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

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
          className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg"
          size="icon"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              { /*
              <img 
                src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
                alt="Rusan Logo" 
                className="h-12 w-auto"
              />
              */ }
              <div>
                <img 
                  src="/lovable-uploads/d6fed386-6fc9-4b86-90f8-b64eee47a1a4.png" 
                  alt="Rusan Logo" 
                  className="h-12 w-auto"
                />
                { /*
                <h1 className="text-2xl font-bold text-gray-900">Rusan</h1>
                */ }
                <p className="text-sm text-gray-600">Швейное ателье. Вышивка. Ремонт.</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-amber-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">Портфолио</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-amber-600 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="p-2"
                  onClick={handleTelegramClick}
                >
                  <Send className="h-4 w-4 text-blue-500" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="p-2"
                  onClick={handleViberClick}
                >
                  <svg className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.398.002C5.473.002.565 4.91.565 10.835c0 2.24.723 4.31 1.95 5.996L.895 23.467l7.275-1.835c1.639.95 3.572 1.496 5.625 1.496 5.926 0 10.834-4.908 10.834-10.834C24.629 5.368 19.721.435 13.796.435L11.398.002zm5.642 6.616v.001c0 .484-.484.726-.726.726h-1.694c-.242 0-.726-.484-.726-.726v-2.42c0-.242.484-.726.726-.726h1.694c.484 0 .726.484.726.726v2.419zm-8.065 0v.001c0 .484-.484.726-.726.726H6.555c-.242 0-.726-.484-.726-.726v-2.42c0-.242.484-.726.726-.726h1.694c.484 0 .726.484.726.726v2.419z"/>
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="p-2"
                  onClick={handleInstagramClick}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#833ab4"/>
                        <stop offset="25%" stopColor="#c13584"/>
                        <stop offset="50%" stopColor="#e1306c"/>
                        <stop offset="75%" stopColor="#fd1d1d"/>
                        <stop offset="100%" stopColor="#f77737"/>
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#instagram-gradient)"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Button>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-gray-900">+375 29 187-00-66</p>
                <p className="text-xs text-gray-600">Минск, Беларусь</p>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Оставить заявку
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
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
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
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Выбрать полотенца
            </Button>
          </div>
        </div>
      </section>

      {/* First Carousel - between "Почему выбирают нас" and "Каталог полотенец" */}
      <TowelCarousel images={[
        "/lovable-uploads/ee09870d-04e5-4ed0-ad5a-3c2235e3fd75.png",
        "/lovable-uploads/fdcd1846-7c62-4aeb-9a3d-8838fed3a055.png",
        "/lovable-uploads/2a544414-329d-4abc-b345-1191b817b92c.png",
        "/lovable-uploads/f6df139d-aa2a-4952-aa61-d164efa82f24.png",
        "/lovable-uploads/d8d36018-48d7-4c21-8271-6bc4c648b3e1.png",
        "/lovable-uploads/b7db4e1a-ce9d-4dbe-916f-a424ec2185d1.png",
        "/lovable-uploads/69a5a933-331d-4add-882a-132a7bfd847a.png",
        "/lovable-uploads/ad5bf7b1-2a77-4b15-8e1d-7ef5ae1b36f9.png"
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
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Узнать условия
            </Button>
          </div>
        </div>
      </section>

      {/* Second Carousel - between "Выгодные условия" and "Наши услуги" */}
      <TowelCarousel images={[
        "/lovable-uploads/af3ccc65-18af-4591-b511-5345978cb39a.png",
        "/lovable-uploads/12ba7a46-7134-4624-b3d4-9fbc0b816f59.png",
        "/lovable-uploads/acd0d9a5-e1e3-443c-8727-2d1fb23f1053.png",
        "/lovable-uploads/596afad8-3979-4d8a-88e8-f5e8d35ad177.png",
        "/lovable-uploads/d6e1ae17-16ae-4e5c-98ec-d209b0b25944.png",
        "/lovable-uploads/cb7e78b4-b53a-4a5e-a38a-eac127ec6632.png",
        "/lovable-uploads/aa44f238-6ef8-4d69-b2c4-97f0543fa51a.png",
        "/lovable-uploads/f5d80a56-50cf-4e1b-b93c-304789d86c3d.png"
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
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
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
                <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
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
          <div className="grid md:grid-cols-4 gap-8">
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
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Rusan. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
