import React from 'react';
import { EventLinkProps } from './EventLink.types';
import * as Styles from './EventLink.styles';
import EventDetails from '../EventDetails/EventDetails';
import Column from '../Column/Column';
import Row from '../Row/Row';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const EventLink: React.FunctionComponent<EventLinkProps> = ({
  title,
  summary,
  startTime,
  endTime,
  location,
  url,
  imageLarge,
  imageSmall,
  imageAltText,
  showSummary = false,
  hasPadding = true,
  isPromoted = false,
  parentTitle,
}) => (
  <Styles.Container data-testid="EventLink" href={url} $isPromoted={isPromoted}>
    <Row>
      <Column
        small="full"
        medium={imageLarge ? 'two-thirds' : 'full'}
        large={imageLarge ? 'two-thirds' : 'full'}
        hasPadding={false}
      >
        <Styles.EventContent $hasPadding={hasPadding}>
          <Styles.Title className="event-list__title">{title}</Styles.Title>
          {summary && showSummary && <Styles.Description>{summary}</Styles.Description>}
          <EventDetails
            startTime={startTime}
            endTime={endTime}
            location={location}
            hasBorder={false}
            hasMargin={false}
          />
          {isPromoted && <Styles.Promoted>Featured</Styles.Promoted>}
          {parentTitle && <Styles.Parent>{parentTitle}</Styles.Parent>}
        </Styles.EventContent>
      </Column>
      {imageLarge && (
        <Column
          small="full"
          medium="one-third"
          large="one-third"
          hasPadding={false}
          classes="event-list__image-container"
        >
          <ResponsiveImage
            imageSmall={imageSmall}
            imageLarge={imageLarge}
            imageAltText={imageAltText}
            smallWidth="400"
            largeWidth="720"
            ratio="auto"
            objectFit="cover"
          />
        </Column>
      )}
    </Row>
  </Styles.Container>
);

export default EventLink;
