
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";


export function Banner() {
  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="relative lg:max-w-6xl w-full  "
      >
        <CarouselContent className=" w-full h-full ">
          
          <CarouselItem><img src="https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="processor" /></CarouselItem>
          <CarouselItem><img src="https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="keyboard" /></CarouselItem>
          <CarouselItem><img src="https://images.pexels.com/photos/7564242/pexels-photo-7564242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="keyboard" /></CarouselItem>
          <CarouselItem><img src="https://images.pexels.com/photos/8067821/pexels-photo-8067821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Motherboard" /></CarouselItem>
          <CarouselItem><img src="https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Motherboard" /></CarouselItem>
          

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
