
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/Accordion',
  component: Accordion
};

const Template: Story<AccordionProps> = (args) => <SBPadding><Accordion {...args} /></SBPadding>;

export const ExampleMultipleAccordion = Template.bind({});    
ExampleMultipleAccordion.args = {
  sections: [
    {
      title: "Tortor Magna",
      summary: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      content: <p><strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>,
      isExpanded: true
    },
    {
      title: "Fusce Risus Malesuada",
      content: <p>Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>
    }
  ]
};

export const ExampleSingleAccordion = Template.bind({});    
ExampleSingleAccordion.args = {
  sections: [
    {
      title: "Tortor Magna",
      summary: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      content: <p>Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>
    }
  ]
};

export const ExampleLongTitleAccordion = Template.bind({});    
ExampleLongTitleAccordion.args = {
  sections: [
    {
      title: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      summary: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      content: <p><h2>Cras justo odio</h2>, dapibus ac facilisis in, <strong>egestas eget quam.</strong> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.</p>
    },
    {
      title: "Tortor Magna",
      content: <p>Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>
    },
    {
      title: "Fusce Risus Malesuada",
      content: <p>Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>
    }
  ]
};