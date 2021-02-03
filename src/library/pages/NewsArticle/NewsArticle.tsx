
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import Button from "../../components/Button/Button";
import NewsArticleDate from "../../structure/NewsArticleDate/NewsArticleDate";
import NewsArticleImage from "../../structure/NewsArticleImage/NewsArticleImage";
import NewsArticleOldBanner from "../../structure/NewsArticleOldBanner/NewsArticleOldBanner";

export interface NewsArticleProps {
  withImage?: string;
  imagePlaceholder?: string;
  isOld?: boolean;
}


export const NewsArticle: React.FC<NewsArticleProps> = ({ withImage, imagePlaceholder, isOld = false }) => (
    <>
  <PageStructures.Header />
  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        {isOld &&
          <NewsArticleOldBanner />
        }
        <Heading level={1} text="Northamptonshire pupils eligible for free school meals will get support in February half term" />
        <Button primary={false} text="Schools &amp; education" url="#" />
        <NewsArticleDate text="15 January 2021" />

        {withImage && <NewsArticleImage image1440x810={withImage} image144x81={imagePlaceholder} />}

        <p><strong>Pupils who are eligible for Free School Meals will receive support from Northamptonshire County Council during the February Half Term.</strong></p>
        <p>As stated in December, prior to the Christmas break, the council will use some of the funding it has received from the government’s COVID Winter Grant Scheme to offer help.</p>

        <p>In Northamptonshire £750,000 from the grant is being used to provide shopping vouchers for families with children who are eligible for Free School Meals with vouchers being distributed to the families by their schools.</p>

        <p>Cllr Fiona Baker, county council cabinet member for Children, Families and Education, said:</p>
        <BlockQuote quote="<p>“I’m delighted that we’re able to continue this support for the families and pupils who are in most need of our help.</p>

        <p>“Many have talked about being right in the eye of the storm with regard to the Covid pandemic so it’s important that we can offer this lifeline to those families and children who may be facing hardship.</p>

        <p>“I’m very pleased that we have been allocated this money from the government as it will help make sure that we can continue to do everything we can to support people in the county through this pandemic.“</p>" />

        <p>The county council has been given £2,080,000 from the grant which aims to provide support for those households who are most in need with the cost of food, energy and water bills as well as other associated costs. It is primarily intended to support families with children, with 80% of the funding earmarked for these groups.</p>

        <p>The rest of the grant funding has been allocated to the Household Winter Support Scheme. This scheme builds on existing community resilience work to use a network of established partner organisations to distribute a one-time voucher of support to help those most in need. Individuals will not be able to for a voucher directly, instead partner organisations will be able to apply for vouchers on behalf of eligible households.</p>

        <p>The county council has also been allocated £464,280 to support the Clinically Extremely Vulnerable with any hardship they may be facing as a result of the need to take additional precautions, particularly during periods where the virus is more prevalent.</p>

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