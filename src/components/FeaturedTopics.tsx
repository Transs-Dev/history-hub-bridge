
import { Card } from '@/components/ui/card';
import { BookOpen, Video, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: "Birth of Prophet Muhammad",
    description: "Learn about the historical context and events surrounding the birth of Prophet Muhammad (peace be upon him).",
    icon: BookOpen,
    link: "/learn/birth-of-muhammad"
  },
  {
    title: "The First Revelation",
    description: "Explore the profound moment of the first divine revelation and its significance in Islamic history.",
    icon: Video,
    link: "/learn/first-revelation"
  },
  {
    title: "Spread of Islam",
    description: "Discover how Islam spread from Mecca to different parts of the world through peaceful means.",
    icon: Globe,
    link: "/learn/spread-of-islam"
  }
];

const FeaturedTopics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-accent mb-4">Featured Topics</h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto">
            Begin your journey with these carefully curated topics, available in both English and Swahili
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link to={topic.link} key={index}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-accent mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-neutral-700 flex-grow">
                    {topic.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
