
import { Button } from '@/components/ui/button';

const ProductsCTA = () => {
  return (
    <section className="py-16 bg-ayur-forest text-ayur-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Need Personalized Product Recommendations?
        </h2>
        <p className="text-lg mb-8 text-ayur-cream/90 max-w-2xl mx-auto">
          Our practitioners can recommend the perfect products based on your unique constitution and health goals.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button size="lg" className="bg-ayur-gold hover:bg-ayur-gold/90 text-ayur-forest font-semibold px-8" asChild>
            <a href="/appointment">Book Consultation</a>
          </Button>
          <Button size="lg" variant="outline" className="border-ayur-cream text-ayur-cream hover:bg-ayur-cream hover:text-ayur-forest px-8" asChild>
            <a href="/contact">Ask About Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
