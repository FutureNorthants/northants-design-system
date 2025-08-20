export interface InquestScheduleProps {
  /**
   * An array of Case Appointments
   */
  caseAppointments: CaseAppointmentProps[];

  /**
   * The table title or caption
   */
  title: string;

  /**
   * Was there an error fetching results
   */
  error?: boolean;
}

export interface CaseAppointmentProps {
  fullName: string;
  age: number;
  placeOfDeath?: string | null;
  dateTimeOfDeath: string;
  coroner: string;
  courtroomFullAddress: string;
  appointmentType: string;
  startDateTime: string;
  endDateTime?: string;
}

export enum CaseAppointmentType {
  Formal = 'formal',
  Hearing = 'inquest hearing',
  Opening = 'opening',
  PreInquest = 'pre-inquest review',
  Writing = 'writing',
}
