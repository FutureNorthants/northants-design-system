import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'Page Examples/Error Page',
  component: ErrorPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const ErrorPage404: Story = {
  args: {
    pageTitle: 'Page not found',
    errorCode: 404,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ErrorPage403: Story = {
  args: {
    pageTitle: 'This page is forbidden',
    errorCode: 403,
  },
  parameters: {
    pageLayout: 'page',
  },
};
export const ErrorPage401: Story = {
  args: {
    pageTitle: 'This page is unauthorized',
    errorCode: 401,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ErrorPage400: Story = {
  args: {
    pageTitle: 'Bad request',
    errorCode: 400,
  },
  parameters: {
    pageLayout: 'page',
  },
};
