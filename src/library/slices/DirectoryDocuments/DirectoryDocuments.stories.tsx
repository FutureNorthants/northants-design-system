import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryDocuments from './DirectoryDocuments';
import {
  ExampleDirectoryDocument,
  ExampleDirectoryLink,
} from '../../directory/DirectoryDocumentList/DirectoryDocumentList.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof DirectoryDocuments> = {
  title: 'Library/Slices/Directory Documents',
  component: DirectoryDocuments,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryDocuments>;

export const ExampleDirectoryDocuments: Story = {
  args: {
    documents: [ExampleDirectoryDocument, ExampleDirectoryLink],
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <DirectoryDocuments {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleDirectoryDocumentsCustomLabel: Story = {
  ...ExampleDirectoryDocuments,
  args: {
    documents: [ExampleDirectoryDocument, ExampleDirectoryLink],
    searchLabel: 'A custom search label',
  },
};

export const ExampleDirectoryDocumentsNoResults: Story = {
  ...ExampleDirectoryDocuments,
  args: {
    documents: [],
  },
};

export const ExampleDirectoryDocumentsWithError: Story = {
  ...ExampleDirectoryDocuments,
  args: {
    documents: [],
    isError: true,
  },
};

export const ExampleDirectoryDocumentsWithLoading: Story = {
  ...ExampleDirectoryDocuments,
  args: {
    documents: [],
    isLoading: true,
  },
};
