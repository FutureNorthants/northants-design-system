
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CheckboxListFilter from "./CheckboxListFilter";
import { CheckboxListFilterProps } from "./CheckboxListFilter.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import { articleOptions } from "./CheckboxListFilterData"

import { newsArticleData } from '../../structure/NewsArticleList/NewsArticleData';

export default {
    title: 'Library/Components/Checkbox List Filter',
    component: CheckboxListFilter
};

const Template: Story<CheckboxListFilterProps> = (args) => <SBPadding><CheckboxListFilter {...args} /></SBPadding>;

export const ExampleCheckboxListFilter = Template.bind({});    
ExampleCheckboxListFilter.args = {
  options: articleOptions,
  checked: newsArticleData.articleType
};

