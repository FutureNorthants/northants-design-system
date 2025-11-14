import React, { useState } from 'react';
import * as PageStructures from './../../structure/PageStructures';
import Heading from './../../components/Heading/Heading';
import BudgetSlider from '../../components/BudgetSlider/BudgetSlider';
import { BudgetSliderProps } from '../../components/BudgetSlider/BudgetSlider.types';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';

export interface BudgetQuizPageExampleProps {
  budgetServices: BudgetSliderProps[];
}

export const BudgetQuizPageExample: React.FunctionComponent<BudgetQuizPageExampleProps> = ({ budgetServices }) => {
  const [budgetValues, setBudgetValues] = useState([]);
  const handleValueChange = (index) => {};
  return (
    <>
      <PageStructures.CookieBanner
        title="Tell us whether you accept cookies"
        paragraph={
          <p>
            We use <a href="/your-council/cookies">cookies to collect information</a> about how you use this website. We
            use this information to make it work as well as possible and help make improvements.
          </p>
        }
        acceptButtonText="Accept all cookies"
        rejectButtonText="Reject all cookies"
        acceptCallback={() => {}}
      />
      <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />
      <PageStructures.MaxWidthContainer>
        <PageStructures.Breadcrumbs
          breadcrumbsArray={[
            {
              title: 'Home',
              url: '#',
            },
            {
              title: 'Council Budget',
              url: '#',
            },
          ]}
        />

        <PageStructures.PageMain>
          <Heading level={1} text="Set your budget" />
          <p>
            Each year the council must balance its budget so we can continue to deliver services. But with less funding
            and rising costs, the money we have to spend is going down. We’ve already restructured, made services more
            efficient, and raised more income, but we still need to save £xx million next year.
          </p>
          <p>
            In the budget published in February 2025, we assumed Council Tax would rise in line with government
            expectations. The rest of the gap will need to come from savings across council services. We’ll set out our
            detailed proposals in December 2025, and we’d like your views on how we should meet this challenge.
          </p>
          <Row>
            {budgetServices.map((budgetService, index) => (
              <Column small="full" medium="one-half" large="one-half" key={index}>
                <BudgetSlider {...budgetService} />
              </Column>
            ))}
          </Row>
        </PageStructures.PageMain>
      </PageStructures.MaxWidthContainer>
      <PageStructures.Footer
        footerLinksArray={[
          {
            title: 'Accessibility',
            url: '/',
          },
          {
            title: 'Contact us',
            url: '/',
          },
          {
            title: 'Copyright',
            url: '/',
          },

          {
            title: 'Payments',
            url: '/',
          },
          {
            title: 'Privacy',
            url: '/',
          },
          {
            title: 'Website feedback',
            url: '/',
          },
        ]}
      />
    </>
  );
};
