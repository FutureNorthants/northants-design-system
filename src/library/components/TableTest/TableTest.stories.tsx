import type { Meta, StoryObj } from '@storybook/react';

import TableTest from './TableTest';

const meta = {
  title: 'Library/Components/TableTest',
  component: TableTest,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof TableTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTableTest: Story = {};
