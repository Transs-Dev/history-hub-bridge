
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTopics from '@/components/FeaturedTopics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
      audioRef.current.play().catch(error => console.log("Audio autoplay prevented:", error));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEF9F3] to-white">
      <audio ref={audioRef} src="https://server8.mp3quran.net/ahmad_huth/255.mp3" />
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold text-accent mb-8 leading-tight">
                Bridging Knowledge Through Language
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Dual Language Learning</h3>
                  <p className="text-neutral-700">
                    Our platform uniquely offers Islamic history content in both English and Swahili, making knowledge accessible to a wider audience across East Africa and beyond.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Expert-Led Content</h3>
                  <p className="text-neutral-700">
                    Each lesson is carefully crafted by scholars and historians, ensuring accurate and comprehensive coverage of Islamic history.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Interactive Learning</h3>
                  <p className="text-neutral-700">
                    Engage with our content through video lessons, transcripts, and real-time support for an enhanced learning experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Community Focus</h3>
                  <p className="text-neutral-700">
                    Join a growing community of learners passionate about understanding and preserving Islamic history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedTopics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
