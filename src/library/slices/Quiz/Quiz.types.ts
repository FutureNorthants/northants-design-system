import { QuestionAndAnswerProps } from '../../components/QuestionAndAnswer/QuestionAndAnswer.types';

export interface QuizProps {
  /**
   * The quiz title
   */
  title: string;

  /**
   * An array of questions and answers for the quiz
   */
  questions: QuestionAndAnswerProps[];
}
