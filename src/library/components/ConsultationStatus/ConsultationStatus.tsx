import React from 'react';

import { ConsultationStatusProps } from './ConsultationStatus.types';
import * as Styles from './ConsultationStatus.styles';
import { SummaryRowProps } from '../SummaryList/SummaryList.types';
import SummaryList from '../SummaryList/SummaryList';

const ConsultationStatus: React.FunctionComponent<ConsultationStatusProps> = ({ openDate, closeDate }) => {
  const isOpen = new Date(closeDate) > new Date();
  const terms: SummaryRowProps[] = [
    {
      term: isOpen ? 'Opens at:' : 'Opened at:',
      detail: new Date(openDate).toLocaleDateString('en-GB'),
    },
    {
      term: isOpen ? 'Closes at:' : 'Closed at:',
      detail: new Date(closeDate).toLocaleDateString('en-GB'),
    },
  ];

  return (
    <Styles.Container data-testid="ConsultationStatus" $isOpen={isOpen}>
      <SummaryList terms={terms} hasBorders={false} />
    </Styles.Container>
  );
};

export default ConsultationStatus;
