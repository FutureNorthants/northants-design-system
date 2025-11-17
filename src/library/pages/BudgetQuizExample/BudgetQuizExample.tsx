import React, { useEffect, useState } from 'react';
import * as PageStructures from './../../structure/PageStructures';
import Heading from './../../components/Heading/Heading';
import BudgetSlider from '../../components/BudgetSlider/BudgetSlider';
import { BudgetSliderProps } from '../../components/BudgetSlider/BudgetSlider.types';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import BudgetQuiz from '../../slices/BudgetQuiz/BudgetQuiz';
import { ExampleBudgetQuizProps } from '../../slices/BudgetQuiz/BudgetQuiz.storydata';
import Button from '../../components/Button/Button';

export interface BudgetQuizPageExampleProps {}

export const BudgetQuizPageExample: React.FunctionComponent<BudgetQuizPageExampleProps> = () => {
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
          <BudgetQuiz {...ExampleBudgetQuizProps} />
          <Heading text="Register your interest" level={2} />
          <p>Please register your interest if you would like to know more about budget consultations.</p>
          <Button url="#">Register your interest</Button>
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
