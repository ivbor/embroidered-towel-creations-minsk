
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
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
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-amber-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ТекстильПлюс</h1>
                <p className="text-sm text-gray-600">Полотенца оптом с вышивкой</p>
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
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-gray-900">+375 29 123-45-67</p>
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
                Полотенца <span className="text-amber-600">оптом</span> с индивидуальной вышивкой
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Более 1000 готовых макетов вышивки. Подарочная упаковка. 
                Скидки от 10% при заказе от 2 штук. Доставка по Беларуси и России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Рассчитать заказ
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                  Посмотреть каталог
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600" />
                  <span>Быстрая доставка</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="bg-amber-50 rounded-lg p-6 mb-4">
                  <Package className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Оптовые продажи</h3>
                  <p className="text-gray-600 text-sm">Основное направление - продажа полотенец оптом</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <Palette className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Индивидуальная вышивка</h3>
                  <p className="text-gray-600 text-sm">Дополнительная услуга по нанесению вышивки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы - оптовые поставщики качественных полотенец с возможностью персонализации
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
                <p className="text-gray-600 text-sm">Доставка от 1 дня по Беларуси</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Для бизнеса</h3>
                <p className="text-gray-600 mb-4">Отели, салоны красоты, фитнес-центры</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Корпоративные логотипы</li>
                  <li>• Большие объемы</li>
                  <li>• Специальные цены</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Подарочные наборы</h3>
                <p className="text-gray-600 mb-4">Персонализированные подарки</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Свадебные наборы</li>
                  <li>• Детские полотенца</li>
                  <li>• Праздничная упаковка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Корпоративные заказы</h3>
                <p className="text-gray-600 mb-4">Для компаний и организаций</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Подарки сотрудникам</li>
                  <li>• Брендированная продукция</li>
                  <li>• Индивидуальные условия</li>
                </ul>
              </CardContent>
            </Card>
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
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Персональная вышивка
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Подарочная упаковка
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Быстрое оформление
                  </li>
                </ul>
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
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Все предыдущие услуги
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Приоритетное производство
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Бесплатная доставка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-green-100 text-green-800">Крупный опт</Badge>
                <CardTitle className="text-2xl">Договорная</CardTitle>
                <CardDescription>Индивидуальные условия</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Максимальные скидки
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Личный менеджер
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Отсрочка платежа
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                    <h4 className="font-semibold text-gray-900">Дизайн вышивки</h4>
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
                    <h4 className="font-semibold text-gray-900">Упаковка и доставка</h4>
                    <p className="text-gray-600">Подарочная упаковка и быстрая доставка</p>
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
                <Gift className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Подарочная упаковка</h4>
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
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Оставьте заявку</h2>
              <p className="text-gray-600 mb-8">
                Расскажите о вашем заказе, и мы рассчитаем стоимость в течение часа
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
                    <p className="text-gray-600">+375 29 123-45-67</p>
                    <p className="text-gray-600">+375 33 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@towels-minsk.by</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес производства</h4>
                    <p className="text-gray-600">г. Минск, ул. Промышленная, 15</p>
                    <p className="text-gray-600">Беларусь, 220020</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Время работы</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                    <p>Вс: выходной</p>
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
                <Package className="h-8 w-8 text-amber-400" />
                <div>
                  <h3 className="text-xl font-bold">ТекстильПлюс</h3>
                  <p className="text-gray-400 text-sm">Полотенца оптом</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Оптовые продажи качественных полотенец с возможностью индивидуальной вышивки. 
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
                <p>+375 29 123-45-67</p>
                <p>info@towels-minsk.by</p>
                <p>г. Минск, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ТекстильПлюс. Все права защищены.
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
