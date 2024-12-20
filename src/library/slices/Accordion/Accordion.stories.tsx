import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import Divider from './../Divider/Divider';

const meta: Meta<typeof Accordion> = {
  title: 'Library/Slices/Accordion',
  component: Accordion,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const ExampleAccordion: Story = {
  args: {
    sections: [
      {
        title: 'Tortor Magna',
        content: (
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Fusce Risus Malesuada',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  },
};

export const AccordionWithReadMore: Story = {
  args: {
    withReadMore: true,
    sections: [
      {
        title: 'Tortor Magna',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Fusce Risus Malesuada',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  },
};

export const ExampleAccordionWithSummary: Story = {
  args: {
    sections: [
      {
        title: 'Tortor Magna',
        summary: 'Purus Tristique Sem Ornare Inceptos',
        content: (
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Fusce Risus Malesuada',
        summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  },
};

export const ExampleAccordionExpanded: Story = {
  args: {
    sections: [
      {
        title: 'Tortor Magna',
        summary: 'Purus Tristique Sem Ornare Inceptos',
        content: (
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
        isExpanded: true,
      },
      {
        title: 'Fusce Risus Malesuada',
        summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Tortor Magna',
        summary: 'Purus Tristique Sem Ornare Inceptos',
        content: (
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
        isExpanded: false,
      },
      {
        title: 'Fusce Risus Malesuada',
        summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
        isExpanded: true,
      },
    ],
  },
};

export const ExampleAccordionIsFilter: Story = {
  args: {
    sections: [
      {
        title: 'Tortor Magna',
        summary: 'Purus Tristique Sem Ornare Inceptos',
        content: (
          <>
            <p>
              <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. <Divider /> Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
              pharetra augue.
            </p>
          </>
        ),
        isExpanded: true,
      },
      {
        title: 'Fusce Risus Malesuada',
        summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
        isExpanded: true,
      },
    ],
    isFilter: true,
  },
};

export const ExampleSingleAccordion: Story = {
  args: {
    sections: [
      {
        title: 'Tortor Magna',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  },
};

export const ExampleLongTitleAccordion: Story = {
  args: {
    sections: [
      {
        title: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        content: (
          <p>
            <h2>Cras justo odio</h2>, dapibus ac facilisis in, <strong>egestas eget quam.</strong> Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas
            faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor
            fringilla. Etiam porta sem malesuada magna mollis euismod.
          </p>
        ),
      },
      {
        title: 'Tortor Magna',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Fusce Risus Malesuada',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  },
};
