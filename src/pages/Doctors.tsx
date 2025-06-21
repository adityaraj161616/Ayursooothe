
import DoctorCard from '@/components/DoctorCard';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Anjali Sharma",
      designation: "Chief Ayurvedic Physician",
      specialties: ["Panchakarma", "Women's Health", "Digestive Disorders", "Stress Management"],
      experience: "15+ years in Ayurvedic medicine with expertise in traditional Panchakarma therapies",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, MD (Ayurveda), Certified Panchakarma Specialist"
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Ayurvedic Consultant",
      specialties: ["Chronic Pain", "Arthritis", "Rejuvenation Therapy", "Marma Therapy"],
      experience: "12+ years of clinical practice specializing in musculoskeletal disorders",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, MD (Panchakarma), Diploma in Yoga & Naturopathy"
    },
    {
      name: "Dr. Priya Menon",
      designation: "Ayurvedic Physician & Wellness Coach",
      specialties: ["Skin Disorders", "Beauty Treatments", "Anti-aging", "Nutrition Counseling"],
      experience: "10+ years focusing on dermatological conditions and aesthetic wellness",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, PG Diploma in Ayurvedic Dermatology"
    },
    {
      name: "Dr. Suresh Nair",
      designation: "Ayurvedic Specialist",
      specialties: ["Respiratory Disorders", "Allergies", "Immunity Building", "Nasya Therapy"],
      experience: "8+ years treating respiratory and immune system disorders",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, Specialized training in Respiratory Ayurveda"
    },
    {
      name: "Dr. Kavita Joshi",
      designation: "Ayurvedic Gynecologist",
      specialties: ["Women's Health", "Fertility", "Prenatal Care", "Hormonal Balance"],
      experience: "11+ years dedicated to women's health and reproductive wellness",
      image: "https://images.unsplash.com/photo-1594824694996-f882a6d6e7ad?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, MD (Stree Rog & Prasuti Tantra)"
    },
    {
      name: "Dr. Arun Pillai",
      designation: "Ayurvedic Psychiatrist",
      specialties: ["Mental Health", "Stress & Anxiety", "Depression", "Meditation Therapy"],
      experience: "9+ years combining Ayurveda with modern mental health approaches",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
      education: "BAMS, PG Diploma in Ayurvedic Psychology"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-ayur-stone/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ayur-forest mb-6 animate-fade-in">
            Meet Our Expert Practitioners
          </h1>
          <p className="text-lg text-ayur-moss max-w-3xl mx-auto animate-slide-in-right">
            Our team of qualified Ayurvedic physicians combines traditional knowledge with modern clinical expertise to provide you with the highest quality of care.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={doctor.name} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DoctorCard {...doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-16 bg-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
              Why Choose Our Practitioners?
            </h2>
            <p className="text-ayur-moss max-w-2xl mx-auto">
              Our doctors bring together authentic Ayurvedic training, extensive clinical experience, and a compassionate approach to healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🎓</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ayur-forest mb-2">Certified Experts</h3>
              <p className="text-ayur-moss text-sm">All our doctors hold advanced degrees in Ayurvedic medicine and specialized certifications.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">💚</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ayur-forest mb-2">Compassionate Care</h3>
              <p className="text-ayur-moss text-sm">We believe in treating not just the condition, but the whole person with empathy and understanding.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🔬</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ayur-forest mb-2">Modern Integration</h3>
              <p className="text-ayur-moss text-sm">Our practitioners skillfully blend traditional wisdom with contemporary health insights.</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🌿</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ayur-forest mb-2">Holistic Approach</h3>
              <p className="text-ayur-moss text-sm">We address physical, mental, and spiritual aspects of health for comprehensive wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ayur-forest text-ayur-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Meet Your Healing Partner?
          </h2>
          <p className="text-lg mb-8 text-ayur-cream/90 max-w-2xl mx-auto">
            Book a consultation with one of our expert practitioners and begin your personalized journey to optimal health and wellness.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-ayur-gold hover:bg-ayur-gold/90 text-ayur-forest font-semibold px-8 py-3 rounded-lg text-lg transition-colors">
              <a href="/appointment">Book Consultation</a>
            </button>
            <button className="border-2 border-ayur-cream text-ayur-cream hover:bg-ayur-cream hover:text-ayur-forest px-8 py-3 rounded-lg text-lg transition-colors">
              <a href="/contact">Ask a Question</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
