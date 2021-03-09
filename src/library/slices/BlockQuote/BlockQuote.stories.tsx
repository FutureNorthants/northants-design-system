
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import BlockQuote from "./BlockQuote";
import { BlockQuoteProps } from "./BlockQuote.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/Blockquote',
  component: BlockQuote
};

const Template: Story<BlockQuoteProps> = (args) => <SBPadding><BlockQuote {...args} /></SBPadding>;

export const ExampleBlockQuote = Template.bind({});    
ExampleBlockQuote.args = {
  quote: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  citation: "Porta Commodo"
};

export const ExampleLargeBlockQuote = Template.bind({});    
ExampleLargeBlockQuote.args = {
  quote: <><p>Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.</p>

  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p></>,
  citation: "Quam Amet" 
};