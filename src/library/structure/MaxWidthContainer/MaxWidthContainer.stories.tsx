
import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { MaxWidthContainerProps } from "./MaxWidthContainer.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Max width Container',
    component: MaxWidthContainer,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<MaxWidthContainerProps> = (args) => <MaxWidthContainer {...args}>Children of the page container goes here</MaxWidthContainer>;

export const MaxWidthContainerExample = Template.bind({});
MaxWidthContainerExample.args = {
  classes: 'testclass',
};
