
import ProductCard from './ProductCard';

interface Product {
  name: string;
  description: string;
  benefits: string[];
  price: string;
  image: string;
}

interface ProductCategoryProps {
  category: {
    name: string;
    description: string;
    products: Product[];
  };
  categoryIndex: number;
}

const ProductCategory = ({ category, categoryIndex }: ProductCategoryProps) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
          {category.name}
        </h2>
        <p className="text-ayur-moss max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product, productIndex) => (
          <ProductCard 
            key={product.name}
            product={product}
            animationDelay={(categoryIndex * 3 + productIndex) * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
