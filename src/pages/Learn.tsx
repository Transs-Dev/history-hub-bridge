import { useState, useEffect } from 'react'
import { MessageCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar, { Topic, Subtopic } from '@/components/learning/Sidebar'
import VideoSection from '@/components/learning/VideoSection'
import TranscriptPreview from '@/components/learning/TranscriptPreview'

// Updated topics with subtopics and notes
const initialTopics: Topic[] = [
  {
    id: 1,
    title: "Introduction to Virtual Assistance",
    description: "Learn the fundamentals of virtual assistance and why it's a growing career choice.",
    videoId: "5H440XeZG_E",
    transcript: `Virtual assistance is a rapidly growing field in today's digital economy. A Virtual Assistant (VA) is a professional who provides administrative, technical, or creative assistance to clients remotely. This module introduces you to the VA industry, explores the growing demand for virtual services, and outlines the different types of virtual assistants in the market today. We'll also cover the fundamental skills required to become a successful VA.`,
    subtopics: [
      { 
        id: "1-1", 
        title: "What is a Virtual Assistant (VA)?", 
        completed: false,
        notes: "A Virtual Assistant (VA) is a professional who provides administrative, technical, or creative assistance to clients remotely from a home office. VAs operate as independent contractors rather than employees, supporting businesses without requiring physical office space or full-time salaries and benefits."
      },
      { 
        id: "1-2", 
        title: "The growing demand for VAs", 
        completed: false,
        notes: "The demand for virtual assistants has exploded with the rise of digital entrepreneurship, remote work trends, and businesses looking to scale efficiently. Small businesses and solopreneurs especially find VAs to be cost-effective alternatives to hiring full-time staff, as they can pay for only the hours or services they need."
      },
      { 
        id: "1-3", 
        title: "Different types of virtual assistants", 
        completed: false,
        notes: "Virtual assistants specialize in various areas: General VAs handle administrative tasks like email and calendar management. Specialized VAs focus on technical areas like social media management, content creation, bookkeeping, or customer service. Executive VAs provide high-level support to executives and business owners, often handling sensitive information and complex projects."
      },
      { 
        id: "1-4", 
        title: "Skills required to become a VA", 
        completed: false,
        notes: "Essential skills for virtual assistants include strong communication (written and verbal), time management, computer literacy, problem-solving ability, attention to detail, and self-motivation. Technical skills with common business software and tools are also crucial. Successful VAs must be adaptable, reliable, and able to work independently with minimal supervision."
      }
    ],
    completed: false
  },
  {
    id: 2,
    title: "Essential Skills for Virtual Assistants",
    description: "Master the core competencies needed for any successful VA career.",
    videoId: "kn4n4auk6T4",
    transcript: `What skills do you need to succeed as a virtual assistant? This comprehensive module covers the essential competencies required in the VA profession, including communication, time management, customer service, and technical skills. You'll learn how to assess your current abilities and create a plan to develop areas where you need improvement.`,
    subtopics: [
      { id: "2-1", title: "Communication & email management", completed: false },
      { id: "2-2", title: "Time management & productivity tools", completed: false },
      { id: "2-3", title: "Customer service & client handling", completed: false },
      { id: "2-4", title: "Data entry & administrative support", completed: false },
      { id: "2-5", title: "Social media management basics", completed: false }
    ],
    completed: false
  },
  {
    id: 3,
    title: "Tools & Software for Virtual Assistants",
    description: "Master the essential technology and software used in the VA industry.",
    videoId: "qYY-Z8Bsvj8",
    transcript: `The right tools can dramatically increase your efficiency and value as a VA. This module introduces you to the essential software and technologies used in the virtual assistance industry. From communication platforms to project management systems, you'll learn which tools to master and how they can streamline your workflow.`,
    subtopics: [
      { id: "3-1", title: "Communication tools (Zoom, Slack, Microsoft Teams)", completed: false },
      { id: "3-2", title: "Project management tools (Trello, Asana, ClickUp)", completed: false },
      { id: "3-3", title: "CRM & email marketing tools (HubSpot, Mailchimp)", completed: false },
      { id: "3-4", title: "Accounting & invoicing software (QuickBooks, Wave)", completed: false }
    ],
    completed: false
  },
  {
    id: 4,
    title: "Finding Clients & Starting Your VA Business",
    description: "Learn how to launch your VA business and attract your first clients.",
    videoId: "5H440XeZG_E",
    transcript: `Ready to start your VA business? This comprehensive module will guide you through identifying your niche, setting up your professional presence, finding your first clients, and establishing your business operations. You'll learn practical strategies for marketing yourself, setting your rates, and creating client contracts.`,
    subtopics: [
      { id: "4-1", title: "Identifying your niche and services", completed: false },
      { id: "4-2", title: "Setting up a professional online presence", completed: false },
      { id: "4-3", title: "How to market yourself and find clients", completed: false },
      { id: "4-4", title: "Pricing your services and creating contracts", completed: false }
    ],
    completed: false
  },
  {
    id: 5,
    title: "Advanced Virtual Assistant Services",
    description: "Expand your service offerings with specialized VA skills.",
    videoId: "qYY-Z8Bsvj8",
    transcript: `As you grow your VA business, you may want to offer more specialized services that can command higher rates. This module explores advanced VA services such as social media management, content creation, SEO, blog management, e-commerce support, and bookkeeping. You'll learn how to upskill in these areas and market these premium services to clients.`,
    subtopics: [
      { id: "5-1", title: "Social media management & content creation", completed: false },
      { id: "5-2", title: "SEO & blog management", completed: false },
      { id: "5-3", title: "E-commerce support (Amazon, Shopify, Etsy)", completed: false },
      { id: "5-4", title: "Bookkeeping & financial tasks", completed: false }
    ],
    completed: false
  }
];

// Sample quiz questions for each topic
const quizQuestions = {
  1: [
    {
      id: "q1-1",
      text: "What is a Virtual Assistant?",
      options: [
        { id: "a", text: "A digital robot assistant like Siri or Alexa" },
        { id: "b", text: "A software program that automates tasks" },
        { id: "c", text: "A professional who provides services to clients remotely" },
        { id: "d", text: "An in-person administrative assistant" }
      ],
      correctAnswer: "c"
    },
    {
      id: "q1-2",
      text: "Which of the following is driving the growth in demand for virtual assistants?",
      options: [
        { id: "a", text: "Decreasing internet speeds globally" },
        { id: "b", text: "The rise of remote work and digital businesses" },
        { id: "c", text: "Reduced use of technology in businesses" },
        { id: "d", text: "Increasing office space availability" }
      ],
      correctAnswer: "b"
    }
  ],
  2: [
    {
      id: "q2-1",
      text: "Which skill is NOT typically considered essential for virtual assistants?",
      options: [
        { id: "a", text: "Communication skills" },
        { id: "b", text: "Time management" },
        { id: "c", text: "Physical strength" },
        { id: "d", text: "Customer service" }
      ],
      correctAnswer: "c"
    },
    {
      id: "q2-2",
      text: "Why is email management an important skill for VAs?",
      options: [
        { id: "a", text: "It's the only way VAs communicate with clients" },
        { id: "b", text: "Clients often need help organizing their inbox and responding to messages" },
        { id: "c", text: "Email is becoming obsolete in business" },
        { id: "d", text: "VAs typically don't handle email" }
      ],
      correctAnswer: "b"
    }
  ],
  3: [
    {
      id: "q3-1",
      text: "Which of these is NOT typically considered a communication tool for VAs?",
      options: [
        { id: "a", text: "Zoom" },
        { id: "b", text: "Slack" },
        { id: "c", text: "QuickBooks" },
        { id: "d", text: "Microsoft Teams" }
      ],
      correctAnswer: "c"
    },
    {
      id: "q3-2",
      text: "What type of tool would Trello be classified as?",
      options: [
        { id: "a", text: "Communication tool" },
        { id: "b", text: "Project management tool" },
        { id: "c", text: "Accounting software" },
        { id: "d", text: "CRM software" }
      ],
      correctAnswer: "b"
    }
  ],
  4: [
    {
      id: "q4-1",
      text: "What is a niche in the context of VA services?",
      options: [
        { id: "a", text: "The location where you work" },
        { id: "b", text: "The specialized area or industry you focus your services on" },
        { id: "c", text: "The number of clients you can handle" },
        { id: "d", text: "The software you use most frequently" }
      ],
      correctAnswer: "b"
    },
    {
      id: "q4-2",
      text: "Which platform is NOT typically used by VAs to find clients?",
      options: [
        { id: "a", text: "Upwork" },
        { id: "b", text: "Fiverr" },
        { id: "c", text: "LinkedIn" },
        { id: "d", text: "Instagram" }
      ],
      correctAnswer: "d"
    }
  ],
  5: [
    {
      id: "q5-1",
      text: "What does SEO stand for?",
      options: [
        { id: "a", text: "Social Email Optimization" },
        { id: "b", text: "Search Engine Optimization" },
        { id: "c", text: "Service Excellence Organization" },
        { id: "d", text: "Systematic Email Operations" }
      ],
      correctAnswer: "b"
    },
    {
      id: "q5-2",
      text: "Which of these is NOT typically part of a VA's e-commerce support services?",
      options: [
        { id: "a", text: "Inventory management" },
        { id: "b", text: "Customer service" },
        { id: "c", text: "Manufacturing products" },
        { id: "d", text: "Order processing" }
      ],
      correctAnswer: "c"
    }
  ]
};

const Learn = () => {
  const [topics, setTopics] = useState<Topic[]>(() => {
    const savedTopics = localStorage.getItem('va-topics');
    return savedTopics ? JSON.parse(savedTopics) : initialTopics;
  });
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | undefined>(topics[0].subtopics[0]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Update selected topic when topics change (e.g., marking as complete)
    const updatedSelectedTopic = topics.find(t => t.id === selectedTopic.id);
    if (updatedSelectedTopic) {
      setSelectedTopic(updatedSelectedTopic);
      
      // If the current subtopic belongs to this topic, update it too
      if (selectedSubtopic && updatedSelectedTopic.subtopics.some(s => s.id === selectedSubtopic.id)) {
        const updatedSubtopic = updatedSelectedTopic.subtopics.find(s => s.id === selectedSubtopic.id);
        setSelectedSubtopic(updatedSubtopic);
      } else {
        // Default to first subtopic if current one is not in this topic
        setSelectedSubtopic(updatedSelectedTopic.subtopics[0]);
      }
    }
  }, [topics]);

  useEffect(() => {
    // Save progress to localStorage
    localStorage.setItem('va-topics', JSON.stringify(topics));
  }, [topics]);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/254745087870?text=${encodeURIComponent('Hi, I have a question about the Virtual Assistant training program.')}`, '_blank');
  };

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(topic.subtopics[0]);
  };

  const handleSubtopicSelect = (subtopic: Subtopic) => {
    setSelectedSubtopic(subtopic);
  };

  const handleMarkTopicComplete = () => {
    setTopics(prevTopics => 
      prevTopics.map(topic => 
        topic.id === selectedTopic.id 
          ? { ...topic, completed: true } 
          : topic
      )
    );
  };

  // Mark subtopic as completed
  const handleMarkSubtopicComplete = (subtopicId: string) => {
    setTopics(prevTopics => 
      prevTopics.map(topic => 
        topic.id === selectedTopic.id 
          ? {
              ...topic,
              subtopics: topic.subtopics.map(subtopic => 
                subtopic.id === subtopicId 
                  ? { ...subtopic, completed: true } 
                  : subtopic
              )
            } 
          : topic
      )
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      
      <div className="flex pt-16 flex-1">
        <Sidebar 
          topics={topics}
          selectedTopic={selectedTopic}
          selectedSubtopic={selectedSubtopic}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          onTopicSelect={handleTopicSelect}
          onSubtopicSelect={handleSubtopicSelect}
        />

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h1 className="font-serif text-3xl font-semibold text-accent mb-2">
                {selectedTopic.title}
              </h1>
              <p className="text-neutral-600">
                {selectedTopic.description}
              </p>
              {selectedSubtopic && (
                <div className="mt-4 p-2 bg-primary/5 inline-block rounded-md">
                  <p className="text-sm text-primary font-medium">
                    Current section: {selectedSubtopic.title}
                  </p>
                </div>
              )}
            </div>

            <VideoSection 
              videoId={selectedTopic.videoId} 
              notes={selectedSubtopic?.notes}
            />

            <div className="mt-8 flex justify-center gap-4">
              <Link to={`/story/${selectedTopic.id}`}>
                <Button
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Full Lesson
                </Button>
              </Link>
              
              {selectedSubtopic && !selectedSubtopic.completed && (
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleMarkSubtopicComplete(selectedSubtopic.id)}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Read
                </Button>
              )}
            </div>

            <Separator className="my-8" />

            <TranscriptPreview 
              transcript={selectedTopic.transcript}
              questions={quizQuestions[selectedTopic.id as keyof typeof quizQuestions]}
              onComplete={handleMarkTopicComplete}
              isCompleted={selectedTopic.completed}
            />
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div 
        className={`fixed bottom-6 right-6 transition-all duration-300 transform ${
          showChat ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
        }`}
        onMouseEnter={() => setShowChat(true)}
        onMouseLeave={() => setShowChat(false)}
      >
        <div className={`absolute bottom-full right-0 mb-2 transform transition-all duration-300 ${
          showChat ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <Card className="p-3 bg-white shadow-lg">
            <p className="text-accent font-medium text-sm whitespace-nowrap">
              Need help with your VA career? 👋
            </p>
          </Card>
        </div>
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      <Footer />
    </div>
  )
}

export default Learn
