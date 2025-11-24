import React from 'react';
import { ConsultationLinkProps } from './ConsultationLink.types';
import * as Styles from './ConsultationLink.styles';
import Row from '../Row/Row';
import Column from '../Column/Column';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import SummaryList from '../SummaryList/SummaryList';
import { SummaryListProps, SummaryRowProps } from '../SummaryList/SummaryList.types';
import ConsultationStatus from '../ConsultationStatus/ConsultationStatus';

const ConsultationLink: React.FunctionComponent<ConsultationLinkProps> = ({
  title,
  summary,
  showSummary = false,
  openDate,
  closeDate,
  parentTitle,
  url,
  imageAltText,
  imageSmall,
  imageLarge,
  hasPadding = false,
}) => {
  const isOpen = new Date(closeDate) > new Date();
  const terms: SummaryRowProps[] = [
    {
      term: isOpen ? 'Opens at:' : 'Opened at:',
      detail: new Date(openDate).toLocaleDateString(),
    },
    {
      term: isOpen ? 'Closes at:' : 'Closed at:',
      detail: new Date(closeDate).toLocaleDateString(),
    },
  ];

  return (
    <Styles.Container data-testid="ConsultationLink" href={url}>
      <Row>
        <Column
          small="full"
          medium={imageLarge ? 'two-thirds' : 'full'}
          large={imageLarge ? 'two-thirds' : 'full'}
          hasPadding={false}
        >
          <Styles.ConsultationContent $hasPadding={hasPadding}>
            <Styles.Title className="consultation-list__title">{title}</Styles.Title>
            {summary && showSummary && <Styles.Description>{summary}</Styles.Description>}
            <ConsultationStatus openDate={openDate} closeDate={closeDate} />
            {parentTitle && <Styles.Parent>{parentTitle}</Styles.Parent>}
          </Styles.ConsultationContent>
        </Column>
        {imageLarge && (
          <Column
            small="full"
            medium="one-third"
            large="one-third"
            hasPadding={false}
            classes="consultation-list__image-container"
          >
            <ResponsiveImage
              imageSmall={imageSmall}
              imageLarge={imageLarge}
              imageAltText={imageAltText}
              smallWidth="720"
              largeWidth="1440"
              ratio="16by9"
              objectFit="cover"
            />
          </Column>
        )}
      </Row>
    </Styles.Container>
  );
};

export default ConsultationLink;
