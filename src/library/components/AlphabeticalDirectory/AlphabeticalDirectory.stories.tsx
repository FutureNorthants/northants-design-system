
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import AlphabeticalDirectory from "./AlphabeticalDirectory";
import { AlphabeticalDirectoryProps } from "./AlphabeticalDirectory.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Alphabetical Directory',
    component: AlphabeticalDirectory,
    parameters: {
      status: {
        type: 'releaseCandidate', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      } 
    },
};

const Template: Story<AlphabeticalDirectoryProps> = (args) => <SBPadding><AlphabeticalDirectory {...args} /></SBPadding>;

export const ExampleAlphabeticalDirectory = Template.bind({});    
ExampleAlphabeticalDirectory.args = {
  data: [
      {
        group: 'a',
        children: [
          {
            title: "Anteater",
            url: "#"
          },
          {
            title: "Abyssinian",
            url: "#"
          },
          {
            title: "Adelie Penguin",
            url: "#"
          },
          {
            title: "Aardvark",
            url: "#"
          },
          {
            title: "Anteater",
            url: "#"
          },
          {
            title: "African Bullfrog",
            url: "#"
          },
          {
            title: "Aardvark",
            url: "#"
          },
          {
            title: "Anteater",
            url: "#"
          },
          {
            title: "Aardvark",
            url: "#"
          },
          {
            title: "Anteater",
            url: "#"
          },
          {
            title: "Aardvark",
            url: "#"
          }, {
            title: "Anteater",
            url: "#"
          }
        ],
      },
      {
        group: 'z',
        children: [
          {
            title: "Zebra",
            url: "#"
          }
        ],
      },
      {
        group: 'c',
        children: [
          {
            title: "Cat",
            url: "#"
          },
          {
            title: "Creepy crawlie",
            url: "#"
          }
        ],
      },
      ,{
        group: 'g',
        children: [
          {
            title: "Guinea pig",
            url: "#"
          }
        ],
      },
    ]
};

