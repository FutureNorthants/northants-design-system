import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AlertBanner from './AlertBanner';
import { AlertBannerProps } from './AlertBanner.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Alert Banner', () => {
  let props: AlertBannerProps;

  beforeEach(() => {
    props = {
      title: 'The alert title',
      uid: '123456',
      children: <p>Some important information</p>,
      alertType: 'alert',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <AlertBanner {...props}></AlertBanner>
      </ThemeProvider>
    );

  it('should render the alert', () => {
    const { getByTestId, getByRole } = renderComponent();
    const component = getByTestId('AlertBanner');
    const dismissButton = getByRole('button');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('The alert title');
    expect(component).toHaveTextContent('Some important information');
    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.negative}`);

    expect(dismissButton).toHaveTextContent('Dismiss');
  });

  it('should be a positive alert', () => {
    props.alertType = 'positive';

    const { getByTestId } = renderComponent();
    const component = getByTestId('AlertBanner');

    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.positive}`);
  });

  it('should be a london bridge alert', () => {
    props.alertType = 'london_bridge';

    const { getByTestId } = renderComponent();
    const component = getByTestId('AlertBanner');

    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.black}`);
  });

  it('should be a warning alert', () => {
    props.alertType = 'warning';

    const { getByTestId } = renderComponent();
    const component = getByTestId('AlertBanner');

    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.focus}`);
  });

  it('should dismiss the alert, keep it hidden on next render, but show alert with new uid', () => {
    const { getByTestId, getByRole } = renderComponent();
    const component = getByTestId('AlertBanner');
    const dismissButton = getByRole('button');

    expect(component).toBeVisible();

    fireEvent.click(dismissButton);

    expect(component).not.toBeVisible();

    // Re-render the component with the same uid and
    // it should not show after being dismissed
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('AlertBanner')).toBeNull();

    // Update uid and alert should now show
    props.uid = '1111111';
    const { getAllByTestId } = renderComponent();
    expect(getAllByTestId('AlertBanner')).toHaveLength(1);
  });
});
