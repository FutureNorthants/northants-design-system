import React from 'react';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

import type { Meta, StoryObj } from '@storybook/react';

import TableTest from './TableTest';

const meta = {
  title: 'Library/Components/Table Test',
  component: TableTest,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof TableTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTableTest: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <TableTest {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
