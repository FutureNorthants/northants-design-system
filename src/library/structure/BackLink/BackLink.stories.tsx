
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import BackLink from "./BackLink";
import { BackLinkProps } from "./BackLink.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/Back Link',
    component: BackLink,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<BackLinkProps> = (args) => <SBPadding><BackLink {...args} /></SBPadding>;

export const ExampleBackLink = Template.bind({});    
ExampleBackLink.args = {
  link: "/"
};

