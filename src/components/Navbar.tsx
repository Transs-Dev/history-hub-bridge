
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-semibold text-accent">Islamic History Hub</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral-800 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-neutral-800 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/learn" className="text-neutral-800 hover:text-primary transition-colors">
            Start Learning
          </Link>
          <Link to="/contact" className="text-neutral-800 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <Button className="md:hidden" variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
