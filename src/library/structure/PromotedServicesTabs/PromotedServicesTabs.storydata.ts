import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';

export const ExamplePromotedServicesData: PromotedServicesTabsProps = {
  tabs: [
    {
      title: 'Council tax',
      services: [
        {
          title: 'Council tax payments',
          url: '/first-service/first-sub-service',
        },
        {
          title: 'Reductions and discounts',
          url: '/first-service/first-sub-service',
        },
        {
          title: 'View your account online',
          url: '/first-service/second-sub-service',
        },
        {
          title: 'Change of address',
          url: '/first-service/second-sub-service',
        },
        {
          title: 'Valuation and banding',
          url: '/first-service/second-sub-service',
        },
        {
          title: 'All council tax services',
          url: '/first-service/second-sub-service',
        },
      ],
    },
    {
      title: 'Bins and recycling',
      services: [
        {
          title: 'Bin collection day',
          url: '/second-service/first-sub-service',
        },
        {
          title: 'Household waste recycling centres',
          url: '/second-service/second-sub-service',
        },
        {
          title: 'Bulky item collection',
          url: '/second-service/second-sub-service',
        },
      ],
    },
    {
      title: 'Housing',
      services: [
        {
          title: 'Housing register',
          url: '/third-service/first-sub-service',
        },
        {
          title: 'Affordable housing',
          url: '/third-service/second-sub-service',
        },
        {
          title: 'Homelessness',
          url: '/third-service/second-sub-service',
        },
      ],
    },
    {
      title: 'Planning',
      services: [
        {
          title: 'View and comment on a planning application',
          url: '/fourth-service/first-sub-service',
        },
        {
          title: 'Making a planning application',
          url: '/fourth-service/second-sub-service',
        },
        {
          title: 'Planning permission',
          url: '/fourth-service/second-sub-service',
        },
      ],
    },
  ],
};