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
}

export enum CaseAppointmentType {
  Hearing = 'AP Inquest Hearing',
  Opening = 'AP Inquest Opening',
  Writing = 'AP Inquest In Writing',
}
