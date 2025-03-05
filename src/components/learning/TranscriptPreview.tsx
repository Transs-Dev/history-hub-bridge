
import { Card } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

interface TranscriptPreviewProps {
  transcriptEnglish: string
  transcriptSwahili: string
}

const TranscriptPreview = ({ transcriptEnglish, transcriptSwahili }: TranscriptPreviewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          Lesson Preview (English)
        </h3>
        <div className="rounded-lg bg-neutral-50 p-4">
          <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
            {transcriptEnglish}
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          Maudhui ya Somo (Kiswahili)
        </h3>
        <div className="rounded-lg bg-neutral-50 p-4">
          <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
            {transcriptSwahili}
          </p>
        </div>
      </Card>
    </div>
  )
}

export default TranscriptPreview
