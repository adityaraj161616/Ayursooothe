
const ProductFeatures = () => {
  const features = [
    {
      icon: "🌿",
      title: "100% Natural",
      description: "All products are made from pure, natural ingredients without harmful chemicals or additives.",
      delay: "0s"
    },
    {
      icon: "✅",
      title: "Quality Tested",
      description: "Each product undergoes rigorous quality testing to ensure purity and potency.",
      delay: "0.2s"
    },
    {
      icon: "🏺",
      title: "Traditional Methods",
      description: "Prepared using time-tested traditional methods passed down through generations.",
      delay: "0.4s"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and secure delivery to bring wellness products directly to your doorstep.",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-16 bg-ayur-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
            Why Choose Our Products?
          </h2>
          <p className="text-ayur-moss max-w-2xl mx-auto">
            Every product in our collection meets the highest standards of quality and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: feature.delay }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ayur-forest mb-2">{feature.title}</h3>
              <p className="text-ayur-moss text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
