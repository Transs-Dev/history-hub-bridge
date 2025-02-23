
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-700">
              Have questions? We'd love to hear from you. Send us a message and we'll get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-2">Email</h3>
              <p className="text-neutral-700">omarwashe414@gmail.com</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-2">Phone</h3>
              <p className="text-neutral-700">+254745087870</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-accent mb-2">Location</h3>
              <p className="text-neutral-700">Mombasa, Kenya</p>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto mt-12 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Message</label>
                <Textarea placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
