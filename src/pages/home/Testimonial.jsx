

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Gallant Digital transformed my business with their incredible designs and strategies.",
    designation: "CEO, Digital Solutions",
    image: "https://gallantdigital360.com/public/assets/img/review.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "The team is professional, innovative, and always delivers on time. Highly recommend!",
    designation: "Founder, Tech Startup",
    image: "https://gallantdigital360.com/public/assets/img/review.png",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Working with Gallant Digital has been a game-changer for our marketing efforts.",
    designation: "Marketing Head, Retail Co.",
    image: "https://gallantdigital360.com/public/assets/img/review.png",
  },
  {
    id: 4,
    name: "Emma Johnson",
    review: "They exceeded my expectations. The attention to detail was phenomenal.",
    designation: "Product Manager, E-commerce",
    image: "https://gallantdigital360.com/public/storage/uploadimages/4FSVVMpxvFD3ryUCkpI50X23eN0Djgzo9qQEfcMP.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    review: "Amazing service! The team is incredibly skilled and always goes the extra mile.",
    designation: "Owner, Local Business",
    image: "https://gallantdigital360.com/public/assets/img/review.png",
  },
  {
    id: 6,
    name: "Sophia Davis",
    review: "Gallant Digital helped me reach a wider audience with their creative marketing strategies.",
    designation: "Blogger",
    image: "https://gallantdigital360.com/public/storage/uploadimages/4FSVVMpxvFD3ryUCkpI50X23eN0Djgzo9qQEfcMP.jpg",
  },
  {
    id: 7,
    name: "Liam Garcia",
    review: "Highly professional and dedicated. They turned our vision into reality flawlessly.",
    designation: "Director, Nonprofit Organization",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">TESTIMONIAL</h2>
        <p className="text-lg text-gray-600">
          What Say Gallant Digital Clients!
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full" // Responsive width
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4" // Adjust items per row
            >
              <div className="p-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <p className="text-gray-700 text-center italic mb-4">
                      {testimonial.review}
                    </p>
                    <h3 className="text-lg font-semibold text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      {testimonial.designation}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
