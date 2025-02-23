import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import Navbar from '@/components/Navbar'

const topics = [
  {
    id: 1,
    title: "Birth of Muhammad",
    duration: "15:20",
    description: "Explore the historical context and significance of Prophet Muhammad's birth.",
    videoEnglish: "PDxKxnVZtgo",
    videoSwahili: "lOIQPHSaqW0"
  },
  {
    id: 2,
    title: "Childhood and Early Life",
    duration: "18:45",
    description: "Learn about the early years and upbringing of Prophet Muhammad.",
  },
  {
    id: 3,
    title: "Marriage to Khadijah",
    duration: "14:30",
    description: "Discover the story of Prophet Muhammad's marriage to Khadijah.",
  },
  {
    id: 4,
    title: "First Revelation",
    duration: "20:15",
    description: "Understanding the profound moment of the first divine revelation.",
  },
  {
    id: 5,
    title: "Early Islam and the First Muslims",
    duration: "25:10",
    description: "Learn about the early converts and the beginning of Islamic community.",
  },
  {
    id: 6,
    title: "Persecution in Mecca",
    duration: "22:30",
    description: "Explore the challenges faced by early Muslims in Mecca.",
  },
  {
    id: 7,
    title: "The Migration to Abyssinia",
    duration: "19:45",
    description: "Understanding the first migration of Muslims seeking refuge.",
  },
  {
    id: 8,
    title: "The Year of Sorrow",
    duration: "16:20",
    description: "Learn about this significant period in Prophet Muhammad's life.",
  },
  {
    id: 9,
    title: "The Night Journey and Ascension",
    duration: "23:15",
    description: "Discover the miraculous journey of Isra and Mi'raj.",
  },
  {
    id: 10,
    title: "Pledge of Aqaba & Migration to Medina",
    duration: "27:40",
    description: "Explore the events leading to the Hijrah to Medina.",
  },
]

const Learn = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/254745087870?text=${encodeURIComponent('Assalam Alaikum, I have a question about Islamic History Hub.')}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <div 
          className={`relative h-[calc(100vh-4rem)] bg-white border-r border-neutral-200 transition-all duration-300 ${
            sidebarCollapsed ? 'w-0' : 'w-full md:w-80 lg:w-96'
          }`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-4 z-50 rounded-full bg-white border border-neutral-200 shadow-sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>

          <div className={`w-full ${sidebarCollapsed ? 'hidden' : 'block'}`}>
            <div className="p-6 border-b border-neutral-200">
              <h2 className="font-serif text-2xl font-semibold text-accent">Course Content</h2>
              <p className="text-sm text-neutral-600 mt-1">10 lessons • 3.5 hours</p>
            </div>

            <ScrollArea className="h-[calc(100vh-10rem)] p-4">
              <div className="space-y-2">
                {topics.map((topic) => (
                  <Card 
                    key={topic.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      selectedTopic.id === topic.id 
                        ? 'border-primary bg-primary/5' 
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Play className={`h-4 w-4 ${
                          selectedTopic.id === topic.id ? 'text-primary' : 'text-primary/60'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{topic.title}</h3>
                        <p className="text-xs text-neutral-600 mt-1">{topic.duration}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h1 className="font-serif text-3xl font-semibold text-accent mb-2">
                {selectedTopic.title}
              </h1>
              <p className="text-neutral-600">
                {selectedTopic.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* English Video */}
              <Card className="aspect-video bg-neutral-900 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedTopic.videoEnglish}`}
                  title="English Version"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Card>

              {/* Swahili Video */}
              <Card className="aspect-video bg-neutral-900 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedTopic.videoSwahili}`}
                  title="Swahili Version"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Transcripts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4">English Transcript</h3>
                <ScrollArea className="h-[200px]">
                  <p className="text-sm text-neutral-600">
                    [English transcript will appear here]
                  </p>
                </ScrollArea>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4">Swahili Transcript</h3>
                <ScrollArea className="h-[200px]">
                  <p className="text-sm text-neutral-600">
                    [Swahili transcript will appear here]
                  </p>
                </ScrollArea>
              </Card>
            </div>
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
            <p className="text-accent font-arabic text-sm whitespace-nowrap">
              Assalam Alaikum! Need help? 👋
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
    </div>
  )
}

export default Learn
