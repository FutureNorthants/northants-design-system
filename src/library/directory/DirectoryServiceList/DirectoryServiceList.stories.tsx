import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
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

const Template: StoryFn<DirectoryServiceListProps> = (args) => {
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
    { ...ExampleService, ...{ id: 'abc124', eligibilitys: [{ minimum_age: 47, maximum_age: 60 }] } },
    { ...ExampleService, ...{ id: 'abc125', eligibilitys: [{ minimum_age: 12, maximum_age: 37 }] } },
    { ...ExampleService, ...{ id: 'abc126', eligibilitys: [{ minimum_age: 12, maximum_age: 38 }] } },
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
  proximity: 4,
};

export const DirectoryServiceNoPostcodeSearch = Template.bind({});
DirectoryServiceNoPostcodeSearch.args = {
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
  showPostcodeSearch: false,
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
