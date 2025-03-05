
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Virtual Assistant Academy</h3>
            <p className="text-neutral-200 text-sm">
              Launch your virtual assistant career with professional training and ongoing support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-neutral-200 hover:text-primary transition-colors">
                  Start Learning
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-200">
                <Mail className="h-4 w-4" />
                info@vaacademy.com
              </li>
              <li className="flex items-center gap-2 text-neutral-200">
                <Phone className="h-4 w-4" />
                +254745087870
              </li>
              <li className="flex items-center gap-2 text-neutral-200">
                <Globe className="h-4 w-4" />
                Mombasa, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-neutral-200">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-neutral-200">
          <p>&copy; {new Date().getFullYear()} Virtual Assistant Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
