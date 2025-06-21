
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-ayur-stone/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ayur-forest mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-lg text-ayur-moss max-w-3xl mx-auto animate-slide-in-right">
            We're here to guide you on your wellness journey. Reach out to us for any questions, concerns, or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="font-serif text-3xl font-bold text-ayur-forest mb-6">
                  Visit Our Wellness Center
                </h2>
                <p className="text-ayur-moss mb-8">
                  Step into our tranquil healing space where ancient wisdom meets modern comfort. Our clinic is designed to promote peace and rejuvenation from the moment you arrive.
                </p>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ayur-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ayur-forest mb-2">Address</h3>
                    <p className="text-ayur-moss">
                      123 Wellness Street<br />
                      Holistic City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ayur-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ayur-forest mb-2">Phone</h3>
                    <p className="text-ayur-moss">
                      Main: (555) 123-4567<br />
                      Emergency: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ayur-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ayur-forest mb-2">Email</h3>
                    <p className="text-ayur-moss">
                      General: info@ayursoothe.com<br />
                      Appointments: appointments@ayursoothe.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ayur-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ayur-forest mb-2">Hours</h3>
                    <p className="text-ayur-moss">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-ayur-forest mb-4">
              Find Us on the Map
            </h2>
            <p className="text-ayur-moss">
              Located in the heart of the wellness district, easily accessible by public transport and car.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.697670063584134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647394687568!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AyurSoothe Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-ayur-forest mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-ayur-moss max-w-2xl mx-auto">
              Here are some common questions we receive. If you don't find your answer here, please feel free to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-ayur-stone/20 rounded-lg p-6 animate-fade-in">
              <h3 className="font-semibold text-ayur-forest mb-3">What should I expect during my first visit?</h3>
              <p className="text-ayur-moss">
                Your first visit includes a comprehensive consultation where we assess your health history, lifestyle, and constitution. This typically takes 60-90 minutes and helps us create a personalized treatment plan.
              </p>
            </div>

            <div className="border border-ayur-stone/20 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-ayur-forest mb-3">Do you accept insurance?</h3>
              <p className="text-ayur-moss">
                We accept most major insurance plans. Please contact your insurance provider to verify coverage for Ayurvedic treatments. We also offer flexible payment plans for self-pay patients.
              </p>
            </div>

            <div className="border border-ayur-stone/20 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-ayur-forest mb-3">How long does a typical treatment take?</h3>
              <p className="text-ayur-moss">
                Treatment duration varies depending on the therapy. Single sessions range from 45 minutes to 2 hours, while comprehensive programs like Panchakarma can span 7-21 days.
              </p>
            </div>

            <div className="border border-ayur-stone/20 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-semibold text-ayur-forest mb-3">Can Ayurvedic treatments be combined with conventional medicine?</h3>
              <p className="text-ayur-moss">
                Yes, Ayurveda can complement conventional treatments. We work closely with your existing healthcare providers to ensure a safe and integrated approach to your wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
