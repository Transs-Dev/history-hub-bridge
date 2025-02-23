
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6">
              About Islamic History Hub
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Founded by Omar Washe Konde, Islamic History Hub is dedicated to making Islamic history accessible to everyone through engaging bilingual content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Mission</h3>
              <p className="text-neutral-700">
                To provide accessible, accurate, and engaging Islamic historical education in both English and Swahili.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Community</h3>
              <p className="text-neutral-700">
                Building a global community of learners passionate about Islamic history and heritage.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Vision</h3>
              <p className="text-neutral-700">
                To become the leading bilingual resource for Islamic historical education worldwide.
              </p>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-accent mb-6 text-center">Meet the Founder</h2>
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-3xl text-primary">OK</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-accent mb-2">Omar Washe Konde</h3>
                  <p className="text-neutral-700 mb-4">
                    Dedicated to making Islamic history accessible to all through innovative educational content.
                  </p>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>📧 Email: omarwashe414@gmail.com</p>
                    <p>📱 Phone: +254745087870</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
