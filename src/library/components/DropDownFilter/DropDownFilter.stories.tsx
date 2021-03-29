
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import DropDownFilter from "./DropDownFilter";
import { DropDownFilterProps } from "./DropDownFilter.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

import {serviceOptions} from './DropDownFilterData';
import { newsArticleData } from '../../structure/NewsArticleList/NewsArticleData';

export default {
    title: 'Library/Components/Drop Down Filter',
    component: DropDownFilter
};

const Template: Story<DropDownFilterProps> = (args) => <SBPadding><DropDownFilter {...args} /></SBPadding>;

export const ExampleDropDownFilter = Template.bind({});    
ExampleDropDownFilter.args = {
  options: serviceOptions,
  selected: newsArticleData.services
};
