import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import CallToAction from '../../slices/CallToAction/CallToAction';
import AlertBannerService from '../../structure/AlertBannerService/AlertBannerService';
import Image from '../../slices/Image/Image';

export interface ServicePageExampleProps {
  showServiceAlert: boolean;
}

export const ServicePageExample: React.FC<ServicePageExampleProps> = ({ showServiceAlert = false }) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PhaseBanner />
      <PageStructures.Breadcrumbs
        breadcrumbsArray={[
          {
            title: 'Home',
            url: '/iframe.html?id=page-examples-home-page--example-home&viewMode=story',
          },
          {
            title: 'Bin collection, recycling and waste',
            url: '/?path=/story/page-examples-service-landing-page-examples--bin-collection-example',
          },
          {
            title: 'Find your bin collection day',
            url: '#main',
          },
        ]}
      />
      <PageStructures.PageMain>
        {showServiceAlert && (
          <AlertBannerService title="Example Service Alert" alertType="alert">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit libero ligula iaculis, ad tempor penatibus varius
              faucibus vulputate pharetra est ornare.
            </p>
          </AlertBannerService>
        )}

        <Heading level={1} text="A fourth level basic page" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit libero ligula iaculis, ad tempor penatibus varius
          faucibus vulputate pharetra est ornare
        </p>
        <CallToAction text="Test CTA" url="/" />
        <p>
          ultricies auctor gravida dui sollicitudin praesent hac neque curae. Ridiculus iaculis enim bibendum ligula
          orci elementum rhoncus hac sodales tempus sapien eget, non velit ultrices posuere leo curabitur egestas
          facilisis erat nam. Litora mollis quisque nullam sollicitudin fringilla lectus risus porta quam magna
          curabitur non, orci odio class scelerisque metus in sapien hac pharetra torquent ornare massa, laoreet et
          penatibus dictum euismod morbi felis nostra senectus inceptos cum.
        </p>
        <Image
          imageLarge="https://via.placeholder.com/800x450?text=16+by+9+image"
          imageSmall="https://via.placeholder.com/400x225"
          imageAltText="An example image"
          ratio="16by9"
          caption="The caption describes the image"
        />
        <p>
          Varius suscipit tortor diam sociosqu pellentesque fames dignissim aenean, fermentum ridiculus sodales
          phasellus urna blandit quis pulvinar vivamus, et convallis augue dapibus id sem morbi.
        </p>
        <p>
          Vestibulum integer nisl litora potenti dui montes libero mi viverra eleifend, sociosqu himenaeos rhoncus
          imperdiet hendrerit in dapibus lobortis fringilla donec, metus ullamcorper curae neque fusce fermentum felis
          feugiat tempor.
        </p>
        <p>An unordered list:</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ul>
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>
        <p>
          <strong>Example</strong>, <em>using</em>,{' '}
          <em>
            <strong>all</strong>
          </em>
          , <sup>the</sup>, <abbr title="What you see is what you get">WYSIWYG</abbr> <sub>options</sub>
        </p>

        <Heading level={2} text="A 2nd level heading" />
        <Heading level={3} text="Sometimes 3rd level headings come straight after the title and sometimes not" />
        <p>
          Varius suscipit tortor diam sociosqu pellentesque fames dignissim aenean, fermentum ridiculus sodales
          phasellus urna blandit quis pulvinar vivamus, et convallis augue dapibus id sem morbi.
        </p>
        <p>An ordered list:</p>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ol>
        <p>
          Vestibulum integer nisl litora potenti dui montes libero mi viverra eleifend, sociosqu himenaeos rhoncus
          imperdiet hendrerit in dapibus lobortis fringilla donec, metus ullamcorper curae neque fusce fermentum felis
          feugiat tempor.
        </p>
        <Heading level={3} text="Another 3rd level heading" />
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>

        <Heading level={2} text="Another 2nd level heading" />
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>
        <Heading level={3} text="Another 3rd level heading" />
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>
        <Heading level={4} text="A 4th level heading" />
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>
        <Heading level={3} text="Another 3rd level heading" />
        <Heading level={4} text="A 4th level heading straight after" />
        <p>
          Porttitor tempus cursus convallis sed curae ridiculus suspendisse lectus, dapibus platea himenaeos nisl
          eleifend pellentesque risus luctus purus, cras condimentum mus pulvinar scelerisque senectus sapien.
        </p>
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer
      footerLinksArray={[
        {
          title: 'About',
          url: '/',
        },
        {
          title: 'Accessibility',
          url: '/',
        },
        {
          title: 'Cookies',
          url: '/',
        },
        {
          title: 'Contact us',
          url: '/',
        },
        {
          title: 'Jobs',
          url: '/',
        },
        {
          title: 'Newsletter',
          url: '/',
        },
      ]}
    />
  </>
);
