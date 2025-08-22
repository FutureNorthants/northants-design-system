import React from 'react';
import { CaseAppointmentProps, CaseAppointmentType, InquestScheduleProps } from './InquestSchedule.types';
import * as Styles from './InquestSchedule.styles';
import Heading from '../../components/Heading/Heading';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import { AccordionSectionProps } from '../Accordion/Accordion.types';
import Accordion from '../Accordion/Accordion';
import SummaryList from '../../components/SummaryList/SummaryList';
import { formatDate, formatTime, formatDateTime } from '../../helpers/date-time-helpers';

/**
 * A table displaying a schedule of inquests
 */
const InquestSchedule: React.FunctionComponent<InquestScheduleProps> = ({ caseAppointments, title, error = false }) => {
  const hearings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Hearing);
  });
  const preInquest: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.PreInquest);
  });
  const openings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Opening);
  });
  const writings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Writing);
  });
  const formal: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Formal);
  });

  const groupHearingsByDay = (appointments: CaseAppointmentProps[]) => {
    return appointments.reduce((acc, inquest) => {
      const inquestDate = new Date(inquest.startDateTime);
      const inquestISODay = inquestDate.toISOString().substring(0, 10);
      if (!acc[inquestISODay]) {
        acc[inquestISODay] = [];
      }
      acc[inquestISODay].push(inquest);
      return acc;
    }, {});
  };

  const hearingDayGrouped = groupHearingsByDay(hearings);
  const preInquestDayGrouped = groupHearingsByDay(preInquest);
  const openingDayGrouped = groupHearingsByDay(openings);
  const writingDayGrouped = groupHearingsByDay(writings);
  const formalDayGrouped = groupHearingsByDay(formal);

  const transformToSections = (groupedData): AccordionSectionProps[] => {
    return Object.keys(groupedData).map((day) => {
      return {
        title: formatDate(day),
        content: (
          <Row>
            {groupedData[day]
              .sort((a, b) => {
                return new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime();
              })
              .map((inquest, key) => {
                const terms = [
                  {
                    term: 'Name',
                    detail: inquest.fullName,
                  },
                  {
                    term: 'Died',
                    detail:
                      formatDate(inquest.dateTimeOfDeath) +
                      ' at ' +
                      inquest.placeOfDeath +
                      '. Aged ' +
                      inquest.age +
                      ' years.',
                  },
                  {
                    term: 'Court location',
                    detail: inquest.courtroomFullAddress + '.',
                  },
                  {
                    term: 'Coroner',
                    detail: inquest.coroner + '.',
                  },
                ];
                if (inquest.endDateTime) {
                  terms.push({
                    term: 'End date',
                    detail: formatDateTime(inquest.endDateTime) + '.',
                  });
                }

                return (
                  <Column small="full" medium="full" large="full" key={key}>
                    <Styles.InquestContainer>
                      <Styles.InquestDetails>
                        <SummaryList terms={terms} hasBorders={false} heading={formatTime(inquest.startDateTime)} />
                      </Styles.InquestDetails>
                    </Styles.InquestContainer>
                  </Column>
                );
              })}
          </Row>
        ),
      };
    });
  };

  return (
    <Styles.Container data-testid="InquestSchedule">
      {Object.keys(hearingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text={title} />
          <Accordion sections={transformToSections(hearingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(openingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Inquest Openings" />
          <Accordion sections={transformToSections(openingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(preInquestDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Pre-inquest Review Hearings" />
          <Accordion sections={transformToSections(preInquestDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(writingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Inquests in Writing" />
          <Accordion sections={transformToSections(writingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(formalDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Formal Suspension Hearings" />
          <Accordion sections={transformToSections(formalDayGrouped)} />
        </Styles.GroupContainer>
      )}

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
