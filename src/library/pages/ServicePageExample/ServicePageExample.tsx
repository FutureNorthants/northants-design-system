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
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit libero ligula iaculis, ad tempor penatibus varius faucibus vulputate pharetra est ornare</p>
        <CallToAction text="Test CTA" url="/" />
        <p>ultricies auctor gravida dui sollicitudin praesent hac neque curae. Ridiculus iaculis enim bibendum ligula orci elementum rhoncus hac sodales tempus sapien eget, non velit ultrices posuere leo curabitur egestas facilisis erat nam. Litora mollis quisque nullam sollicitudin fringilla lectus risus porta quam magna curabitur non, orci odio class scelerisque metus in sapien hac pharetra torquent ornare massa, laoreet et penatibus dictum euismod morbi felis nostra senectus inceptos cum.</p>
        <p>Varius suscipit tortor diam sociosqu pellentesque fames dignissim aenean, fermentum ridiculus sodales phasellus urna blandit quis pulvinar vivamus, et convallis augue dapibus id sem morbi.</p> 
        <p>Vestibulum integer nisl litora potenti dui montes libero mi viverra eleifend, sociosqu himenaeos rhoncus imperdiet hendrerit in dapibus lobortis fringilla donec, metus ullamcorper curae neque fusce fermentum felis feugiat tempor.</p>
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>

        <Heading level={2} text="A 2nd level heading" />
        <Heading level={3} text="Sometimes 3rd level headings come straight after the title and sometimes not" />
        <p>Varius suscipit tortor diam sociosqu pellentesque fames dignissim aenean, fermentum ridiculus sodales phasellus urna blandit quis pulvinar vivamus, et convallis augue dapibus id sem morbi.</p> 
        <p>Vestibulum integer nisl litora potenti dui montes libero mi viverra eleifend, sociosqu himenaeos rhoncus imperdiet hendrerit in dapibus lobortis fringilla donec, metus ullamcorper curae neque fusce fermentum felis feugiat tempor.</p>
        <Heading level={3} text="Another 3rd level heading" />
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>

        <Heading level={2} text="Another 2nd level heading" />
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>
        <Heading level={3} text="Another 3rd level heading" />
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>
        <Heading level={4} text="A 4th level heading" />
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>
        <Heading level={3} text="Another 3rd level heading" />
        <Heading level={4} text="A 4th level heading straight after" />
        <p>Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.</p>
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
