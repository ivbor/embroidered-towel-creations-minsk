import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export const Catalog: React.FC = () => {
  return (
      <section className="py-16 bg-stone-100 m-6">
        {/* Catalog Section */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Характеристики</h2>
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
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Варианты цветов</h2>
        </div>
        
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
      </section>
  )
}
