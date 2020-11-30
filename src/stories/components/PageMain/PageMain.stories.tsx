import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PageMain, PageMainProps } from './PageMain';

export default {
  title: 'Components/PageMain',
  component: PageMain
} as Meta;

const Template: Story<PageMainProps> = (args) => <PageMain {...args}>Children of the page container</PageMain>;

export const PageMainExample = Template.bind({});
PageMainExample.args = {
  classes: 'testclass',
};
