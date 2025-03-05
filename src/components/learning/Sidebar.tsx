
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, ChevronRight, Play, CheckCircle } from 'lucide-react'

export interface Subtopic {
  id: string;
  title: string;
  completed: boolean;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  videoId?: string;
  transcript?: string;
  subtopics: Subtopic[];
  completed: boolean;
}

interface SidebarProps {
  topics: Topic[];
  selectedTopic: Topic;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  onTopicSelect: (topic: Topic) => void;
}

const Sidebar = ({ 
  topics, 
  selectedTopic, 
  sidebarCollapsed, 
  setSidebarCollapsed, 
  onTopicSelect 
}: SidebarProps) => {
  return (
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
          <p className="text-sm text-neutral-600 mt-1">5 topics • Virtual Assistant Training</p>
        </div>

        <ScrollArea className="h-[calc(100vh-10rem)] p-4">
          <div className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.id} className="space-y-2">
                <Card 
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedTopic.id === topic.id 
                      ? 'border-primary bg-primary/5' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => onTopicSelect(topic)}
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      {topic.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Play className={`h-4 w-4 ${
                          selectedTopic.id === topic.id ? 'text-primary' : 'text-primary/60'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{topic.title}</h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        {topic.subtopics.filter(st => st.completed).length}/{topic.subtopics.length} completed
                      </p>
                    </div>
                  </div>
                </Card>
                
                {selectedTopic.id === topic.id && (
                  <div className="pl-10 space-y-1">
                    {topic.subtopics.map((subtopic) => (
                      <div 
                        key={subtopic.id} 
                        className="p-2 text-sm flex items-center gap-2 rounded-md hover:bg-neutral-100 cursor-pointer"
                      >
                        {subtopic.completed ? (
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        ) : (
                          <div className="h-3 w-3 rounded-full border border-neutral-300" />
                        )}
                        <span className="flex-1">{subtopic.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Sidebar
