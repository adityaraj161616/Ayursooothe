
import AppointmentForm from '@/components/AppointmentForm';

const Appointment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-ayur-stone/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ayur-forest mb-6 animate-fade-in">
            Schedule Your Healing Session
          </h1>
          <p className="text-lg text-ayur-moss max-w-3xl mx-auto animate-slide-in-right">
            Take the first step towards natural wellness. Our expert practitioners will create a personalized treatment plan just for you.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AppointmentForm />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayur-forest mb-4">
              What to Expect
            </h2>
            <p className="text-ayur-moss max-w-2xl mx-auto">
              Your journey to wellness begins with a comprehensive consultation and personalized treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Initial Consultation</h3>
              <p className="text-ayur-moss">
                Detailed assessment of your health history, lifestyle, and current concerns to understand your unique constitution.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Personalized Plan</h3>
              <p className="text-ayur-moss">
                Custom treatment plan created based on your dosha type, health goals, and specific requirements.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-ayur-forest mb-4">Treatment & Follow-up</h3>
              <p className="text-ayur-moss">
                Begin your healing journey with regular treatments and ongoing support for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-ayur-forest text-ayur-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-8 text-ayur-cream/90 max-w-2xl mx-auto">
            For urgent inquiries or to speak with our wellness coordinators directly, please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-ayur-cream/80">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p className="text-ayur-cream/80">appointments@ayursoothe.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🕒 Hours</h3>
              <p className="text-ayur-cream/80">Mon-Sat: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
