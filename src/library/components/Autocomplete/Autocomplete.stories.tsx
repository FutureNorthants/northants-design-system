
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Autocomplete from "./Autocomplete";
import { AutocompleteProps } from "./Autocomplete.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Autocomplete',
    component: Autocomplete,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<AutocompleteProps> = (args) => <SBPadding><Autocomplete {...args} /></SBPadding>;

const CommonArgs = {
  placeholder: 'Enter search text',
  suggestions: ['Apple','Orange','Lemon','Pear','Peach','Kiwi']
}

export const Empty = Template.bind({});    
Empty.args = {
  ...CommonArgs,
  name: 'Empty'
}

export const NoMatchingSuggestion = Template.bind({});    
NoMatchingSuggestion.args = {
  ...CommonArgs,
  name: 'Changed',
  value: 'Banana',
};

export const DisplayingSuggestions = Template.bind({});    
DisplayingSuggestions.args = {
  ...CommonArgs,
  name: 'Suggesting',
  value: 'Pea',
  showing_suggestions: true
};

export const SuggestionChosen = Template.bind({});    
SuggestionChosen.args = {
  ...CommonArgs,
  name: 'Suggested',
  value: 'Peach',
};
