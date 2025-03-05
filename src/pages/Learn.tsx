
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
    title: "Introduction to Virtual Assistance",
    duration: "25:10",
    description: "Learn the fundamentals of virtual assistance and why it's a growing career choice.",
    videoEnglish: "5H440XeZG_E",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `Virtual assistance is a rapidly growing field in today's digital economy. A Virtual Assistant (VA) is a professional who provides administrative, technical, or creative assistance to clients remotely. This module will introduce you to the VA industry, explore the growing demand for virtual services, and outline the different types of virtual assistants in the market today. We'll also cover the fundamental skills required to become a successful VA.`,
    transcriptSwahili: `Usaidizi wa mtandaoni ni nyanja inayokua kwa kasi katika uchumi wa dijitali wa leo. Msaidizi wa mtandaoni (VA) ni mtaalamu ambaye hutoa usaidizi wa kiutawala, kiufundi, au ubunifu kwa wateja kwa mbali. Moduli hii itakutambulisha kwa tasnia ya VA, itachunguza mahitaji yanayokua ya huduma za mtandaoni, na kubainisha aina tofauti za wasaidizi wa mtandaoni katika soko la leo. Pia tutashughulikia ujuzi wa msingi unaohitajika kuwa VA mwenye mafanikio.`
  },
  {
    id: 2,
    title: "What is a Virtual Assistant?",
    duration: "15:20",
    description: "Understand the role and responsibilities of a professional VA.",
    videoEnglish: "kn4n4auk6T4",
    videoSwahili: "lOIQPHSaqW0",
    transcriptEnglish: `In this lesson, we'll define exactly what a virtual assistant is and how this role differs from traditional assistants. We'll explore the key responsibilities, typical tasks, and the advantages of working as a VA. You'll also learn about the business models in the VA industry, from freelancing to agency work.`,
    transcriptSwahili: `Katika somo hili, tutafafanua kwa usahihi msaidizi wa mtandaoni ni nini na jinsi jukumu hili linatofautiana na wasaidizi wa kawaida. Tutachunguza majukumu muhimu, kazi za kawaida, na faida za kufanya kazi kama VA. Utajifunza pia kuhusu mifumo ya biashara katika tasnia ya VA, kuanzia uhuru hadi kazi ya wakala.`
  },
  {
    id: 3,
    title: "Growing Demand for VAs",
    duration: "14:30",
    description: "Explore the market trends and opportunities in the VA industry.",
    videoEnglish: "qYY-Z8Bsvj8",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `The demand for virtual assistants has skyrocketed in recent years. This lesson analyzes current market trends, identifies which industries are hiring VAs the most, and explores future projections for the virtual assistance field. We'll also discuss how global events like the pandemic have accelerated remote work adoption and created more opportunities for virtual professionals.`,
    transcriptSwahili: `Mahitaji ya wasaidizi wa mtandaoni yameongezeka sana katika miaka ya hivi karibuni. Somo hili linachambua mienendo ya soko ya sasa, inatambua viwanda gani vinaajiri VA zaidi, na kuchunguza matarajio ya baadaye kwa uwanja wa usaidizi wa mtandaoni. Tutajadili pia jinsi matukio ya kimataifa kama janga yameharakisha utumiaji wa kazi ya mbali na kuunda fursa zaidi kwa wataalamu wa mtandaoni.`
  },
  {
    id: 4,
    title: "Types of Virtual Assistants",
    duration: "20:15",
    description: "Discover the various specializations and niches within virtual assistance.",
    videoEnglish: "kn4n4auk6T4",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `Not all virtual assistants are the same. This lesson categorizes the different types of VAs, from general administrative assistants to specialized professionals in fields like social media management, content creation, bookkeeping, and more. You'll learn about the various specializations available to you and how to identify which type aligns best with your skills and interests.`,
    transcriptSwahili: `Wasaidizi wote wa mtandaoni sio sawa. Somo hili linabainisha aina tofauti za VA, kuanzia wasaidizi wa kiutawala wa jumla hadi wataalamu maalum katika nyanja kama vile usimamizi wa mitandao ya kijamii, uundaji wa maudhui, uwekaji wa vitabu, na zaidi. Utajifunza kuhusu utaalamu mbalimbali unaopatikana kwako na jinsi ya kutambua ni aina gani inaoana vyema na ujuzi na maslahi yako.`
  },
  {
    id: 5,
    title: "Essential Skills for Virtual Assistants",
    duration: "22:30",
    description: "Master the core competencies needed for any successful VA career.",
    videoEnglish: "5H440XeZG_E",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `What skills do you need to succeed as a virtual assistant? This comprehensive module covers the essential competencies required in the VA profession, including communication, time management, customer service, and technical skills. You'll learn how to assess your current abilities and create a plan to develop areas where you need improvement.`,
    transcriptSwahili: `Ni ujuzi gani unahitaji kufanikiwa kama msaidizi wa mtandaoni? Moduli hii kamili inashughulikia umahiri muhimu unaohitajika katika taaluma ya VA, ikiwa ni pamoja na mawasiliano, usimamizi wa muda, huduma kwa wateja, na ujuzi wa kiufundi. Utajifunza jinsi ya kutathmini uwezo wako wa sasa na kuunda mpango wa kuendeleza maeneo ambayo unahitaji kuboresha.`
  },
  {
    id: 6,
    title: "Communication & Email Management",
    duration: "19:45",
    description: "Learn effective communication strategies and email management techniques.",
    videoEnglish: "qYY-Z8Bsvj8",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `Effective communication is arguably the most important skill for a virtual assistant. This lesson covers professional communication techniques, email management strategies, and tools to streamline your communication workflow. You'll learn how to write professional emails, manage your client's inbox, and handle communication across different time zones and cultures.`,
    transcriptSwahili: `Mawasiliano mazuri bila shaka ni ujuzi muhimu zaidi kwa msaidizi wa mtandaoni. Somo hili linashughulikia mbinu za mawasiliano ya kitaalamu, mikakati ya usimamizi wa barua pepe, na zana za kurahisisha mtiririko wako wa mawasiliano. Utajifunza jinsi ya kuandika barua pepe za kitaalamu, kusimamia inbox ya mteja wako, na kushughulikia mawasiliano katika majira tofauti na tamaduni.`
  },
  {
    id: 7,
    title: "Time Management & Productivity",
    duration: "16:20",
    description: "Discover strategies to maximize productivity and manage multiple clients.",
    videoEnglish: "kn4n4auk6T4",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `As a VA, you'll often juggle multiple clients and deadlines. This lesson focuses on time management techniques, productivity tools, and strategies to prioritize tasks effectively. You'll learn how to track your time, avoid burnout, and create systems that help you deliver high-quality work consistently.`,
    transcriptSwahili: `Kama VA, mara nyingi utasongeza wateja wengi na tarehe za mwisho. Somo hili linazingatia mbinu za usimamizi wa muda, zana za uzalishaji, na mikakati ya kupanga kazi kwa ufanisi. Utajifunza jinsi ya kufuatilia muda wako, kuepuka kuteketea, na kuunda mifumo inayokusaidia kutoa kazi ya ubora wa juu kila wakati.`
  },
  {
    id: 8,
    title: "Tools & Software for Virtual Assistants",
    duration: "23:15",
    description: "Master the essential technology and software used in the VA industry.",
    videoEnglish: "5H440XeZG_E",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `The right tools can dramatically increase your efficiency and value as a VA. This module introduces you to the essential software and technologies used in the virtual assistance industry. From communication platforms to project management systems, you'll learn which tools to master and how they can streamline your workflow.`,
    transcriptSwahili: `Zana sahihi zinaweza kuongeza ufanisi na thamani yako kama VA kwa kiasi kikubwa. Moduli hii inakutambulisha kwa programu muhimu na teknolojia zinazotumika katika tasnia ya usaidizi wa mtandaoni. Kuanzia majukwaa ya mawasiliano hadi mifumo ya usimamizi wa miradi, utajifunza ni zana zipi za kumudu na jinsi zinaweza kurahisisha mtiririko wako wa kazi.`
  },
  {
    id: 9,
    title: "Communication Tools",
    duration: "16:20",
    description: "Learn to use popular communication platforms like Zoom, Slack, and Microsoft Teams.",
    videoEnglish: "qYY-Z8Bsvj8",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `This lesson provides a comprehensive overview of the communication tools essential for virtual assistants. You'll learn how to use Zoom for video meetings, Slack for team communication, and Microsoft Teams for collaborative work. We'll cover setup, best practices, and tips for troubleshooting common issues.`,
    transcriptSwahili: `Somo hili linatoa muhtasari kamili wa zana za mawasiliano muhimu kwa wasaidizi wa mtandaoni. Utajifunza jinsi ya kutumia Zoom kwa mikutano ya video, Slack kwa mawasiliano ya timu, na Microsoft Teams kwa kazi za ushirikiano. Tutashughulikia usanidi, mazoea bora, na vidokezo vya kutatua matatizo ya kawaida.`
  },
  {
    id: 10,
    title: "Finding Clients & Starting Your VA Business",
    duration: "27:40",
    description: "Learn how to launch your VA business and attract your first clients.",
    videoEnglish: "5H440XeZG_E",
    videoSwahili: "UMZYIKHnce4",
    transcriptEnglish: `Ready to start your VA business? This comprehensive module will guide you through identifying your niche, setting up your professional presence, finding your first clients, and establishing your business operations. You'll learn practical strategies for marketing yourself, setting your rates, and creating client contracts.`,
    transcriptSwahili: `Uko tayari kuanza biashara yako ya VA? Moduli hii kamili itakuongoza katika kutambua sehemu yako, kuanzisha uwepo wako wa kitaalamu, kupata wateja wako wa kwanza, na kuanzisha shughuli za biashara yako. Utajifunza mikakati ya vitendo ya kujinadi, kuweka viwango vyako, na kuunda mikataba ya wateja.`
  }
]

const Learn = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/254745087870?text=${encodeURIComponent('Hi, I have a question about the Virtual Assistant training program.')}`, '_blank');
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
                  View Full Lesson
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
