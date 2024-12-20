import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BlockQuote from './BlockQuote';

const meta: Meta<typeof BlockQuote> = {
  title: 'Library/Slices/Blockquote',
  component: BlockQuote,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlockQuote>;

export const ExampleBlockQuote: Story = {
  args: {
    quote: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    citation: 'Porta Commodo',
  },
};

export const ExampleLargeBlockQuote: Story = {
  args: {
    quote: (
      <>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit
          aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.
        </p>

        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam
          quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>
      </>
    ),
    citation: 'Quam Amet',
  },
};
