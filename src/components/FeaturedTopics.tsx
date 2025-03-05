
import { Card } from '@/components/ui/card';
import { Users, Clock, Briefcase } from 'lucide-react';

const topics = [
  {
    title: "Introduction to Virtual Assistance",
    description: "Learn what a virtual assistant does, the growing demand, and essential skills required to succeed in this field.",
    icon: Users,
  },
  {
    title: "Essential Skills for Virtual Assistants",
    description: "Master communication, time management, customer service, and administrative support skills crucial for any VA.",
    icon: Clock,
  },
  {
    title: "Finding Clients & Starting Your Business",
    description: "Discover how to identify your niche, set up your online presence, and attract your first clients.",
    icon: Briefcase,
  }
];

const FeaturedTopics = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-accent mb-4">Featured Topics</h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto">
            Begin your journey with these essential virtual assistant topics designed to launch your remote career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="p-6 h-full bg-gradient-to-br from-white to-neutral-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <topic.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-neutral-700 flex-grow">
                  {topic.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
