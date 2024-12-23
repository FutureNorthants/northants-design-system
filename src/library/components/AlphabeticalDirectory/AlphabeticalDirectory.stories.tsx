import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AlphabeticalDirectory from './AlphabeticalDirectory';

const meta: Meta<typeof AlphabeticalDirectory> = {
  title: 'Library/Components/Alphabetical Directory',
  component: AlphabeticalDirectory,
  parameters: {
    status: {
      type: 'releaseCandidate', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlphabeticalDirectory>;

export const ExampleAlphabeticalDirectory: Story = {
  args: {
    data: [
      {
        group: 'a',
        children: [
          {
            title: 'Anteater',
            url: '#',
          },
          {
            title: 'Abyssinian',
            url: '#',
          },
          {
            title: 'Adelie Penguin',
            url: '#',
          },
          {
            title: 'Aardvark',
            url: '#',
          },
          {
            title: 'Anteater',
            url: '#',
          },
          {
            title: 'African Bullfrog',
            url: '#',
          },
          {
            title: 'Aardvark',
            url: '#',
          },
          {
            title: 'Anteater',
            url: '#',
          },
          {
            title: 'Aardvark',
            url: '#',
          },
          {
            title: 'Anteater',
            url: '#',
          },
          {
            title: 'Aardvark',
            url: '#',
          },
          {
            title: 'Anteater',
            url: '#',
          },
        ],
      },
      {
        group: 'z',
        children: [
          {
            title: 'Zebra',
            url: '#',
          },
        ],
      },
      {
        group: 'c',
        children: [
          {
            title: 'Cat',
            url: '#',
          },
          {
            title: 'Creepy crawlie',
            url: '#',
          },
        ],
      },
      {
        group: 'g',
        children: [
          {
            title: 'Guinea pig',
            url: '#',
          },
        ],
      },
    ],
  },
};
