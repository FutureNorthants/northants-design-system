import React from 'react';
import { InquestScheduleProps } from './InquestSchedule.types';
import * as Styles from './InquestSchedule.styles';
import Heading from '../../components/Heading/Heading';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

/**
 * A table displaying a schedule of inquests
 */
const InquestSchedule: React.FunctionComponent<InquestScheduleProps> = ({ caseAppointments, title, error = false }) => {
  const inquestDayGrouped = caseAppointments.reduce((acc, inquest) => {
    const inquestDate = new Date(inquest.startDateTime);
    const inquestISODay = inquestDate.toISOString().substring(0, 10);
    if (!acc[inquestISODay]) {
      acc[inquestISODay] = [];
    }
    acc[inquestISODay].push(inquest);
    return acc;
  }, {});

  const formatDate = (inquestDay: Date) => {
    return inquestDay
      .toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(',', '');
  };

  const formatTime = (inquestDate: Date) => {
    return inquestDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Styles.Container data-testid="InquestSchedule">
      <Heading level={2} text={title} />
      {Object.keys(inquestDayGrouped).map((day) => {
        const inquestDayDate = new Date(day);
        return (
          <div key={day}>
            <Heading level={3} text={formatDate(inquestDayDate)} />
            <Row>
              {inquestDayGrouped[day]
                .sort((a, b) => {
                  return new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime();
                })
                .map((inquest, key) => {
                  const startDateTime = new Date(inquest.startDateTime);
                  const timeOfDeath = new Date(inquest.dateTimeOfDeath);
                  return (
                    <Column small="full" medium="full" large="full" key={key}>
                      <Styles.InquestContainer>
                        <Styles.InquestTime>
                          <strong>{formatTime(startDateTime)}</strong>
                        </Styles.InquestTime>
                        <Styles.InquestDetails>
                          {inquest.fullName}.
                          <br />
                          Died {formatDate(timeOfDeath)} at {inquest.placeOfDeath}. Aged {inquest.age} years.
                          <br />
                          Court location: {inquest.courtroomFullAddress}.
                          <br />
                          Coroner: {inquest.coroner}.
                        </Styles.InquestDetails>
                      </Styles.InquestContainer>
                    </Column>
                  );
                })}
            </Row>
          </div>
        );
      })}

      {caseAppointments.length === 0 && (
        <div>
          <p>We can't find any results at the moment.</p>
          {error ? (
            <p> The information is currently unavailable.</p>
          ) : (
            <p>There are no inquests scheduled for next month.</p>
          )}
        </div>
      )}
    </Styles.Container>
  );
};

export default InquestSchedule;
