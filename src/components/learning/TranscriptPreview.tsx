
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { BookOpen, CheckCircle, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

interface TranscriptPreviewProps {
  transcript?: string;
  questions: Question[];
  onComplete: () => void;
  isCompleted: boolean;
}

const TranscriptPreview = ({ 
  transcript, 
  questions, 
  onComplete,
  isCompleted 
}: TranscriptPreviewProps) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };
  
  const handleSubmit = () => {
    setShowResults(true);
    
    // Check if all answers are correct
    const allCorrect = questions.every(
      (question) => selectedAnswers[question.id] === question.correctAnswer
    );
    
    if (allCorrect) {
      onComplete();
    }
  };
  
  const correctAnswers = questions.filter(
    (question) => selectedAnswers[question.id] === question.correctAnswer
  ).length;

  return (
    <div className="space-y-6">
      {!showQuiz ? (
        <Card className="p-6">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            Lesson Content
            {isCompleted && (
              <span className="ml-auto flex items-center text-sm text-green-500">
                <CheckCircle className="h-4 w-4 mr-1" /> Completed
              </span>
            )}
          </h3>
          <div className="rounded-lg bg-neutral-50 p-4 mb-4">
            <p className="text-sm text-neutral-700 leading-relaxed">
              {transcript || "No content available for this topic."}
            </p>
          </div>
          
          <Button 
            onClick={() => setShowQuiz(true)}
            className="w-full mt-4"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Take Quiz to Complete
          </Button>
        </Card>
      ) : (
        <Card className="p-6">
          <h3 className="font-medium mb-6 flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-primary" />
            Knowledge Check
          </h3>
          
          <div className="space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-3">
                <h4 className="font-medium text-sm">{question.text}</h4>
                
                <RadioGroup 
                  value={selectedAnswers[question.id]} 
                  onValueChange={(value) => handleAnswerSelect(question.id, value)}
                >
                  {question.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem 
                        value={option.id} 
                        id={`${question.id}-${option.id}`} 
                        className={showResults ? 
                          option.id === question.correctAnswer 
                            ? "text-green-500 border-green-500" 
                            : selectedAnswers[question.id] === option.id 
                              ? "text-red-500 border-red-500" 
                              : "" 
                          : ""
                        }
                      />
                      <Label 
                        htmlFor={`${question.id}-${option.id}`}
                        className={showResults ? 
                          option.id === question.correctAnswer 
                            ? "text-green-500" 
                            : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                              ? "text-red-500" 
                              : "" 
                          : ""
                        }
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
          
          {showResults ? (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-lg bg-neutral-100">
                <p className="font-medium">
                  You got {correctAnswers} out of {questions.length} correct.
                </p>
                {correctAnswers === questions.length ? (
                  <p className="text-green-500 mt-2">Congratulations! You've completed this lesson.</p>
                ) : (
                  <p className="text-neutral-700 mt-2">Review the lesson and try again.</p>
                )}
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowQuiz(false);
                    setShowResults(false);
                    setSelectedAnswers({});
                  }}
                  className="flex-1"
                >
                  Back to Lesson
                </Button>
                
                <Button 
                  onClick={() => {
                    setShowResults(false);
                    setSelectedAnswers({});
                  }}
                  className="flex-1"
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length !== questions.length}
              className="w-full mt-6"
            >
              Submit Answers
            </Button>
          )}
        </Card>
      )}
    </div>
  )
}

export default TranscriptPreview
