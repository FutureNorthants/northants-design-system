import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import SectionLinksMobileContents from '../../structure/SectionLinksMobileContents/SectionLinksMobileContents';

export interface ServiceLandingPageExampleProps {

}

export const ServiceLandingPageExample: React.FC<ServiceLandingPageExampleProps> = ({  }) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.Breadcrumbs 
        breadcrumbsArray={[
          {
              title: "Home",
              url: "/iframe.html?id=page-examples-home-page--example-home&viewMode=story"
          }
        ]}
      />
      <PageStructures.PageMain>
        <HeadingWithIcon level={1} text="Bin collection, recycling and waste" icon="bins" />

        <SectionLinksMobileContents sectionLinksArray={[
          {
            title: "Your bins and rubbish",
            id: "your-bins-and-rubbish"
          },
          {
            title: "Street cleaning",
            id: "street-cleaning"
          },
          {
            title: "Business, commercial and clinical waste",
            id: "business-commercial-and-clinical-waste"
          }
        ]} />
        <PageStructures.SectionLinks 
          sectionTitle="Your bins and rubbish"
          sectionSlug="your-bins-and-rubbish"
          pageLinksArray={[ 
            {
              title: "Find your bin collection day", 
              summary: "Find your bin collection day using your post code and see your waste and recycling calendar.", 
              url: "/"
            },
            {
              title: "Arrange bulky item collection", 
              summary: "Arrange collection for large waste items, like sofas, fridges or washing machines.", 
              url: "/"
            },
            {
              title: "Report a missed collection", 
              summary: "Let us know if your bins have not been collected.", 
              url: "/"
            },
            {
              title: "Request a new or replacement bin", 
              summary: "Order a new bin, or let us know if your bin is damaged, lost or stolen.", 
              url: "/"
            },
            {
              title: "Find a household waste recycling centre", 
              summary: "Find your nearest recycling centre, it’s opening times and charges for non-household waste.", 
              url: "/"
            },
            {
              title: "What to recycle and where?", 
              summary: "Find out how waste and recycling colelction works in your local area and what goes in each bin.", 
              url: "/"
            }
          ]}
        />
        <PageStructures.SectionLinks 
          sectionTitle="Street cleaning"
          sectionSlug="street-cleaning"
          pageLinksArray={[ 
            {
              title: "Report fly-tipping", 
              summary: "Tell us about illegal waste dumping in your local area, or around Nothamptonshire.", 
              url: "/"
            },
            {
              title: "Report a litter or street cleaning problem", 
              summary: "Let us know about litter, graffiti or street cleaning problems.", 
              url: "/"
            }
          ]}
        />
        <PageStructures.SectionLinks 
          sectionTitle="Business, commercial and clinical waste"
          sectionSlug="business-commercial-and-clinical-waste"
          pageLinksArray={[ 
            {
              title: "Dispose of business or commercial waste", 
              summary: "Get advice about storing and disposing of business waste.", 
              url: "/"
            },
            {
              title: "Arrange clinical waste collections", 
              summary: "We provide a free of charge collection of clinical waste from domestic properties", 
              url: "/"
            },
            {
              title: "Dispose of hazardous waste", 
              summary: "How to dispose of invasive plants, asbestos, plasterboard, chemicals and other hazardous waste.", 
              url: "/"
            },
            {
              title: "Apply for a waste e-permit", 
              summary: "If you use a car towing a trailer or a commercial-type vehicle to access our waste recycling centres you will need an e-permit.", 
              url: "/"
            },
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


export const ServiceLandingPageExampleOneSection: React.FC<ServiceLandingPageExampleProps> = ({  }) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.Breadcrumbs 
        breadcrumbsArray={[
          {
              title: "Home",
              url: "/iframe.html?id=page-examples-home-page--example-home&viewMode=story"
          }
        ]}
      />
      <PageStructures.PageMain>
        <HeadingWithIcon level={1} text="Bin collection, recycling and waste" icon="bins" />
        <p>Text and slices for the landing page go here.</p>
        <PageStructures.SectionLinks 
          displayTitle={false}
          sectionTitle="Your bins and rubbish"
          sectionSlug="your-bins-and-rubbish"
          pageLinksArray={[ 
            {
              title: "Find your bin collection day", 
              summary: "Find your bin collection day using your post code and see your waste and recycling calendar.", 
              url: "/"
            },
            {
              title: "Arrange bulky item collection", 
              summary: "Arrange collection for large waste items, like sofas, fridges or washing machines.", 
              url: "/"
            },
            {
              title: "Report a missed collection", 
              summary: "Let us know if your bins have not been collected.", 
              url: "/"
            },
            {
              title: "Request a new or replacement bin", 
              summary: "Order a new bin, or let us know if your bin is damaged, lost or stolen.", 
              url: "/"
            },
            {
              title: "Find a household waste recycling centre", 
              summary: "Find your nearest recycling centre, it’s opening times and charges for non-household waste.", 
              url: "/"
            },
            {
              title: "What to recycle and where?", 
              summary: "Find out how waste and recycling colelction works in your local area and what goes in each bin.", 
              url: "/"
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
