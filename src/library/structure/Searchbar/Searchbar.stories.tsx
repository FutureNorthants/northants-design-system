
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Searchbar from "./Searchbar";
import { SearchbarProps } from "./Searchbar.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/structure/Searchbar',
    component: Searchbar
};

const Template: Story<SearchbarProps> = (args) => <SBPadding><Searchbar {...args} /></SBPadding>;

export const ExampleSearchbarDefaultNorth = Template.bind({});    
ExampleSearchbarDefaultNorth.parameters = {
    backgrounds: { default: 'north' }
};


export const ExampleSearchbarDefaultWest = Template.bind({});    
ExampleSearchbarDefaultWest.parameters = {
    backgrounds: { default: 'west' }
};


export const ExampleSearchbarWhite = Template.bind({});    
ExampleSearchbarWhite.args = {
    isLight: true
};

export const ExampleSearchbarWhiteDifferentPlaceholder = Template.bind({}); 
ExampleSearchbarWhiteDifferentPlaceholder.args = {
    placeholder: 'Different placeholder text'
};


export const ExampleSearchbarLarge = Template.bind({});    
ExampleSearchbarWhite.args = {
    isLarger: true
};



export const ExampleSearchPage = Template.bind({});    
ExampleSearchPage.args = {
    isLight: true,
    isLarge: true
};