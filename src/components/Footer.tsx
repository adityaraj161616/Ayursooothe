
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ayur-forest text-ayur-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-ayur-cream rounded-full flex items-center justify-center">
                <span className="text-ayur-forest font-bold text-sm">A</span>
              </div>
              <span className="font-serif text-xl font-bold">AyurSoothe</span>
            </div>
            <p className="text-sm text-ayur-cream/80">
              Discover the power of natural healing with authentic Ayurvedic treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-ayur-cream/80 hover:text-ayur-cream transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-ayur-cream/80 hover:text-ayur-cream transition-colors">
                About Us
              </Link>
              <Link to="/treatments" className="text-sm text-ayur-cream/80 hover:text-ayur-cream transition-colors">
                Treatments
              </Link>
              <Link to="/doctors" className="text-sm text-ayur-cream/80 hover:text-ayur-cream transition-colors">
                Our Doctors
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm text-ayur-cream/80">Panchakarma</span>
              <span className="text-sm text-ayur-cream/80">Abhyanga</span>
              <span className="text-sm text-ayur-cream/80">Shirodhara</span>
              <span className="text-sm text-ayur-cream/80">Herbal Medicine</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-ayur-cream/80">
              <p>123 Wellness Street</p>
              <p>Holistic City, HC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ayursoothe.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-ayur-cream/20 mt-8 pt-8 text-center">
          <p className="text-sm text-ayur-cream/60">
            © 2024 AyurSoothe. All rights reserved. Healing through nature.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
