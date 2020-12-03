module.exports = (componentName) => ({
  content: `
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";
import { SBPadding } from '../../.storybook/SBPadding';

export default {
    title: "${componentName}"
};

const Template: Story<${componentName}Props> = (args) => <SBPadding><${componentName} {...args} /></SBPadding>;

export const Example${componentName} = Template.bind({});    
Example${componentName}.args = {
  foo: "bar"
};

export const Example${componentName}2 = Template.bind({});    
Example${componentName}.args = {
  foo: "foo"
};
`,
  extension: `.stories.tsx`
});
