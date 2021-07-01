
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import AccessibleLinks from "./AccessibleLinks";
import { AccessibleLinksProps } from "./AccessibleLinks.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/Accessible links',
    component: AccessibleLinks,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<AccessibleLinksProps> = (args) => <SBPadding><AccessibleLinks {...args} /></SBPadding>;

export const ExampleAccessibleLinks = Template.bind({});
ExampleAccessibleLinks.args = {
      title: "Skip to Accessibility Statement",
      url: "/accessibility-statement",
      isExternal: true

}