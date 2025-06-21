
import ProductsHero from '@/components/ProductsHero';
import ProductCategory from '@/components/ProductCategory';
import ProductFeatures from '@/components/ProductFeatures';
import ProductsCTA from '@/components/ProductsCTA';
import { productCategories } from '@/data/productData';

const Products = () => {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <ProductCategory 
              key={category.name}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </section>

      <ProductFeatures />
      <ProductsCTA />
    </div>
  );
};

export default Products;
