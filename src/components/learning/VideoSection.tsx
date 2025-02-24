
import { Card } from '@/components/ui/card'

interface VideoSectionProps {
  videoEnglish: string
  videoSwahili: string
}

const VideoSection = ({ videoEnglish, videoSwahili }: VideoSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="aspect-video bg-neutral-900 overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoEnglish}`}
          title="English Version"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Card>

      <Card className="aspect-video bg-neutral-900 overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoSwahili}`}
          title="Swahili Version"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Card>
    </div>
  )
}

export default VideoSection
