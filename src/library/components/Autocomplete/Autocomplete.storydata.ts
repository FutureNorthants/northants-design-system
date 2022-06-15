/* Example data used by Autocomplete stories and tests */

const CommonData = {
  placeholder: 'Enter search text',
  suggestions: [
    'Apple',
    'Orange',
    'Lemon',
    'Pear',
    'Peach',
    'Kiwifruit is a hairy little fruit from China and this expands nicely to fit on other lines',
    'Kiwi[fruit] $is a hairy little fruit from China and this expands nicely to fit on other lines',
    'Killer tomato',
    'Kinetic energy weapon',
    'Kid gloves',
    'Kiora',
    'Kidderminster',
  ],
  minimumMatchLength: 2,
};

export const EmptyWithHiddenLabelData = {
  ...CommonData,
  id: 'empty',
  name: 'Empty',
  labelText: 'This is a hidden label',
  hasHiddenLabel: true,
};

export const NoMatchingSuggestionEnlargedWithHiddenLabelData = {
  ...CommonData,
  id: 'changed',
  name: 'Changed',
  labelText: 'Hidden label',
  value: 'Banana',
  isLarge: true,
  hasHiddenLabel: true,
};

export const DisplayingSuggestionsData = {
  ...CommonData,
  id: 'suggesting',
  name: 'Suggesting',
  value: 'Pe',
  showSuggestions: true,
};

export const DisplayingSuggestionsLargeData = {
  ...CommonData,
  id: 'suggesting-large',
  name: 'Suggesting-large',
  value: 'Ki',
  showSuggestions: true,
  isLarge: true,
};

export const SuggestionChosenData = {
  ...CommonData,
  id: 'suggested',
  name: 'Suggested',
  value: 'Peach',
};
