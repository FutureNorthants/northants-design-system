import React from 'react';

import { InquestScheduleProps } from './InquestSchedule.types';
import * as Styles from './InquestSchedule.styles';

const InquestSchedule: React.FC<InquestScheduleProps> = ({ CaseAppointments, title }) => (
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
          {CaseAppointments.map((item, index) => (
            <tr key={index}>
              <td>{item.FullName}</td>
              <td>{item.Age}</td>
              <td>{item.PlaceOfDeath}</td>
              <td>{new Date(item.DateTimeOfDeath).toLocaleString('en-GB')}</td>
              <td>{item.Coroner}</td>
              <td>{item.CourtroomFullAddress}</td>
              <td>{new Date(item.StartDateTime).toLocaleString('en-GB')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Styles.Container>
);

export default InquestSchedule;
