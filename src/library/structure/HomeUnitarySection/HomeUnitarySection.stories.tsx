
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import HomeUnitarySection from "./HomeUnitarySection";
import { HomeUnitarySectionProps } from "./HomeUnitarySection.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Promo Banner"
};

const Template: Story<HomeUnitarySectionProps> = (args) => <SBPadding><HomeUnitarySection {...args}><p>We’re looking for people to come forward and help deliver the Covid-19 vaccination programme in North Northamptonshire.</p></HomeUnitarySection></SBPadding>;


export const HomeUnitarySectionExample = Template.bind({});    
HomeUnitarySectionExample.args = {
    title: "Volunteer at a local Covid-19 vaccine centre",
};

