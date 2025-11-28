import React, { useState } from 'react';
import { QuestionAndAnswerProps } from './QuestionAndAnswer.types';
import * as Styles from './QuestionAndAnswer.styles';
import FormWithLine from '../FormWithLine/FormWithLine';
import FormButton from '../FormButton/FormButton';
import RadioCheckboxInput from '../RadioCheckboxInput/RadioCheckboxInput';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';
import Heading from '../Heading/Heading';
import HintText from '../HintText/HintText';

const QuestionAndAnswer: React.FunctionComponent<QuestionAndAnswerProps> = ({
  questionText,
  hintText = '',
  answers,
  category,
  icon,
  onSubmit,
  index = null,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasError(false);

    if (selectedAnswer === '') {
      setHasError(true);
      return;
    }

    const selected = answers[selectedAnswer];

    setCorrect(selected.correctAnswer);
    setSummary(selected.answerSummary);

    if (onSubmit) {
      onSubmit(selected.correctAnswer, index);
    }
  };

  return (
    <Styles.Container data-testid="QuestionAndAnswer">
      {category && (
        <Styles.CategoryContainer>
          {icon && category && <HeadingWithIcon text={category} icon={icon} level={3} />}
          {category && !icon && <Heading text={category} level={3} />}
        </Styles.CategoryContainer>
      )}

      <FormWithLine hideLine onSubmit={handleSubmit}>
        <fieldset>
          <Styles.Legend>
            {index !== null && `${index + 1}. `}
            {questionText}
          </Styles.Legend>
          {hintText && <HintText text={hintText} />}
          {hasError && (
            <Styles.FormErrorText id="IsHelpfulError">
              <Styles.Hidden>Error:</Styles.Hidden> Please select an option
            </Styles.FormErrorText>
          )}
          <Styles.Answers>
            {answers.map((answer, index) => (
              <RadioCheckboxInput
                key={index}
                name={questionText}
                singleSelection
                checked={selectedAnswer === index.toString()}
                value={index.toString()}
                label={answer.answerText}
                onChange={(e) => handleChange(e)}
                isErrored={hasError}
              />
            ))}
          </Styles.Answers>
        </fieldset>
        {correct === null && <FormButton text="Submit" size="large" />}
      </FormWithLine>
      {correct !== null && (
        <Styles.Result>
          <Styles.ResultIcon $correct={correct}>
            {correct ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <title>Correct</title>
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <title>Incorrect</title>
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Styles.ResultIcon>
          <p>{summary}</p>
        </Styles.Result>
      )}
    </Styles.Container>
  );
};

export default QuestionAndAnswer;
