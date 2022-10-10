export interface ServiceContactProps {
  name: string;
  title: string;
  phones: PhoneProps[];
}

export interface PhoneProps {
  id: number;
  number: string;
}
