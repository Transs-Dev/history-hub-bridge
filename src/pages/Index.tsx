
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTopics from '@/components/FeaturedTopics';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedTopics />
      </main>
    </div>
  );
};

export default Index;
