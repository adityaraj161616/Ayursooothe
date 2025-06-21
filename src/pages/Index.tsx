
import HeroSection from '@/components/HeroSection';
import TreatmentCard from '@/components/TreatmentCard';
import DoctorCard from '@/components/DoctorCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const featuredTreatments = [
    {
      title: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy for deep healing",
      benefits: ["Deep cellular detoxification", "Stress relief & mental clarity", "Improved immunity", "Enhanced vitality"],
      duration: "7-21 days",
      image: "https://images.pexels.com/photos/4498192/pexels-photo-4498192.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$2,500"
    },
    {
      title: "Abhyanga",
      description: "Full-body warm oil massage with traditional herbal preparations",
      benefits: ["Improved circulation", "Deep muscle relaxation", "Skin nourishment", "Nervous system balance"],
      duration: "60-90 minutes",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
      price: "$150"
    },
    {
      title: "Shirodhara",
      description: "Continuous pouring of warm oil on the forehead for mental tranquility",
      benefits: ["Mental clarity & focus", "Stress reduction", "Better sleep quality", "Emotional balance"],
      duration: "45-60 minutes",
      image: "https://images.pexels.com/photos/16123362/pexels-photo-16123362.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$180"
    }
  ];

  const featuredDoctors = [
    {
      name: "Dr. Anjali Sharma",
      designation: "Chief Ayurvedic Physician",
      specialties: ["Panchakarma", "Women's Health", "Digestive Disorders"],
      experience: "15+ years in Ayurvedic medicine",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, MD (Ayurveda)"
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Ayurvedic Consultant",
      specialties: ["Chronic Pain", "Stress Management", "Rejuvenation"],
      experience: "12+ years of clinical practice",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, MD (Panchakarma)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Treatment Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Our Signature Treatments
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Experience time-tested Ayurvedic therapies designed to restore balance, 
              promote natural healing, and awaken your body's innate wisdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredTreatments.map((treatment, index) => (
              <div key={index}>
                <TreatmentCard {...treatment} />
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/treatments">Explore All Treatments</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Meet Our Expert Practitioners
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced Ayurvedic physicians are dedicated to your wellness journey 
              with authentic knowledge, compassionate care, and personalized treatment approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {featuredDoctors.map((doctor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <DoctorCard {...doctor} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/doctors">Meet All Practitioners</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-xl mb-10 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards natural wellness. Our expert practitioners are ready 
              to guide you on your personalized path to optimal health and inner harmony.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-emerald-800 font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link to="/appointment">Book Your Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden">
        <Button className="floating-cta" asChild>
          <Link to="/appointment">Book Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
