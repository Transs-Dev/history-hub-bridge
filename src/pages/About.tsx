
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Globe, Award, Briefcase, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6">
              About Our VA Training Platform
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              We are dedicated to empowering aspiring virtual assistants with the skills, knowledge, and resources needed to build successful remote careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Mission</h3>
              <p className="text-neutral-700">
                To provide comprehensive, practical VA training that prepares professionals for the demands of the modern digital workplace.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Community</h3>
              <p className="text-neutral-700">
                Building a supportive network of virtual assistants who share knowledge, opportunities, and best practices.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-3">Our Approach</h3>
              <p className="text-neutral-700">
                Practical, hands-on training focused on real-world skills that clients are actively seeking in virtual assistants.
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-semibold text-accent mb-8 text-center">Why Choose Our VA Training</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Industry-Relevant Curriculum</h3>
                    <p className="text-neutral-700 text-sm">Our curriculum is regularly updated to reflect current industry demands and tools.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <Briefcase className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Business Development Focus</h3>
                    <p className="text-neutral-700 text-sm">Learn not just skills, but how to build and market your VA business successfully.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Global Opportunities</h3>
                    <p className="text-neutral-700 text-sm">Prepare for working with clients from around the world in various industries.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Community Support</h3>
                    <p className="text-neutral-700 text-sm">Join a network of VA professionals who share resources and job opportunities.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-accent mb-6 text-center">Meet Our Team</h2>
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-3xl text-primary">VA</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-accent mb-2">Our Expert Trainers</h3>
                  <p className="text-neutral-700 mb-4">
                    Our team consists of experienced virtual assistants who have worked with clients across various industries and understand what it takes to succeed.
                  </p>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>📧 Email: support@vatraining.com</p>
                    <p>📱 Contact: +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
