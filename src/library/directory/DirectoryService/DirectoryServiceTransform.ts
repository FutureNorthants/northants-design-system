import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';
import { LanguagesProps, LocationProps, ServiceAreaProps } from './DirectoryService.types';
import sanitizeHtml from 'sanitize-html';

export const transformService = (email: string, url: string, phone?: string): SummaryRowProps[] => {
  const service: SummaryRowProps[] = [];

  if (email) {
    service.push({
      term: 'Email',
      detail: `<a href="mailto:${email}">${email}</a>`,
    });
  }

  if (url) {
    service.push({
      term: 'Website',
      detail: `<a href="${url}">${url}</a>`,
    });
  }

  if (phone) {
    service.push({
      term: 'Phone',
      detail: phone
        .split(',')
        .flatMap((phone) => `<p><a href="tel:${phone}">${phone}</a></p>`)
        .join(''),
    });
  }

  return service;
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

export const transformDescriptionDetails = (
  accreditations: string,
  fees: string,
  service_areas: ServiceAreaProps[],
  languages: LanguagesProps[]
): SummaryRowProps[] => {
  const details: SummaryRowProps[] = [];

  if (accreditations) {
    details.push({
      term: 'Accreditations',
      detail: accreditations,
    });
  }

  if (fees) {
    details.push({
      term: 'Cost',
      detail: fees,
    });
  }

  if (service_areas?.length > 0) {
    details.push({
      term: 'Service Areas',
      detail: service_areas
        .map((service_area) => {
          return service_area.service_area;
        })
        .join(', '),
    });
  }

  if (languages?.length > 0) {
    details.push({
      term: 'Additional languages',
      detail: languages
        .map((language) => {
          return language.language;
        })
        .join(', '),
    });
  }

  return details;
};

export const transformSnippet = (description: string, extractLength: number = 190): string => {
  return (
    sanitizeHtml(description, {
      allowedTags: [],
      allowedAttributes: {},
    }).substr(0, extractLength) + String.fromCharCode(8230)
  );
};
