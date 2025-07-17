import { RuleSet } from 'styled-components';

export interface GeneratedTheme {
  name: string;
  full_name: string;
  cardinal_name: string;
  is_memorial: boolean;
  theme_vars: ThemeVars;
  fontStyles: string;
  headingStyles: string;
  linkStyles: string;
  linkStylesHover: string;
  linkStylesFocus: RuleSet<object>;
  linkStylesActive: RuleSet<object>;
  elementBaseStyles: string;
  elementFocusStyles: string;
  visuallyHidden: string;
}

export interface ThemeVars {
  theme_name: string;
  full_name: string;
  cardinal_name: string;
  is_memorial: boolean;
  council_link?: string;
  other_council_link?: string;
  other_council_name?: string;
  other_council_action?: string;
  twitter_link?: string;
  linkedin_link?: string;
  facebook_link?: string;
  instagram_link?: string;
  youtube_link?: string;
  breakpointsVals: ThemeBreakpointTypes;
  breakpoints: ThemeBreakpointTypes;
  fontstack: string;
  colours: ThemeColourTypes;
  fontSizes: ThemeSizeTypes;
  border_width: string;
  border_width_error: string;
  border_width_thin: string;
  border_radius: string;
  border_radius_large: string;
  spacingSizes: ThemeSizeTypes;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
}

export interface ThemeBreakpointTypes {
  s: string;
  m: string;
  l: string;
  xl: string;
}

export interface ThemeColourTypes {
  black: string;
  grey_darkest: string;
  grey_dark: string;
  grey: string;
  grey_light: string;
  white: string;
  action: string;
  action_light: string;
  action_dark: string;
  positive: string;
  featured: string;
  negative: string;
  visited?: string;
  focus: string;
  placeholder: string;
  secondary?: string;
}

export interface ThemeSizeTypes {
  extra_small: string;
  small: string;
  medium: string;
  large: string;
  x_large?: string;
}
