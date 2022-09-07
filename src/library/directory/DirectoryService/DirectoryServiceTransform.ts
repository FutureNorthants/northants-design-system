import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';
import { DirectoryServiceProps, LocationProps } from './DirectoryService.types';

export const transformService = (email: string, url: string): SummaryRowProps[] => {
  return [
    {
      term: 'Email',
      detail: email,
    },
    {
      term: 'Website',
      detail: url,
    },
  ];
};

export const transformLocation = (location: LocationProps): SummaryRowProps[] => {
  const terms = [
    {
      term: 'Name',
      detail: location.name,
    },
    {
      term: 'Description',
      detail: location.description,
    },
  ];

  location.physical_addresses.forEach((address) => {
    terms.push({
      term: 'Address',
      detail: `${address.address_1}
                    <br />
                    ${address.city}
                    <br />
                    ${address.state_province}
                    <br />
                    ${address.postal_code}
                    <br />
                    ${address.country}`,
    });
  });

  return terms;
};
