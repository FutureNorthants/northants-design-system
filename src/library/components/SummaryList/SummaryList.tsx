import React from 'react';
import { SummaryListProps } from './SummaryList.types';
import * as Styles from './SummaryList.styles';
import sanitizeHtml from 'sanitize-html';
import Heading from '../Heading/Heading';

const SummaryList: React.FunctionComponent<SummaryListProps> = ({
  terms,
  hasMargin = true,
  hasBorders = true,
  heading,
}) => (
  <Styles.SummaryContainer $hasHeading={heading} $hasMargin={hasMargin}>
    {heading && (
      <Styles.SummaryHeading>
        <Heading level={3} text={heading} />
      </Styles.SummaryHeading>
    )}
    <Styles.SummaryList data-testid="SummaryList">
      {terms.map((summaryRow, summaryIndex) => (
        <Styles.SummaryRow key={summaryIndex} $hasBorders={hasBorders}>
          <Styles.SummaryTerm>{summaryRow.term}</Styles.SummaryTerm>
          <Styles.SummaryDetail dangerouslySetInnerHTML={{ __html: sanitizeHtml(summaryRow.detail) }} />
        </Styles.SummaryRow>
      ))}
    </Styles.SummaryList>
  </Styles.SummaryContainer>
);

export default SummaryList;
