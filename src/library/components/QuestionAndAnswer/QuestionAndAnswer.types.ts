export interface QuestionAndAnswerProps {
  /**
   * What is this?
   */
  questionText: string;

  hintText?: string | null;

  answers: AnswerProps[];

  category?: string | null;

  icon?: string | null;

  onSubmit?: (answer: boolean, index: number) => void;

  index?: number;
}

export interface AnswerProps {
  answerText: string;

  correctAnswer: boolean;

  answerSummary: string;
}
