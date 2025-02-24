import { useParams } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Using the same topics data structure from Learn.tsx
const topics = [
  {
    id: 1,
    title: "Introduction to Islamic History",
    description: "An overview of the importance and significance of learning Islamic history.",
    transcriptEnglish: `Islamic history is a rich tapestry that spans over fourteen centuries. This introduction 
    will help you understand the significance of studying our history and how it shapes our present. We'll explore 
    the methodology of learning, the importance of authentic sources, and how to approach historical events with 
    proper context.

    Understanding Islamic history is crucial for several reasons:
    
    1. Connection to Our Heritage: It helps us understand our roots and the development of Islamic civilization.
    
    2. Learning from the Past: Historical events provide valuable lessons and insights that are relevant today.
    
    3. Understanding Context: Many Islamic practices and traditions can be better understood through their historical context.
    
    4. Building Identity: Knowledge of our history strengthens our Islamic identity and connection to our faith.
    
    5. Inspiration: The stories of prophets, companions, and great scholars serve as inspiration for our own lives.

    As we embark on this journey through Islamic history, we'll discover the remarkable stories, achievements, 
    and lessons that have shaped our ummah. We'll learn about the preservation of knowledge, the spread of Islam, 
    and the contributions of Muslims to various fields of knowledge.`,
    transcriptSwahili: `Historia ya Kiislamu ni utajiri mkubwa unaoenea kwa zaidi ya karne kumi na nne. Utangulizi 
    huu utakusaidia kuelewa umuhimu wa kusoma historia yetu na jinsi inavyounda wakati wetu wa sasa. Tutachunguza 
    mbinu za kujifunza, umuhimu wa vyanzo sahihi, na jinsi ya kukabiliana na matukio ya kihistoria kwa muktadha sahihi.

    Kuelewa historia ya Kiislamu ni muhimu kwa sababu kadhaa:

    1. Uhusiano na Urithi Wetu: Inatusaidia kuelewa mizizi yetu na maendeleo ya ustaarabu wa Kiislamu.

    2. Kujifunza kutoka Zamani: Matukio ya kihistoria yanatoa masomo na ufahamu muhimu unaofaa leo.

    3. Kuelewa Muktadha: Desturi nyingi za Kiislamu zinaweza kueleweka vyema kupitia muktadha wao wa kihistoria.

    4. Kujenga Utambulisho: Maarifa ya historia yetu yanaimarisha utambulisho wetu wa Kiislamu na uhusiano na imani yetu.

    5. Msukumo: Hadithi za manabii, maswahaba, na wasomi wakuu hutumika kama msukumo katika maisha yetu.

    Tunapoingia katika safari hii kupitia historia ya Kiislamu, tutagundua hadithi za kushangaza, mafanikio, 
    na masomo ambayo yameiunda umma wetu. Tutajifunza kuhusu uhifadhi wa maarifa, kuenea kwa Uislamu, 
    na michango ya Waislamu katika nyanja mbalimbali za maarifa.`
  },
  {
    id: 2,
    title: "Birth of Muhammad",
    description: "Explore the historical context and significance of Prophet Muhammad's birth.",
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
    description: "Discover the story of Prophet Muhammad's marriage to Khadijah.",
  },
  {
    id: 4,
    title: "First Revelation",
    description: "Understanding the profound moment of the first divine revelation.",
  },
  {
    id: 5,
    title: "Early Islam and the First Muslims",
    description: "Learn about the early converts and the beginning of Islamic community.",
  },
  {
    id: 6,
    title: "Persecution in Mecca",
    description: "Explore the challenges faced by early Muslims in Mecca.",
  },
  {
    id: 7,
    title: "The Migration to Abyssinia",
    description: "Understanding the first migration of Muslims seeking refuge.",
  },
  {
    id: 8,
    title: "The Year of Sorrow",
    description: "Learn about this significant period in Prophet Muhammad's life.",
  },
  {
    id: 9,
    title: "The Night Journey and Ascension",
    description: "Discover the miraculous journey of Isra and Mi'raj.",
  },
  {
    id: 10,
    title: "Pledge of Aqaba & Migration to Medina",
    description: "Explore the events leading to the Hijrah to Medina.",
  },
]

const Story = () => {
  const { id } = useParams<{ id: string }>()
  const topic = topics.find(t => t.id === Number(id))

  if (!topic) {
    return <div>Story not found</div>
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-accent mb-6">
            {topic.title}
          </h1>
          
          <p className="text-neutral-600 mb-8">
            {topic.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* English Story */}
            <Card className="p-6">
              <h2 className="font-serif text-2xl font-semibold text-accent mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                English Story
              </h2>
              <div className="prose prose-neutral">
                {topic.transcriptEnglish.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Swahili Story */}
            <Card className="p-6">
              <h2 className="font-serif text-2xl font-semibold text-accent mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Hadithi ya Kiswahili
              </h2>
              <div className="prose prose-neutral">
                {topic.transcriptSwahili.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Story
