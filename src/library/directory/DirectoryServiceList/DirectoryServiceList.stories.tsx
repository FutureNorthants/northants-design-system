import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryServiceList from './DirectoryServiceList';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleDirectoryCategories } from './DirectoryServiceList.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

const meta: Meta<typeof DirectoryServiceList> = {
  title: 'Library/Directory/Directory Service List',
  component: DirectoryServiceList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryServiceList>;

export const ExampleDirectoryServiceList: Story = {
  args: {
    services: [
      { ...ExampleService, ...{ id: 'abc123' } },
      {
        ...ExampleService,
        ...{ id: 'abc124', eligibilitys: [{ id: 1234, eligibility: '', minimum_age: 47, maximum_age: 60 }] },
      },
      {
        ...ExampleService,
        ...{ id: 'abc125', eligibilitys: [{ id: 1234, eligibility: '', minimum_age: 12, maximum_age: 37 }] },
      },
      {
        ...ExampleService,
        ...{ id: 'abc126', eligibilitys: [{ id: 1234, eligibility: '', minimum_age: 12, maximum_age: 38 }] },
      },
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
    // customTaxonomyFilters: ['facilities', 'language'],
    ageInMonths: true,
    hasDocuments: true,
    proximity: 4,
  },
  render: (args) => {
    const [categories, setCategories] = useState(ExampleDirectoryCategories);
    const [minimumAge, setMinimumAge] = useState(args.minimumAge);
    const [maximumAge, setMaximumAge] = useState(args.maximumAge);
    return (
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
    );
  },
};

export const DirectoryServiceNoPostcodeSearch: Story = {
  ...ExampleDirectoryServiceList,
  args: {
    services: [],
    totalResults: 0,
    categories: ExampleDirectoryCategories,
    pageNumber: 1,
    perPage: 5,
    directoryPath: '/directory/local-offer',
    shortListPath: '/directory/local-offer/short-list',
    // customTaxonomyFilters: ['facilities', 'language'],
    ageInMonths: true,
    hasDocuments: true,
    showPostcodeSearch: false,
  },
};

export const DirectoryServiceNoResults: Story = {
  ...ExampleDirectoryServiceList,
  args: {
    services: [],
    totalResults: 0,
    categories: ExampleDirectoryCategories,
    pageNumber: 1,
    perPage: 5,
    directoryPath: '/directory/local-offer',
    shortListPath: '/directory/local-offer/short-list',
    // customTaxonomyFilters: ['facilities', 'language'],
    ageInMonths: true,
    hasDocuments: true,
  },
};

export const DirectoryServiceError: Story = {
  ...ExampleDirectoryServiceList,
  args: {
    isError: true,
    services: [],
    totalResults: 0,
    categories: ExampleDirectoryCategories,
    pageNumber: 1,
    perPage: 5,
    directoryPath: '/directory/local-offer',
    shortListPath: '/directory/local-offer/short-list',
    // customTaxonomyFilters: ['facilities', 'language'],
    ageInMonths: true,
    hasDocuments: true,
  },
};
