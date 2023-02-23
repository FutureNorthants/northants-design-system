export interface InquestScheduleProps {
  /**
   * An array of Case Appointments
   */
  caseAppointments: CaseAppointmentProps[];

  /**
   * The table title or caption
   */
  title: string;
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
}
