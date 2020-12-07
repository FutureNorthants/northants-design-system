import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import { hrefTo } from '@storybook/addon-links';

export interface SignpostPageExampleProps {

}

export const SignpostPageExample: React.FC<SignpostPageExampleProps> = ({  }) => (
  <>
    <PageStructures.Header />
    <PageStructures.Breadcrumbs 
      breadcrumbsArray={[
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Bin collection, recycling and waste",
            url: "/?path=/story/page-examples-service-landing-page-examples--bin-collection-example"
        }
      ]}
    />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Find your bin collection day" />
        <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
       
        <PageStructures.SignpostLinks 
          SignpostLinksArray={[
            {
                areaName: "Corby",
                url: "https://www.corby.gov.uk/home/environmental-services/street-scene/household-waste-and-recycling"
            },
            {
                areaName: "East Northamptonshire",
                url: "https://www.east-northamptonshire.gov.uk/info/200084/recycling_rubbish_and_waste"
            },
            {
                areaName: "Kettering",
                url: "https://www.kettering.gov.uk/info/20012/recycling_rubbish_and_waste"
            },
            {
                areaName: "Wellingborough",
                url: "http://www.wellingborough.gov.uk/site/scripts/home_info.php?homepageID=77"
            }
          ]}
        />
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer 
      footerLinksArray={[
        {
          title: "About",
          url: "/"
        },
        {
          title: "Accessibility",
          url: "/"
        },
        {
          title: "Cookies",
          url: "/"
        },
        {
          title: "Contact us",
          url: "/"
        },
        {
          title: "Jobs",
          url: "/"
        },
        {
          title: "Newsletter",
          url: "/"
        }
      ]}
    />
  </>
);
