import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleDirectoryCategories } from './DirectoryServiceList.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

export default {
  title: 'Library/Directory/Directory Service List',
  component: DirectoryServiceList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DirectoryServiceListProps> = (args) => {
  const [categories, setCategories] = useState(ExampleDirectoryCategories);
  const [minimumAge, setMinimumAge] = useState(args.minimumAge);
  const [maximumAge, setMaximumAge] = useState(args.maximumAge);
  return (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <DirectoryShortListProvider>
            <DirectoryServiceList
              {...args}
              categories={categories}
              setCategories={setCategories}
              minimumAge={minimumAge}
              setMinimumAge={setMinimumAge}
              maximumAge={maximumAge}
              setMaximumAge={setMaximumAge}
            />
          </DirectoryShortListProvider>
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExampleDirectoryServiceList = Template.bind({});
ExampleDirectoryServiceList.args = {
  services: [
    { ...ExampleService, ...{ id: 'abc123' } },
    { ...ExampleService, ...{ id: 'abc124' } },
    { ...ExampleService, ...{ id: 'abc125' } },
    { ...ExampleService, ...{ id: 'abc126' } },
    { ...ExampleService, ...{ id: 'abc127' } },
  ],
  totalResults: 156,
  search: 'council',
  setSearch: () => {},
  postcode: 'NN1 1ED',
  setPostcode: () => {},
  minimumAge: 60,
  setMinimumAge: () => {},
  maximumAge: 288,
  setMaximumAge: () => {},
  categories: ExampleDirectoryCategories,
  setCategories: () => {},
  pageNumber: 2,
  perPage: 5,
  directoryPath: '/directory/local-offer',
  shortListPath: '/directory/local-offer/short-list',
  customTaxonomyFilters: ['facilities', 'language'],
  ageInMonths: true,
  hasDocuments: true,
};

export const DirectoryServiceNoResults = Template.bind({});
DirectoryServiceNoResults.args = {
  services: [],
  totalResults: 0,
  categories: ExampleDirectoryCategories,
  pageNumber: 1,
  perPage: 5,
  directoryPath: '/directory/local-offer',
  shortListPath: '/directory/local-offer/short-list',
  customTaxonomyFilters: ['facilities', 'language'],
  ageInMonths: true,
  hasDocuments: true,
};

export const DirectoryServiceError = Template.bind({});
DirectoryServiceError.args = {
  isError: true,
  services: [],
  totalResults: 0,
  categories: ExampleDirectoryCategories,
  pageNumber: 1,
  perPage: 5,
  directoryPath: '/directory/local-offer',
  shortListPath: '/directory/local-offer/short-list',
  customTaxonomyFilters: ['facilities', 'language'],
  ageInMonths: true,
  hasDocuments: true,
};
