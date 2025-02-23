
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-accent mb-6 leading-tight">
            Discover the Rich History of Islam
          </h1>
          <p className="text-lg md:text-xl text-neutral-800 mb-8 leading-relaxed">
            Embark on a journey through time with our comprehensive video lessons in both English and Swahili. Learn about the profound history that shaped the world we know today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 text-lg"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-6 text-lg"
            >
              About Our Mission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
