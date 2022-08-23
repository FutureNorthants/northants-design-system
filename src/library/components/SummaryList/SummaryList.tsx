import React from 'react';
import { SummaryListProps } from './SummaryList.types';
import * as Styles from './SummaryList.styles';
import sanitizeHtml from 'sanitize-html';

const SummaryList: React.FunctionComponent<SummaryListProps> = ({ terms }) => (
  <Styles.SummaryList data-testid="SummaryList">
    {terms.map((summaryRow, summaryIndex) => (
      <Styles.SummaryRow key={summaryIndex}>
        <Styles.SummaryTerm>{summaryRow.term}</Styles.SummaryTerm>
        <Styles.SummaryDetail dangerouslySetInnerHTML={{ __html: sanitizeHtml(summaryRow.detail) }} />
      </Styles.SummaryRow>
    ))}
  </Styles.SummaryList>
);

export default SummaryList;
