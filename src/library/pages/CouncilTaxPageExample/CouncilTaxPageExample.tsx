import React from 'react';
import * as PageStructures from './../../structure/PageStructures';
import Heading from './../../components/Heading/Heading';

import PostCodeAddressSearch from './../../components/PostCodeAddressSearch/PostCodeAddressSearch';
import {PostCodeAddressProvider} from './../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import PostCodeAddressDropdown from './../../components/PostCodeAddressDropdown/PostCodeAddressDropdown';
import PostCodeAddressTable from './../../components/PostCodeAddressTable/PostCodeAddressTable';

export interface CouncilTaxPageExampleProps {
  version: string;
}


export const CouncilTaxPageExample: React.FC<CouncilTaxPageExampleProps> = ({version}) => {

  const renderVersionSwitch = (prototypeVersion) => {
    switch(prototypeVersion) {
      case 'b':
        return (
          <>
          {/* The context for where we are (postcode and results) lives in here so we can keep everything below separate */}
          <PostCodeAddressProvider>
  
            {/* The form where you enter the postcode and gather the results (if any) */}
            <PostCodeAddressSearch />
            <br />
             {/* When we have results - display it in a dropdown*/}
            <PostCodeAddressDropdown />
  
  
          </PostCodeAddressProvider>
          </>
        );
      break;  
      case 'c':
        return (
          <>
          {/* The context for where we are (postcode and results) lives in here so we can keep everything below separate */}
          <PostCodeAddressProvider>
  
            {/* The form where you enter the postcode and gather the results (if any) */}
            <PostCodeAddressSearch />
            <br />
             {/* When we have results - display it in a table  */}
              <PostCodeAddressTable />
  
  
          </PostCodeAddressProvider>
          </>);
      break;  
    }
  }


  return (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PhaseBanner />
      <PageStructures.Breadcrumbs 
        breadcrumbsArray={[
          {
              title: "Home",
              url: "/iframe.html?id=page-examples-council-tax-page-examples--version-b-example&viewMode=story"
          },
          {
              title: "Council tax",
              url: "#"
          },
          {
              title: "Payments, changes and your account",
              url: "#"
          }
        ]}
      />
      <PageStructures.PageWithSidebarContainer>
        <PageStructures.PageMain>
          <Heading level={1} text="Check council tax charge of a property" />
          <p>Council tax charges are based on your property's band and the area you live in.</p>

          <p>Your property is placed in one of 8 valuation bands by the Listing Officer at the Valuation Office Agency. New properties are allocated a band by determining the amount that the dwelling might reasonably expect to realise if it had been sold.</p>

          <p>If you think your council tax band is wrong, you can contact the Valuation Office (VOA) by email to <a href="mailto:ctonline@voa.gov.uk">ctonline@voa.gov.uk</a> to explain why you think it is wrong. Alternatively, call 03000 501 501.</p>
      
          {renderVersionSwitch(version)}

          <p>You can also <a href="#">download all council tax charges in West Northants</a> in CSV format</p>

        </PageStructures.PageMain>
        <PageStructures.PageSidebar>
          <PageStructures.SectionLinksSidebar
            Title="Pages in this section" 
            Sections={[
              {
                SectionTitle: "Payments, changes and your account",
                SectionLinks: [
                  {
                      title: "Check council tax charge of a property",
                      url: "/",
                      isCurrent: true
                  },
                  {
                      title: "Pay council tax",
                      url: "/"
                  },
                  {
                      title: "Council tax account",
                      url: "/"
                  },
                  {
                      title: "Moving home",
                      url: "/"
                  },
                  {
                      title: "Request council tax refund",
                      url: "/"
                  },
                  {
                      title: "What to do in the event of a death",
                      url: "/"
                  }
              ]
            }
          ]} />
        </PageStructures.PageSidebar>
      </PageStructures.PageWithSidebarContainer>
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
)
};
