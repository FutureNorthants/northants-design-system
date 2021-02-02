import React from "react";
import NewsArticleImage from "./NewsArticleImage";
import { NewsArticleImageProps } from "./NewsArticleImage.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/News Article Image',
    component: NewsArticleImage
};

const Template: Story<NewsArticleImageProps> = (args) => <SBPadding><MaxWidthContainer><NewsArticleImage {...args} /></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
  image1920x1080: "http://placehold.it/1920x1080",
  image192x108: "http://placehold.it/192x108",
};

export const ExampleWithAlt = Template.bind({});
ExampleWithAlt.args = {
  image1920x1080: "http://placehold.it/1920x1080",
  image192x108: "http://placehold.it/192x108",
  imageAltText: "This is the alt text"
};

export const ExampleWithCaption = Template.bind({});
ExampleWithCaption.args = {
  image1920x1080: "http://placehold.it/1920x1080",
  image192x108: "http://placehold.it/192x108",
  imageCaption: "This is the caption"
};
