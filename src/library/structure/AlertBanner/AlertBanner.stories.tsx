
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import AlertBanner from "./AlertBanner";
import { AlertBannerProps } from "./AlertBanner.types";

export default {
    title: "library/Structure/Alert Banner"
};

const childrenMessage = <p>Coronavirus | National lockdown: stay at home. <a href="/">Learn what this means for residents and workers here</a></p>

const Template: Story<AlertBannerProps> = (args) => <><AlertBanner {...args} /><br/><br/><p>Once this unique alert has been hidden it will not be showed again on this device.</p></>;


export const AlertBannerExampleAlert = Template.bind({});    
AlertBannerExampleAlert.args = {
    title: "Coronavirus (COVID-19)",
    uid: "5",
    children: childrenMessage
};

export const AlertBannerExampleWarning = Template.bind({});    
AlertBannerExampleWarning.args = {
    title: "Warning message",
    uid: "6",
    alertType: "warning",
    children: childrenMessage
};

export const AlertBannerExamplePositive = Template.bind({});    
AlertBannerExamplePositive.args = {
    title: "Positive message",
    uid: "7",
    alertType: "positive",
    children: childrenMessage
};

export const AlertBannerExampleBlack = Template.bind({});    
AlertBannerExampleBlack.args = {
    title: "Something terrible has happened",
    uid: "4",
    alertType: "black",
    children: childrenMessage
};
