import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import CallToAction from '../../slices/CallToAction/CallToAction';
import WebChat from '../../slices/WebChat/WebChat';
import BackToTop from '../../components/BackToTop/BackToTop';

export interface ContactPageProps {}

const queues = [
  {
    title: 'Select an option',
    value: '',
  },
  {
    title: 'Council tax',
    value: 'council_tax',
  },
  {
    title: 'Benefits application',
    value: 'benefits',
  },
  {
    title: 'Road and highways faults',
    value: 'highways',
  },
];

export const ContactPage: React.FunctionComponent<ContactPageProps> = () => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <PageStructures.PageWithSidebarContainer>
          <PageStructures.PageMain>
            <Heading level={1} text="Contact us" />

            <PageStructures.Contents
              currentPath="/contact-details"
              contents={[
                { title: 'Top tasks', url: '/' },
                { title: 'Contact details', url: '/contact-details' },
              ]}
            />

            <Heading level={2} text="Contact details" />
            <Heading level={2} text="Household Support Fund" />
            <p>Please see the household support fund page for the latest details.</p>
            <Heading level={2} text="Contact us online" />
            <p>
              Complete our online form and your message will come straight through to us. This is the best way for us to
              understand what you need and how we can help.
            </p>
            <p>We'll get back to you within 5 working days.</p>
            <CallToAction
              url="https://northamptonshire-self.achieveservice.com/service/Contact_West_Northamptonshire_Council"
              text="Complete our enquiry form"
            />

            <Heading level={2} text="Use our live webchat" />
            <WebChat buttonText="Launch webchat" action="" queues={queues} />

            <Heading level={2} text="Call us" />
            <p>
              If you can't use our online form, call us on&nbsp;<a href="tel:03001267000">0300 126 7000</a>.
            </p>
            <p>Our lines are open:</p>
            <p>
              <strong>Monday to Friday</strong>, 9am to 5pm
            </p>
            <p>We are closed on bank holidays.</p>
          </PageStructures.PageMain>
          <PageStructures.PageSidebar>
            <PageStructures.SectionLinksSidebar
              Title="Pages in this section"
              Sections={[
                {
                  SectionTitle: 'Communicating with us',
                  SectionLinks: [
                    {
                      title: 'Appealing a decision',
                      url: '/',
                      isCurrent: false,
                    },
                    {
                      title: 'Contact us',
                      url: '/',
                      isCurrent: true,
                    },
                    {
                      title: 'Visiting us',
                      url: '/',
                    },
                    {
                      title: 'Comments, compliments and complaints',
                      url: '/',
                    },
                    {
                      title: 'Monthly drop-in sessions',
                      url: '/',
                    },
                    {
                      title: 'Communications',
                      url: '/',
                    },
                    {
                      title: 'West Northants Life',
                      url: '/',
                    },
                    {
                      title: 'Sign up to our e-newsletters',
                      url: '/',
                    },
                    {
                      title: 'Unacceptable or unreasonable customer communications and behaviour',
                      url: '/',
                    },
                  ],
                },
              ]}
            />
          </PageStructures.PageSidebar>
        </PageStructures.PageWithSidebarContainer>
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
    <BackToTop isActive={true} />
  </>
);
