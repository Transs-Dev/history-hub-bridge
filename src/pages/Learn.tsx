import { useState } from 'react'
import { MessageCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/learning/Sidebar'
import VideoSection from '@/components/learning/VideoSection'
import TranscriptPreview from '@/components/learning/TranscriptPreview'

const topics = [
  {
    id: 1,
    title: "Introduction to Islamic History",
    duration: "2:00",
    description: "An overview of the importance and significance of learning Islamic history.",
    videoEnglish: "PDxKxnVZtgo", // You'll need to update this with the correct English video ID
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `Islamic history is a rich tapestry that spans over fourteen centuries. This introduction 
    will help you understand the significance of studying our history and how it shapes our present. We'll explore 
    the methodology of learning, the importance of authentic sources, and how to approach historical events with 
    proper context.`,
    transcriptSwahili: `Historia ya Kiislamu ni utajiri mkubwa unaoenea kwa zaidi ya karne kumi na nne. Utangulizi 
    huu utakusaidia kuelewa umuhimu wa kusoma historia yetu na jinsi inavyounda wakati wetu wa sasa. Tutachunguza 
    mbinu za kujifunza, umuhimu wa vyanzo sahihi, na jinsi ya kukabiliana na matukio ya kihistoria kwa muktadha sahihi.`
  },
  {
    id: 2,
    title: "Birth of Muhammad",
    duration: "15:20",
    description: "Explore the historical context and significance of Prophet Muhammad's birth.",
    videoEnglish: "PDxKxnVZtgo",
    videoSwahili: "lOIQPHSaqW0",
    transcriptEnglish: `The birth of Prophet Muhammad (peace be upon him) in the Year of the Elephant marked 
    a pivotal moment in human history. Born in Mecca to Abdullah and Amina, his birth was accompanied by various 
    miraculous events that foretold his future significance.`,
    transcriptSwahili: `Kuzaliwa kwa Mtume Muhammad (SAW) katika Mwaka wa Ndovu kulikuwa ni wakati muhimu katika 
    historia ya binadamu. Alizaliwa Makka kwa Abdullah na Amina, kuzaliwa kwake kuliambatana na matukio mbalimbali 
    ya miujiza ambayo ilitabiri umuhimu wake wa baadaye.`
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
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      
      <div className="flex pt-16 flex-1">
        <Sidebar 
          topics={topics}
          selectedTopic={selectedTopic}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          onTopicSelect={setSelectedTopic}
        />

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

            <VideoSection 
              videoEnglish={selectedTopic.videoEnglish}
              videoSwahili={selectedTopic.videoSwahili}
            />

            <div className="mt-8 flex justify-center gap-4">
              <Link to={`/story/${selectedTopic.id}`}>
                <Button
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Full Story
                </Button>
              </Link>
            </div>

            <Separator className="my-8" />

            <TranscriptPreview 
              transcriptEnglish={selectedTopic.transcriptEnglish}
              transcriptSwahili={selectedTopic.transcriptSwahili}
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

      <Footer />
    </div>
  )
}

export default Learn
