import React, { useState } from 'react';
import { QuizProps } from './Quiz.types';
import * as Styles from './Quiz.styles';
import Heading from '../../components/Heading/Heading';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const Quiz: React.FunctionComponent<QuizProps> = ({ title, questions }) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showNextQuestion, setShowNextQuestion] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  const nextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      const next = activeQuestion + 1;
      setActiveQuestion(next);
      setShowNextQuestion(false);
    }
  };

  const handleSubmission = (answer: boolean, index: number) => {
    const updatedResults = results;

    results.splice(index, 1, answer);

    setResults(updatedResults);
    if (activeQuestion < questions.length - 1) {
      setShowNextQuestion(true);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setResults([]);
    setShowNextQuestion(false);
    setActiveQuestion(0);
    setShowResults(false);
    setFinished(false);
  };

  return (
    <Styles.Container data-testid="Quiz">
      <Heading text={title} level={2} />
      {finished ? (
        <div>
          <p>
            You got {results.filter((result) => result === true).length} out of {results.length}.
          </p>
          <Styles.Button type="button" onClick={resetQuiz}>
            Try again
          </Styles.Button>
        </div>
      ) : (
        <Row>
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              {activeQuestion === index && (
                <Column small="full" medium="full" large="full">
                  <QuestionAndAnswer {...question} onSubmit={handleSubmission} index={index} />
                </Column>
              )}
            </React.Fragment>
          ))}

          {showNextQuestion && (
            <Column small="full" medium="full" large="full">
              <Styles.Button type="button" onClick={nextQuestion}>
                Next
              </Styles.Button>
            </Column>
          )}
          {showResults && (
            <Column small="full" medium="full" large="full">
              <Styles.Button type="button" onClick={() => setFinished(true)}>
                Show results
              </Styles.Button>
            </Column>
          )}
        </Row>
      )}
    </Styles.Container>
  );
};

export default Quiz;
