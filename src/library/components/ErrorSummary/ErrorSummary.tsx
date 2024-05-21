import React from 'react';
import { ErrorSummaryProps } from './ErrorSummary.types';
import * as Styles from './ErrorSummary.styles';
import Heading from '../Heading/Heading';

const ErrorSummary: React.FunctionComponent<ErrorSummaryProps> = ({ errors }) => (
  <Styles.Container data-testid="ErrorSummary">
    <Heading level={2} text="There is a problem" />
    <Styles.ErrorList>
      {Object.keys(errors).map((field) => (
        <Styles.ErrorMessage key={field}>
          <Styles.ErrorLink href={`#${field}Error`}>{errors[field].message}</Styles.ErrorLink>
        </Styles.ErrorMessage>
      ))}
    </Styles.ErrorList>
  </Styles.Container>
);

export default ErrorSummary;
