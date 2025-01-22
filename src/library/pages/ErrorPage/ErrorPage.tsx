import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from '../../slices/DownloadableFiles/DownloadableFiles';
import CallToAction from '../../slices/CallToAction/CallToAction';
import Accordion from '../../slices/Accordion/Accordion';
import WarningTextDisclaimer from '../../slices/WarningTextDisclaimer/WarningTextDisclaimer';

export interface ErrorPageProps {
  pageTitle: string;
  errorCode: number;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ pageTitle, errorCode }) => (
  <>
    <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text={pageTitle} />

        <p>If you entered a web address, check it is correct.</p>
        <p>
          You can <a href="/">see a list of council services on the homepage</a> or use the search box above to find the
          information you need.
        </p>
        <p>
          You can also <a href="#">learn more about this new unitary council website</a>.
        </p>
        <br />
        <pre>Error status code: {errorCode}</pre>
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
