
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Student",
    rating: 5,
    text: "The bilingual approach makes learning Islamic history so accessible. The video quality is excellent!"
  },
  {
    name: "Fatima Omar",
    role: "Teacher",
    rating: 5,
    text: "An invaluable resource for teaching Islamic history. The structured approach is perfect for both beginners and advanced learners."
  },
  {
    name: "Ibrahim Malik",
    role: "History Enthusiast",
    rating: 4,
    text: "The depth of content and the way it's presented is remarkable. Really enjoying the journey through Islamic history."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-accent mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have embarked on their journey of discovering Islamic history
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating 
                        ? 'fill-primary text-primary' 
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-neutral-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-accent">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
