
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTopics from '@/components/FeaturedTopics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold text-accent mb-8 leading-tight">
                Why Choose Our Virtual Assistant Program?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Industry-Relevant Skills</h3>
                  <p className="text-neutral-700">
                    Our curriculum is designed with input from actual business owners and experienced VAs to ensure you learn exactly what the market demands.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Practical Learning</h3>
                  <p className="text-neutral-700">
                    Every lesson includes hands-on exercises and real-world examples to help you apply your new skills immediately.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Business Launch Support</h3>
                  <p className="text-neutral-700">
                    Beyond just skills, we provide templates, guidance, and resources to help you set up and market your VA business.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">Community Access</h3>
                  <p className="text-neutral-700">
                    Join our community of aspiring and established VAs for networking, support, and potential collaboration opportunities.
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
