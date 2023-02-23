import React from 'react';
import { InquestScheduleProps } from './InquestSchedule.types';
import * as Styles from './InquestSchedule.styles';

/**
 * A table displaying a schedule of inquests
 */
const InquestSchedule: React.FunctionComponent<InquestScheduleProps> = ({ caseAppointments, title }) => (
  <Styles.Container data-testid="InquestSchedule">
    <div className="table-container">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place of death</th>
            <th>Date of death</th>
            <th>Name of coroner</th>
            <th>Location</th>
            <th>Date and time</th>
          </tr>
        </thead>
        <tbody>
          {caseAppointments.map((item, index) => (
            <tr key={index}>
              <td>{item.fullName}</td>
              <td>{item.age}</td>
              <td>{item.placeOfDeath}</td>
              <td>{new Date(item.dateTimeOfDeath).toLocaleString('en-GB')}</td>
              <td>{item.coroner}</td>
              <td>{item.courtroomFullAddress}</td>
              <td>{new Date(item.startDateTime).toLocaleString('en-GB')}</td>
            </tr>
          ))}
          {caseAppointments.length === 0 && (
            <tr>
              <td colSpan={7}>
                <p>We can't find any results at the moment.</p>
                <p>
                  This could either be because there are no inquests scheduled for next month or the system is currently
                  unavailable.
                </p>
                <p>Please try again later.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </Styles.Container>
);

export default InquestSchedule;
