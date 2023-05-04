export interface ServiceContactComponentProps {
  email?: string;
  website?: string;
  contacts: ServiceContactProps[];
}

export interface ServiceContactProps {
  id: number;
  name: string;
  title: string;
  phones: PhoneProps[];
}

export interface PhoneProps {
  id: number;
  number: string;
}
