
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  treatment: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    treatment: "Panchakarma",
    content: "The Panchakarma treatment at AyurSoothe was life-changing. I feel completely rejuvenated and balanced. The doctors are incredibly knowledgeable and caring.",
    rating: 5
  },
  {
    name: "Michael Chen",
    treatment: "Shirodhara",
    content: "After years of stress and anxiety, the Shirodhara therapy helped me find inner peace. The calming environment and expert care made all the difference.",
    rating: 5
  },
  {
    name: "Priya Patel",
    treatment: "Abhyanga",
    content: "The Abhyanga massage therapy improved my circulation and helped with chronic pain. The natural oils and traditional techniques are amazing.",
    rating: 5
  },
  {
    name: "David Wilson",
    treatment: "Herbal Medicine",
    content: "The personalized herbal medicines prescribed by Dr. Sharma have greatly improved my digestive health. Truly grateful for this natural approach.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-ayur-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
            What Our Clients Say
          </h2>
          <p className="text-ayur-moss max-w-2xl mx-auto">
            Discover how our authentic Ayurvedic treatments have transformed lives and restored wellness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-ayur-stone/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-ayur-gold text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-ayur-forest mb-6 font-serif italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-ayur-forest">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-ayur-moss text-sm">
                  {testimonials[currentIndex].treatment} Treatment
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-ayur-sage' : 'bg-ayur-stone'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
