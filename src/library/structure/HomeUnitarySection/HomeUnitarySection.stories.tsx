
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import HomeUnitarySection from "./HomeUnitarySection";
import { HomeUnitarySectionProps } from "./HomeUnitarySection.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Home unitary section",
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<HomeUnitarySectionProps> = (args) => <SBPadding><HomeUnitarySection></HomeUnitarySection></SBPadding>;


export const HomeUnitarySectionExample = Template.bind({});    

