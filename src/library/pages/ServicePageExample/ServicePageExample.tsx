import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import CallToAction from '../../slices/CallToAction/CallToAction';

export interface ServicePageExampleProps {

}

export const ServicePageExample: React.FC<ServicePageExampleProps> = ({  }) => (
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
        },
        {
            title: "Find your bin collection day",
            url: "#main"
        }
      ]}
    />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="A fourth level basic page" />
        <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
        <CallToAction label="Test CTA" url="/" />
        <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
        <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
       
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
