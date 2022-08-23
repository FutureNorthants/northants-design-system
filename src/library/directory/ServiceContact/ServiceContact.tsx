import React from 'react';
import { ServiceContactProps } from './ServiceContact.types';
import * as Styles from './ServiceContact.styles';
import SummaryList from '../../components/SummaryList/SummaryList';
import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';

const ServiceContact: React.FC<ServiceContactProps> = ({ name, title, phones }) => {
  const terms: SummaryRowProps[] = [
    {
      term: 'Name',
      detail: name,
    },
    {
      term: 'Title',
      detail: title,
    },
    {
      term: 'Phone',
      detail: phones.flatMap((phone) => phone.number).join('<br /> '),
    },
  ];

  return (
    <Styles.Container data-testid="ServiceContact">
      <SummaryList terms={terms} />
    </Styles.Container>
  );
};

export default ServiceContact;
