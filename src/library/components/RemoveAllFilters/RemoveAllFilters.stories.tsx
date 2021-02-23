
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import RemoveAllFilters from "./RemoveAllFilters";
import { RemoveAllFiltersProps } from "./RemoveAllFilters.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/RemoveAllFilters',
    component: RemoveAllFilters
};

const Template: Story<RemoveAllFiltersProps> = (args) => <SBPadding><RemoveAllFilters {...args} /></SBPadding>;

export const ExampleRemoveAllFilters = Template.bind({});    
