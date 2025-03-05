
import { Card } from '@/components/ui/card'

interface VideoSectionProps {
  videoId?: string;
  notes?: string;
}

const VideoSection = ({ videoId, notes }: VideoSectionProps) => {
  return (
    <div className="w-full space-y-4">
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
      
      {notes && (
        <Card className="p-4">
          <h3 className="font-medium text-lg mb-2">Notes</h3>
          <div className="text-neutral-700 text-sm whitespace-pre-line">
            {notes}
          </div>
        </Card>
      )}
    </div>
  )
}

export default VideoSection
