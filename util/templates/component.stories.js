module.exports = (componentName) => ({
  content: `
import React from "react";
import { StoryFn } from '@storybook/react';
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/${componentName}',
    component: ${componentName},
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: StoryFn<${componentName}Props> = (args) => <SBPadding><${componentName} {...args} /></SBPadding>;

export const Example${componentName} = Template.bind({});    
Example${componentName}.args = {
  foo: "bar"
};

export const AnotherExample${componentName} = Template.bind({});    
AnotherExample${componentName}.args = {
  foo: "foo"
};
`,
  extension: `.stories.tsx`,
});
