import React from 'react';
import { render } from '@testing-library/react';
import HomeUnitarySection from './HomeUnitarySection';
import { HomeUnitarySectionProps } from './HomeUnitarySection.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Home Unitary Section', () => {
  const props: HomeUnitarySectionProps = {
    title: 'Northamptonshire’s two new unitary councils',
    postcodeText: 'Not sure which you live in? Enter your postcode to find out',
    firstLine:
      'There are now two new unitary councils for Northamptonshire – North and West. They’ll help us provide better services and information for residents and businesses.',
    westText: 'Covering the local areas of Daventry, Northampton Borough and South Northamptonshire',
    northText: 'Covering the local areas of Corby, East Northamptonshire, Kettering and Wellingborough',
  };

  it('should render the home unitary section including links', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <HomeUnitarySection {...props} />
        </ThemeProvider>
      );

    const { getByRole, getAllByRole, getByTestId } = renderComponent();
    const component = getByTestId('HomeUnitarySection');

    expect(getByRole('heading')).toHaveTextContent(props.title);

    expect(component).toHaveTextContent(props.firstLine);
    expect(component).toHaveTextContent(props.westText);
    expect(component).toHaveTextContent(props.northText);

    const links = getAllByRole('link');
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveStyle(`color: ${west_theme.theme_vars.colours.action}`);
    expect(links[0]).toHaveTextContent('westnorthants.gov.uk');
    expect(links[0]).not.toHaveAttribute('title');
    expect(links[0]).toHaveAttribute('href', west_theme.theme_vars.council_link);

    expect(links[1]).toHaveStyle(`color: ${west_theme.theme_vars.other_council_action}`);
    expect(links[1]).toHaveTextContent('northnorthants.gov.uk');
    expect(links[1]).not.toHaveAttribute('title');
    expect(links[1]).toHaveAttribute('href', west_theme.theme_vars.other_council_link);
  });
});
