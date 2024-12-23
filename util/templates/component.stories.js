module.exports = (componentName) => ({
  content: `
import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import ${componentName} from "./${componentName}";

const meta: Meta<typeof ${componentName} = {
    title: 'Library/Components/${componentName}',
    component: ${componentName},
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Example${componentName}: Story = {     
  args: {
    foo: "bar"
  },
  render: (args) => <${componentName} {...args} />
};

export const AnotherExample${componentName}: Story = {
  ...Example${componentName},    
  args: {
    foo: "foo"
  }
};
`,
  extension: `.stories.tsx`,
});
