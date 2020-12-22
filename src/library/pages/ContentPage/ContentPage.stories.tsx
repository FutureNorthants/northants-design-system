import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { ContentPage, ContentPageProps}  from "./ContentPage";

export default {
  title: 'Page Examples/Content Page',
  component: ContentPage,
} as Meta;

const Template: Story<ContentPageProps> = (args) => <ContentPage {...args} />;

export const ExampleContentPage = Template.bind({});    
