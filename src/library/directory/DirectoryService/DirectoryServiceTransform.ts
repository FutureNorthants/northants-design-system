import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';
import {
  LanguagesProps,
  LocationProps,
  ServiceAreaProps,
  ServiceTaxonomy,
  TaxonomyToShow,
} from './DirectoryService.types';
import sanitizeHtml from 'sanitize-html';
import { groupBy } from '../../helpers/helpers';

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
      detail: sanitizeHtml(accreditations, {
        allowedTags: ['p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'li', 'ol'],
        allowedStyles: {},
      }),
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
      term: 'Locality',
      detail:
        '<ul>' +
        service_areas
          .map((service_area) => {
            return `<li>${service_area.service_area}</li>`;
          })
          .join('') +
        '</ul>',
    });
  }

  if (languages?.length > 0) {
    details.push({
      term: 'Additional languages',
      detail:
        '<ul>' +
        languages
          .map((language) => {
            return `<li>${language.language}</li>`;
          })
          .join('') +
        '</ul>',
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

export const transformTaxonomies = (service_taxonomys: ServiceTaxonomy[], taxonomiesToShow: TaxonomyToShow[] = []) => {
  const details: SummaryRowProps[] = [];
  const groupedTaxonomies = groupBy(service_taxonomys, 'vocabulary');

  taxonomiesToShow.forEach((taxonomy, taxonomyIndex) => {
    if (groupedTaxonomies.hasOwnProperty(taxonomy.vocabulary)) {
      if (groupedTaxonomies[taxonomy.vocabulary].length === 1) {
        details.push({
          term: taxonomy.label,
          detail: '<p>' + groupedTaxonomies[taxonomy.vocabulary][0].name + '</p>',
        });
      } else {
        details.push({
          term: taxonomy.label,
          detail:
            '<ul>' +
            groupedTaxonomies[taxonomy.vocabulary]
              .map((item) => {
                return `<li>${item.name}</li>`;
              })
              .join('') +
            '</ul>',
        });
      }
    }
  });

  return details;
};
