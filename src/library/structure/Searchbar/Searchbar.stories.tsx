
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Searchbar from "./Searchbar";
import { SearchbarProps } from "./Searchbar.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/structure/Searchbar',
    component: Searchbar,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const submitInfo = [{
    postTo: "/search",
    params: {
        type: "search"
    }
}]


const Template: Story<SearchbarProps> = (args) => <SBPadding><Searchbar {...args} /></SBPadding>;

export const ExampleSearchbarDefaultNorth = Template.bind({});    
ExampleSearchbarDefaultNorth.parameters = {
    backgrounds: { default: 'north' }
};
ExampleSearchbarDefaultNorth.args = {
    submitInfo
}

export const ExampleSearchbarDefaultWest = Template.bind({});    
ExampleSearchbarDefaultWest.parameters = {
    backgrounds: { default: 'west' }
};
ExampleSearchbarDefaultWest.args = {
    submitInfo
}


export const ExampleSearchbarWhiteBackground = Template.bind({});    
ExampleSearchbarWhiteBackground.args = {
    isLight: true,
    submitInfo
};


export const ExampleSearchPage = Template.bind({});    
ExampleSearchPage.args = {
    isLight: true,
    isLarge: true,
    submitInfo
};

export const ExampleSearchPageWithTerm = Template.bind({});    
ExampleSearchPageWithTerm.args = {
    isLight: true,
    isLarge: true,
    searchTerm: "council tax",
    submitInfo
};