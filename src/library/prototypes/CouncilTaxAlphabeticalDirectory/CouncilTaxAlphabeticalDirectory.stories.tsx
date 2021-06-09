
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CouncilTaxAlphabeticalDirectory from "./CouncilTaxAlphabeticalDirectory";
import { CouncilTaxAlphabeticalDirectoryProps } from "./CouncilTaxAlphabeticalDirectory.types";
import { SBPadding } from '../../../../.storybook/SBPadding';


import {westData} from '../CouncilTaxParishPageExample/AlphabeticalDirectoryData';
import {correctedWestData} from './../CouncilTaxParishPageExample/parish-data-helper.js';

export default {
    title: 'Library/Prototypes/Council Tax Alphabetical Directory',
    component: CouncilTaxAlphabeticalDirectory
};

const Template: Story<CouncilTaxAlphabeticalDirectoryProps> = (args) => <SBPadding><CouncilTaxAlphabeticalDirectory {...args} /></SBPadding>;

export const ExampleCouncilTaxAlphabeticalDirectory = Template.bind({});    
ExampleCouncilTaxAlphabeticalDirectory.args = {
  data: correctedWestData(westData)
};
