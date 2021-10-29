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
      name: {
        description: "Name attribute of the input control",
        table: { category: "Input control" }
      },
      labelText: {
        description: "Text content of the label for the control",
        table: { category: "Input control" }
      },
      value: {
        description: "Default value of the input control",
        table: { category: "Input control" }
      },
      placeholder: {
        description: "Placeholder within the input control",
        table: { category: "Input control" }
      },
      isErrored: {
        description: "Controls the input control's error state",
        table: { category: "Input control" }
      },
      errorText: {
        description: "Text to display if input control is in error state",
        table: { category: "Input control" }
      },
      minimumMatchLength: { 
        description: "The minimum number of characters that need to be typed before matches in the suggestions list are looked for",
        control: { 
          type: 'number', min: 1, max: 16, step: 1
        },
        table: { category: "Suggestions" }
      },
      suggestions: {
        description: "Array of suggestion strings",
        table: { category: "Suggestions" }
      },
      showSuggestions: {
        description: "Controls whether suggestions are shown immediately (if value set also)",
        table: { category: "Suggestions" }
      },
      onSelect: {
        description: "Callback function for when a suggestion is selected",
        control: null,
        table: { category: "Events" }
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
