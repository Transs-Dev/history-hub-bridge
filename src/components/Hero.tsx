
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Comprehensive Virtual Assistant Training
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-6 leading-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Launch Your Virtual Assistant Career Today
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-8 leading-relaxed max-w-3xl mx-auto">
            Master the essential skills, tools, and strategies to become a successful virtual assistant. Our comprehensive courses will help you build your business from the ground up.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/learn">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                About Our Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
