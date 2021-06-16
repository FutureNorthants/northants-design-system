
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CouncilTaxAlphabeticalDirectory from "./CouncilTaxAlphabeticalDirectory";
import { CouncilTaxAlphabeticalDirectoryProps } from "./CouncilTaxAlphabeticalDirectory.types";
import { SBPadding } from '../../../../.storybook/SBPadding';


import {westData} from './../../pages/CouncilTaxParishPageExample/AlphabeticalDirectoryData';
import {correctedWestData} from './../../pages/CouncilTaxParishPageExample/parish-data-helper.js';
import { addEmitHelpers } from "typescript";

export default {
    title: 'Library/Prototypes/Council Tax Alphabetical Directory',
    component: CouncilTaxAlphabeticalDirectory,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};



const Template: Story<CouncilTaxAlphabeticalDirectoryProps> = (args) => <SBPadding><CouncilTaxAlphabeticalDirectory {...args} /></SBPadding>;

export const ExampleCouncilTaxAlphabeticalDirectory = Template.bind({});    
ExampleCouncilTaxAlphabeticalDirectory.args = {
  data: correctedWestData(westData)
};

