import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Autocomplete from './Autocomplete';
import { AutocompleteProps } from './Autocomplete.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { action } from 'storybook/actions';
import {
  EmptyWithHiddenLabelData,
  NoMatchingSuggestionEnlargedWithHiddenLabelData,
  DisplayingSuggestionsData,
  DisplayingSuggestionsLargeData,
  SuggestionChosenData,
} from './Autocomplete.storydata';

export default {
  title: 'Library/Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    id: {
      table: { category: 'Component' },
    },
    name: {
      table: { category: 'Input control' },
    },
    labelText: {
      table: { category: 'Input control' },
    },
    hasHiddenLabel: {
      table: { category: 'Input control' },
    },
    value: {
      table: { category: 'Input control' },
    },
    size: {
      control: {
        type: 'number',
        min: 1,
        max: 255,
        step: 1,
      },
      table: { category: 'Input control' },
    },
    placeholder: {
      table: { category: 'Input control' },
    },
    isLarge: {
      table: { category: 'Input control' },
    },
    hasAdjacentButton: {
      table: { category: 'Input control' },
    },
    suggestions: {
      table: { category: 'Suggestions' },
    },
    showSuggestions: {
      table: { category: 'Suggestions' },
    },
    minimumMatchLength: {
      control: {
        type: 'number',
        min: 1,
        max: 16,
        step: 1,
      },
      table: { category: 'Suggestions' },
    },
    maximumMatchesShown: {
      control: {
        type: 'number',
        min: 1,
        max: 200,
        step: 1,
      },
      table: { category: 'Suggestions' },
    },
    isErrored: {
      table: { category: 'Input control' },
    },
    errorText: {
      table: { category: 'Input control' },
    },
    onChange: {
      control: null,
      table: { category: 'Events' },
    },
    onSelect: {
      control: null,
      table: { category: 'Events' },
    },
  },
};

function onSelectStub(selectedValue: string): void {
  action('selected')(selectedValue);
}

function onChangeStub(inputValue: string): void {
  action('changed')(inputValue);
}

const CommonEventStubs = {
  onSelect: onSelectStub,
  onChange: onChangeStub,
};

const Template: StoryFn<AutocompleteProps> = (args) => (
  <SBPadding>
    <div style={{ width: '750px' }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>
);

/**
 * Empty, i.e. default state of the Autocomplete component
 */
export const EmptyWithHiddenLabel = Template.bind({});
EmptyWithHiddenLabel.args = {
  ...CommonEventStubs,
  ...EmptyWithHiddenLabelData,
};

/**
 * Autocomplete component with some text entered that doesn't match any suggestion
 */
export const NoMatchingSuggestionEnlargedWithHiddenLabel = Template.bind({});
NoMatchingSuggestionEnlargedWithHiddenLabel.args = {
  ...CommonEventStubs,
  ...NoMatchingSuggestionEnlargedWithHiddenLabelData,
};

/**
 * Autocomplete component with some text entered that does match a suggestion,
 * with the list of suggestions shown.
 */
export const DisplayingSuggestions = Template.bind({});
DisplayingSuggestions.args = {
  ...CommonEventStubs,
  ...DisplayingSuggestionsData,
};

/**
 * Autocomplete component with some text entered that does match a suggestion,
 * with the list of suggestions shown, and isLarge mode on.
 */
export const DisplayingSuggestionsLarge = Template.bind({});
DisplayingSuggestionsLarge.args = {
  ...CommonEventStubs,
  ...DisplayingSuggestionsLargeData,
};

/**
 * Autocomplete component with some text entered that matches a suggestion,
 * and the suggestion was chosen.
 */
export const SuggestionChosen = Template.bind({});
SuggestionChosen.args = {
  ...CommonEventStubs,
  ...SuggestionChosenData,
};
