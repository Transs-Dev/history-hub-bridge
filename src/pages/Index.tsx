
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTopics from '@/components/FeaturedTopics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedTopics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
