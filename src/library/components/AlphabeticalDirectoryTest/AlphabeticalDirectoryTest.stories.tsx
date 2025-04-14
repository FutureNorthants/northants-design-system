import type { Meta, StoryObj } from '@storybook/react';

import AlphabeticalDirectoryTest from './AlphabeticalDirectoryTest';

const meta = {
  title: 'Library/Components/Alphabetical Directory Test',
  component: AlphabeticalDirectoryTest,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof AlphabeticalDirectoryTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAlphabeticalDirectoryTest: Story = {};
