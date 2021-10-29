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
      },
      actions: { argTypesRegex: '^on.*' }
    },
    argTypes: {
      minimumMatchLength: { 
        control: { 
          type: 'number', min: 1, max: 16, step: 1
        }
      }
    }
};

const Template: Story<AutocompleteProps> = (args) => <SBPadding><Autocomplete {...args} /></SBPadding>;

const CommonArgs = {
  placeholder: 'Enter search text',
  suggestions: ['Apple', 'Orange', 'Lemon', 'Pear', 'Peach', 'Kiwi'],
  minimumMatchLength: 2
}

/**
 * Empty, i.e. default state of the Autocomplete component
 */
export const Empty = Template.bind({});    
Empty.args = {
  ...CommonArgs,
  name: 'Empty'
}

/**
 * Autocomplete component with some text entered that doesn't match any suggestion
 */
export const NoMatchingSuggestion = Template.bind({});    
NoMatchingSuggestion.args = {
  ...CommonArgs,
  name: 'Changed',
  value: 'Banana',
};

/**
 * Autocomplete component with some text entered that does match a suggestion,
 * with the list of suggestions shown.
 */
export const DisplayingSuggestions = Template.bind({});    
DisplayingSuggestions.args = {
  ...CommonArgs,
  name: 'Suggesting',
  value: 'Pe',
  showSuggestions: true
};

/**
 * Autocomplete component with some text entered that matches a suggestion,
 * and the suggestion was chosen.
 */
export const SuggestionChosen = Template.bind({});    
SuggestionChosen.args = {
  ...CommonArgs,
  name: 'Suggested',
  value: 'Peach',
};
