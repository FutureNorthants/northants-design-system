
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NewsArticleFilterAccordion from "./NewsArticleFilterAccordion";
import { NewsArticleFilterAccordionProps } from "./NewsArticleFilterAccordion.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/News Article Filter Accordion',
    component: NewsArticleFilterAccordion,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<NewsArticleFilterAccordionProps> = (args) => <SBPadding><NewsArticleFilterAccordion {...args} /></SBPadding>;

export const ExampleNewsArticleFilterAccordion = Template.bind({});    
ExampleNewsArticleFilterAccordion.args = {
  sections: [
    {
      title: "Search articles",
      content: <p>hello</p>,
      isExpanded: true
    },
    {
      title: "Services",
      content: <p>hello</p>,
    },
    {
      title: "Type of article",
      content: <p>hello</p>,
    }
  ]
};

