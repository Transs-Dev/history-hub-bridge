
import { Card } from '@/components/ui/card'

interface VideoSectionProps {
  videoId?: string;
}

const VideoSection = ({ videoId }: VideoSectionProps) => {
  return (
    <div className="w-full">
      <Card className="aspect-video bg-neutral-900 overflow-hidden">
        {videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Virtual Assistant Training"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No video available for this topic
          </div>
        )}
      </Card>
    </div>
  )
}

export default VideoSection
