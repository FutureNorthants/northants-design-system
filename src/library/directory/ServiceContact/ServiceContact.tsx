import React from 'react';
import { ServiceContactProps } from './ServiceContact.types';
import * as Styles from './ServiceContact.styles';
import SummaryList from '../../components/SummaryList/SummaryList';
import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';

const ServiceContact: React.FunctionComponent<ServiceContactProps> = ({ title, phones }) => {
  const terms: SummaryRowProps[] = [];

  if (title) {
    terms.push({
      term: 'Title',
      detail: title,
    });
  }

  if (phones.length > 0) {
    terms.push({
      term: 'Phone',
      detail: phones.flatMap((phone) => `<p><a href="tel:${phone.number}">${phone.number}</a></p>`).join(''),
    });
  }

  return (
    <Styles.Container data-testid="ServiceContact">
      <SummaryList terms={terms} hasMargin={false} />
    </Styles.Container>
  );
};

export default ServiceContact;
