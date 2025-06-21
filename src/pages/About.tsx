
const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-ayur-stone/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ayur-forest mb-6 animate-fade-in">
            About AyurSoothe
          </h1>
          <p className="text-lg text-ayur-moss max-w-3xl mx-auto animate-slide-in-right">
            Rooted in ancient wisdom, committed to modern wellness. Discover our journey of bringing authentic Ayurvedic healing to the modern world.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-6">
                Our Philosophy
              </h2>
              <p className="text-ayur-moss mb-6 leading-relaxed">
                At AyurSoothe, we believe that true healing comes from understanding the unique constitution of each individual. Our approach combines the time-tested principles of Ayurveda with modern clinical expertise to provide personalized care that addresses the root cause of imbalance.
              </p>
              <p className="text-ayur-moss mb-6 leading-relaxed">
                We honor the 5,000-year-old tradition of Ayurveda while adapting our treatments to meet the needs of contemporary life. Our goal is to help you achieve optimal health through natural methods that work in harmony with your body's innate wisdom.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayur-sage rounded-full"></div>
                  <span className="text-ayur-forest font-medium">Personalized Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayur-sage rounded-full"></div>
                  <span className="text-ayur-forest font-medium">Natural Healing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayur-sage rounded-full"></div>
                  <span className="text-ayur-forest font-medium">Holistic Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayur-sage rounded-full"></div>
                  <span className="text-ayur-forest font-medium">Ancient Wisdom</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.pexels.com/photos/4050231/pexels-photo-4050231.jpeg"
                alt="Ayurvedic herbs and oils"
                className="rounded-xl shadow-md w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Timeline */}
      <section className="py-16 bg-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
              The Ayurvedic Principles We Follow
            </h2>
            <p className="text-ayur-moss max-w-2xl mx-auto">
              Our treatments are based on the fundamental principles that have guided Ayurvedic medicine for millennia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Dosha Balance</h3>
              <p className="text-ayur-moss">
                Understanding your unique constitution (Vata, Pitta, Kapha) to create personalized treatment plans that restore natural balance.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Prevention First</h3>
              <p className="text-ayur-moss">
                Emphasizing preventive care through lifestyle modifications, seasonal routines, and dietary guidance to maintain optimal health.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Natural Remedies</h3>
              <p className="text-ayur-moss">
                Using pure herbs, oils, and traditional therapies that work with your body's natural healing mechanisms without side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
              Our Healing Environment
            </h2>
            <p className="text-ayur-moss max-w-2xl mx-auto">
              Step into our tranquil clinic where every space is designed to promote peace, healing, and rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"
                alt="Treatment room"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                alt="Herbal preparation area"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80"
                alt="Consultation room"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"
                alt="Meditation space"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80"
                alt="Reception area"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '1s' }}>
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                alt="Garden area"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
