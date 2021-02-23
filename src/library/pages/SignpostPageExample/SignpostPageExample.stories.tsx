import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SignpostPageExample, SignpostPageExampleProps } from './SignpostPageExample';

export default {
  title: 'Page Examples/Signpost Page Examples',
  component: SignpostPageExample,
} as Meta;

const Template: Story<SignpostPageExampleProps> = (args) => <SignpostPageExample {...args} />;

export const FindYourBinCollectionDayNorthExample = Template.bind({});
FindYourBinCollectionDayNorthExample.args ={
  signpostLinksArrayExample: [
    {
        sovereignCode: 1,
        areaName: "Corby",
        url: "https://www.corby.gov.uk/home/environmental-services/street-scene/household-waste-and-recycling"
    },
    {
        sovereignCode: 3,
        areaName: "East Northamptonshire",
        url: "https://www.east-northamptonshire.gov.uk/info/200084/recycling_rubbish_and_waste"
    },
    {
        sovereignCode: 4,
        areaName: "Kettering",
        url: "https://www.kettering.gov.uk/info/20012/recycling_rubbish_and_waste"
    },
    {
        sovereignCode: 7,
        areaName: "Wellingborough",
        url: "http://www.wellingborough.gov.uk/site/scripts/home_info.php?homepageID=77"
    }
  ]
}

export const FindYourBinCollectionDayWestExample = Template.bind({});
FindYourBinCollectionDayWestExample.args = { signpostLinksArrayExample: [
    {
        sovereignCode: 2,
        areaName: "Daventry",
        url: "https://www.daventrydc.gov.uk/"
    },
    {
        sovereignCode: 5,
        areaName: "Northampton",
        url: "https://www.northampton.gov.uk/"
    },
    {
        sovereignCode: 6,
        areaName: "South Northamptonshire",
        url: "https://www.southnorthants.gov.uk/"
    }
  ]
}

export const FindYourBinCollectionDaySingleExample = Template.bind({});
FindYourBinCollectionDaySingleExample.args = { signpostLinksArrayExample: [
    {
        sovereignCode: 2,
        areaName: "Northamptonshire County Council",
        cta_text: "Find your bin collection day",
        url: "https://www.northamptonshire.gov.uk/"
    }
  ]
}