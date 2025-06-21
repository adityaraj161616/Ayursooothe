
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  description: string;
  benefits: string[];
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  animationDelay: number;
}

const ProductCard = ({ product, animationDelay }: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden border-ayur-stone/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" 
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-ayur-gold text-ayur-forest">
            {product.price}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="font-serif text-xl text-ayur-forest">{product.name}</CardTitle>
        <CardDescription className="text-ayur-moss">{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-ayur-forest mb-2">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {product.benefits.map((benefit, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-ayur-sage/10 text-ayur-forest hover:bg-ayur-sage/20 text-xs"
              >
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-ayur-sage hover:bg-ayur-sage/90 text-white"
          onClick={() => window.open(`https://wa.me/15551234567?text=Hi, I'm interested in ${product.name}`, '_blank')}
        >
          Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
