import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { ErrorPage, ErrorPageProps }  from "./ErrorPage";

export default {
  title: 'Page Examples/Error Page',
  component: ErrorPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
} as Meta;

const Template: Story<ErrorPageProps> = (args) => <ErrorPage {...args} />;


export const ErrorPage404 = Template.bind({});    
ErrorPage404.args = {
  pageTitle: "Page not found",
  errorCode: 404
}

export const ErrorPage403 = Template.bind({});    
ErrorPage403.args = {
  pageTitle: "This page is forbidden",
  errorCode: 403
}
export const ErrorPage401 = Template.bind({});    
ErrorPage401.args = {
  pageTitle: "This page is unauthorized",
  errorCode: 401
}

export const ErrorPage400 = Template.bind({});    
ErrorPage400.args = {
  pageTitle: "Bad request",
  errorCode: 400
}