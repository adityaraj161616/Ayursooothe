
import { useState } from 'react';
import TreatmentCard from '@/components/TreatmentCard';
import { Button } from '@/components/ui/button';

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'detox', label: 'Detoxification' },
    { id: 'massage', label: 'Massage Therapy' },
    { id: 'specialized', label: 'Specialized Care' },
    { id: 'wellness', label: 'Wellness Programs' }
  ];

  const treatments = [
    {
      title: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy",
      benefits: ["Deep detoxification", "Stress relief", "Improved immunity", "Better digestion"],
      duration: "7-21 days",
      image: "https://images.pexels.com/photos/4498192/pexels-photo-4498192.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$2,500",
      category: 'detox'
    },
    {
      title: "Abhyanga",
      description: "Full-body oil massage with warm herbal oils",
      benefits: ["Improved circulation", "Muscle relaxation", "Skin nourishment", "Stress reduction"],
      duration: "60-90 minutes",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
      price: "$150",
      category: 'massage'
    },
    {
      title: "Shirodhara",
      description: "Continuous pouring of oil on the forehead",
      benefits: ["Mental clarity", "Stress reduction", "Better sleep", "Nervous system balance"],
      duration: "45-60 minutes",
      image: "https://images.unsplash.com/photo-1631210697286-2c6cd7c7352c?auto=format&fit=crop&w=800&q=80",
      price: "$180",
      category: 'specialized'
    },
    {
      title: "Kizhi (Herbal Poultice)",
      description: "Therapeutic massage using heated herbal bundles",
      benefits: ["Joint pain relief", "Muscle stiffness", "Improved flexibility", "Reduced inflammation"],
      duration: "60-75 minutes",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      price: "$160",
      category: 'massage'
    },
    {
      title: "Nasya",
      description: "Nasal administration of herbal medicines",
      benefits: ["Sinus relief", "Respiratory health", "Mental clarity", "Hormonal balance"],
      duration: "30-45 minutes",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      price: "$120",
      category: 'specialized'
    },
    {
      title: "Udvartana",
      description: "Herbal powder massage for weight management",
      benefits: ["Weight reduction", "Cellulite reduction", "Skin toning", "Improved metabolism"],
      duration: "45-60 minutes",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      price: "$140",
      category: 'wellness'
    },
    {
      title: "Marma Therapy",
      description: "Vital point therapy for energy balance",
      benefits: ["Energy flow", "Pain relief", "Emotional balance", "Vitality restoration"],
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      price: "$170",
      category: 'specialized'
    },
    {
      title: "Rasayana (Rejuvenation)",
      description: "Anti-aging and longevity enhancement program",
      benefits: ["Anti-aging", "Immunity boost", "Vitality enhancement", "Longevity support"],
      duration: "14-28 days",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      price: "$1,800",
      category: 'wellness'
    },
    {
      title: "Basti (Medicated Enema)",
      description: "Specialized cleansing therapy for digestive health",
      benefits: ["Digestive health", "Toxin elimination", "Nervous system support", "Reproductive health"],
      duration: "5-15 sessions",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      price: "$200 per session",
      category: 'detox'
    }
  ];

  const filteredTreatments = selectedCategory === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-ayur-stone/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ayur-forest mb-6 animate-fade-in">
            Ayurvedic Treatments
          </h1>
          <p className="text-lg text-ayur-moss max-w-3xl mx-auto animate-slide-in-right">
            Discover our comprehensive range of authentic Ayurvedic therapies designed to restore balance, promote healing, and enhance your overall well-being.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-ayur-stone/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-ayur-sage hover:bg-ayur-sage/90 text-white' 
                    : 'border-ayur-sage text-ayur-sage hover:bg-ayur-sage hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <div key={treatment.title} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TreatmentCard {...treatment} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ayur-forest text-ayur-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-lg mb-8 text-ayur-cream/90 max-w-2xl mx-auto">
            Our expert practitioners will assess your unique constitution and health needs to recommend the most suitable treatments for your wellness journey.
          </p>
          <Button size="lg" className="bg-ayur-gold hover:bg-ayur-gold/90 text-ayur-forest font-semibold px-8" asChild>
            <a href="/appointment">Schedule Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
