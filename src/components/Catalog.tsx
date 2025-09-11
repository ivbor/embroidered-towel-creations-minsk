import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export const Catalog: React.FC = () => (
  // <section className="mx-auto max-w-6xl px-4 py-12">
  //   <h2 className="text-2xl font-bold mb-6">Каталог</h2>
  //   <div className="grid md:grid-cols-2 gap-6">
  //     <div className="rounded-2xl border p-6 bg-white">
  //       <h3 className="font-semibold mb-2">Характеристики</h3>
  //       <ul className="text-sm space-y-1">
  //         <li>Плотность: 430–500 г/м²</li>
  //         <li>Размеры: 30×50, 50×90, 70×140</li>
  //         <li>Материал: 100% хлопок</li>
  //       </ul>
  //     </div>
  //     <div className="rounded-2xl border p-6 bg-white">
  //       <h3 className="font-semibold mb-2">Варианты цветов</h3>
  //       <div className="grid grid-cols-3 gap-2">
  //         {['Белый','Черный','Серый','Голубой','Розовый','Желтый'].map(c=>(
  //           <div key={c} className="aspect-video rounded-xl border grid place-items-center text-sm">{c}</div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // </section>
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
)
