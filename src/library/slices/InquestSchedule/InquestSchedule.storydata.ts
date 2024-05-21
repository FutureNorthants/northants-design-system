import { CaseAppointmentProps } from './InquestSchedule.types';

export const ExampleInquestScheduleData: CaseAppointmentProps = {
  fullName: 'A Name',
  age: 100,
  placeOfDeath: 'A location',
  dateTimeOfDeath: '2023-01-01T12:08:00',
  coroner: 'Coroner Name',
  courtroomFullAddress: 'The Guildhall, St. Giles Square, Northampton, NN1 1DE',
  appointmentType: 'AP Inquest Hearing',
  startDateTime: '2023-02-01T10:00:00',
};

export const ExampleInquestScheduleArray: CaseAppointmentProps[] = [
  {
    fullName: 'A Name',
    age: 85,
    placeOfDeath: 'A location',
    dateTimeOfDeath: '2023-01-01T12:08:00',
    coroner: 'Coroner Name',
    courtroomFullAddress: 'The Guildhall, St. Giles Square, Northampton, NN1 1DE',
    appointmentType: 'AP Inquest Hearing',
    startDateTime: '2023-02-01T10:00:00',
  },
  {
    fullName: 'A Name',
    age: 86,
    placeOfDeath: 'A location',
    dateTimeOfDeath: '2023-01-02T09:10:00',
    coroner: 'Coroner Name',
    courtroomFullAddress: 'The Guildhall, St. Giles Square, Northampton, NN1 1DE',
    appointmentType: 'AP Inquest Hearing',
    startDateTime: '2023-02-01T09:30:00',
  },
  {
    fullName: 'A Name',
    age: 87,
    placeOfDeath: 'A location',
    dateTimeOfDeath: '2023-01-03T14:30:00',
    coroner: 'Coroner Name',
    courtroomFullAddress: 'The Guildhall, St. Giles Square, Northampton, NN1 1DE',
    appointmentType: 'AP Inquest Hearing',
    startDateTime: '2023-02-02T09:00:00',
  },
  {
    fullName: 'A Name',
    age: 88,
    placeOfDeath: 'A location',
    dateTimeOfDeath: '2023-01-04T11:15:00',
    coroner: 'Coroner Name',
    courtroomFullAddress: 'The Guildhall, St. Giles Square, Northampton, NN1 1DE',
    appointmentType: 'AP Inquest Hearing',
    startDateTime: '2023-02-02T10:15:00',
  },
];
