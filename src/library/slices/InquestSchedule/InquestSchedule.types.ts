export interface InquestScheduleProps {
  /**
   * An array of Case Appointments
   */
  CaseAppointments: CaseAppointmentProps[];

  /**
   * The table title or caption
   */
  title: string;
}

export interface CaseAppointmentProps {
  FullName: string;
  Age: number;
  PlaceOfDeath?: string | null;
  DateTimeOfDeath: string;
  Coroner: string;
  CourtroomFullAddress: string;
  AppointmentType: string;
  StartDateTime: string;
}
