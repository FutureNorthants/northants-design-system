import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PromoBlock from "./PromoBlock";
import { PromoBlockProps } from "./PromoBlock.types";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import { promoData } from "./PromoBlock.storydata";

export default {
  title: "Library/Structure/Promo Block",
  component: PromoBlock,
  parameters: {
    status: {
      type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    promos: {
      table: { category: "Tiles" },
      control: {
        type: "object",
      },
    },
  },
};

/**
 * Very simple selection of stories for this structure just showing it handles varying numbers of promo tiles;
 * design decision has been that there will almost always be 3 each taking up a third of the screen width, 2 or
 * 1 should degrade to max 50% width. All full width on mobile.
 */

const Template: Story<PromoBlockProps> = (args) => (
  <MaxWidthContainer>
    <PromoBlock {...args} />
  </MaxWidthContainer>
);

export const Example3Promos = Template.bind({});
Example3Promos.args = {
  promos: promoData.promos.slice(0, 3),
};

export const Example2Promos = Template.bind({});
Example2Promos.args = {
  promos: promoData.promos.slice(0, 2),
};

export const Example1Promo = Template.bind({});
Example1Promo.args = {
  promos: promoData.promos.slice(0, 1),
};

export const ExampleNoPromos = Template.bind({});
ExampleNoPromos.args = {
  promos: [],
};
