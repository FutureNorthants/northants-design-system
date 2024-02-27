import { ThemeBreakpointTypes, ThemeVars } from './ThemeVars.types';

const breakpointsVals: ThemeBreakpointTypes = {
  s: '550',
  m: '768', // tablets and larger
  l: '1160', // desktops and larger
  xl: '1440', // large desktops only
};

export const west_vars: ThemeVars = {
  theme_name: 'West Northants theme',
  full_name: 'West Northamptonshire',
  cardinal_name: 'west',
  is_memorial: false,
  council_link: 'https://www.westnorthants.gov.uk',
  other_council_link: 'https://www.northnorthants.gov.uk',
  other_council_name: 'North Northamptonshire',
  other_council_action: '#016200',
  twitter_link: 'https://twitter.com/WestNorthants',
  linkedin_link: 'https://www.linkedin.com/company/west-northamptonshire-council',
  facebook_link: 'https://www.facebook.com/WestNorthants',
  instagram_link: 'https://www.instagram.com/westnorthants/',
  youtube_link: 'https://www.youtube.com/channel/UCDyc2cNcl19OvcGOCuZDTBQ',

  breakpointsVals: {
    s: breakpointsVals.s,
    m: breakpointsVals.m, // tablets and larger
    l: breakpointsVals.l, // desktops and larger
    xl: breakpointsVals.xl, // large desktops only
  },
  breakpoints: {
    s: `${breakpointsVals.s}px`,
    m: `${breakpointsVals.m}px`, // tablets and larger
    l: `${breakpointsVals.l}px`, // desktops and larger
    xl: `${breakpointsVals.xl}px`, // large desktops only
  },
  colours: {
    black: '#000000',
    grey_darkest: '#3C3C3B',
    grey_dark: '#757575',
    grey: '#C6C6C6',
    grey_light: '#F5F5F5',
    white: '#FFFFFF',

    action: '#385889',
    action_light: '#E9EEF3',
    action_dark: '#0E335B',
    positive: '#6C9A36',
    negative: '#9D0B1D',

    focus: '#E2CA76',
    placeholder: '#585656',

    secondary: '#6CC7E1',
  },
  fontstack: 'Roboto, Helvetica, Arial, sans-serif',
  fontSizes: {
    extra_small: '.9em',
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  border_width: '2px',
  border_width_error: '3px',
  border_width_thin: '1px',
  border_radius: '3px',
  border_radius_large: '6px',
  spacingSizes: {
    extra_small: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    x_large: '45px;',
  },
  h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
  h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
  h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
  h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `,
};
