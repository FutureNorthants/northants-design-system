import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import HomeHero from './HomeHero';
import { HomeHeroProps } from './HomeHero.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import { HomeHeroCommon, HomeHeroPromotedLinks } from './HomeHero.storydata';
import { ExamplePromotedServicesData } from '../PromotedServicesTabs/PromotedServicesTabs.storydata';

describe('HomeHero common usage', () => {
  const props: HomeHeroProps = {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 3),
    ...HomeHeroCommon,
  };

  let rendered: RenderResult;

  // run before each it() function, as otherwise things are cleaned up and subsequent it() calls go wrong
  beforeEach(() => {
    rendered = render(
      <ThemeProvider theme={west_theme}>
        <HomeHero {...props} />
      </ThemeProvider>
    );
  });

  it('should render 3 promoted links', () => {
    const links = rendered.queryAllByRole('link');
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent(HomeHeroPromotedLinks[0].title);
    expect(links[0]).toHaveAttribute('href', HomeHeroPromotedLinks[0].url);
    expect(links[1]).toHaveTextContent(HomeHeroPromotedLinks[1].title);
    expect(links[1]).toHaveAttribute('href', HomeHeroPromotedLinks[1].url);
    expect(links[2]).toHaveTextContent(HomeHeroPromotedLinks[2].title);
    expect(links[2]).toHaveAttribute('href', HomeHeroPromotedLinks[2].url);
  });

  it('should include a search box with autocomplete and a search button', () => {
    const search = rendered.getByRole('textbox');
    expect(search).toHaveProperty('placeholder', 'Search the site');

    const searchbutton = rendered.getByRole('button');
    expect(searchbutton).toHaveValue('Search');

    fireEvent.change(search, { target: { value: 'oran' } });
    const listbox = rendered.getByRole('listbox');
    expect(listbox).toBeVisible();
    expect(listbox.children.length).toBe(1);
  });

  it('should render an image tag', () => {
    const images = rendered.queryAllByRole('presentation', { hidden: true });
    expect(images).toHaveLength(1);
  });
});

describe('HomeHero unusual usage', () => {
  const props: HomeHeroProps = {
    imageOverrideLogo: 'http://placehold.it/520x150',
    imageOverrideLogoAltText: 'My alt text',
    topline: 'To be on top',
    strapline: 'Strap in',
    promotedLinksArray: [],
    ...HomeHeroCommon,
  };

  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <ThemeProvider theme={west_theme}>
        <HomeHero {...props} />
      </ThemeProvider>
    );
  });

  it('should render 0 links', () => {
    const links = rendered.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  it('should render a topline', () => {
    rendered.getByText('To be on top');
  });

  it('should render a strapline', () => {
    rendered.getByText('Strap in');
  });

  it('should render an overriden logo image', () => {
    const img = rendered.getByAltText('My alt text');
    expect(img).toBeVisible();
    expect(img).toHaveProperty('src', 'http://placehold.it/520x150');
    expect(img).toHaveProperty('alt', 'My alt text');
  });

  it('should render the heading one', () => {
    const heading = rendered.getByRole('heading');

    expect(heading).toBeVisible();
  });
});

describe('Home Hero Hide Search', () => {
  let props: HomeHeroProps = {
    imageOverrideLogo: 'http://placehold.it/520x150',
    imageOverrideLogoAltText: 'My alt text',
    topline: 'To be on top',
    strapline: 'Strap in',
    showSearch: false,
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 3),
    ...HomeHeroCommon,
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <HomeHero {...props} />
      </ThemeProvider>
    );

  it('should hide the search from the home hero', () => {
    const { getByTestId, getAllByRole, queryByLabelText } = renderComponent();

    const component = getByTestId('HomeHero');
    const links = getAllByRole('link');

    expect(component).toBeVisible();
    expect(queryByLabelText('Search the site')).toBeNull();
    expect(links.length).toBe(3);
  });

  it('should render the promoted services tabs links', () => {
    props.promotedServicesTabs = ExamplePromotedServicesData;

    const { getAllByRole } = renderComponent();

    const links = getAllByRole('link');

    // 3 promoted links and 6 service links visible
    expect(links.length).toBe(9);
  });
});
