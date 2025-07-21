import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TowelCarouselProps {
  images: string[];
}

const TowelCarousel = ({ images }: TowelCarouselProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={image}
                        alt={`Towel showcase ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TowelCarousel;