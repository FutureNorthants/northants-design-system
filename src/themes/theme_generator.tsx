import { gds_vars } from './theme_gds';
import { north_vars } from './theme_north';
import { west_vars } from './theme_west';
import { lb_vars_north } from './theme_london_bridge_north';
import { lb_vars_west } from './theme_london_bridge_west';
import { css } from 'styled-components';
import { ThemeVars } from './ThemeVars.types';

const generate_theme = (theme_vars: ThemeVars) => {
  return {
    name: theme_vars.theme_name,
    full_name: theme_vars.full_name,
    cardinal_name: theme_vars.cardinal_name,
    is_memorial: theme_vars.is_memorial,
    theme_vars,
    fontStyles: `
            font-family: ${theme_vars.fontstack};
            color: ${theme_vars.colours.black};
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.45;
            -webkit-font-smoothing: antialiased;
        
            @media screen and (min-width: ${theme_vars.breakpoints.m}){
                font-size: 19px;
                font-size: 1.1875rem;
                line-height: 1.45;

                p, h2, h3, h4, ul, ol {
                    max-width: 750px;
                }
            }
        `,
    headingStyles: `
            h1 {
                ${theme_vars.h1}
            }
            h2 {
                ${theme_vars.h2}
            }
            h3 {
                ${theme_vars.h3}
            }
            h4 {
                ${theme_vars.h4}
            }
        `,
    linkStyles: `
            color: ${theme_vars.colours.action};
            font-weight: 700;
            text-decoration: underline;
        `,
    linkStylesHover: `
            color: ${theme_vars.colours.action_dark};
            text-decoration: underline;
            text-decoration-style: dotted;
        `,
    linkStylesFocus: css`
      color: ${theme_vars.colours.black};
      background: ${theme_vars.colours.focus};
      outline: none;
      text-decoration: none !important;
      box-shadow: 0 0 0 1px ${theme_vars.colours.focus}, 0 0 0 3px ${theme_vars.colours.black};
      -webkit-box-shadow: 0 0 0 1px ${theme_vars.colours.focus}, 0 0 0 3px ${theme_vars.colours.black};
      -moz-box-shadow: 0 0 0 1px ${theme_vars.colours.focus}, 0 0 0 3px ${theme_vars.colours.black};
    `,
    linkStylesActive: css`
      color: ${theme_vars.colours.black};
      background: ${theme_vars.colours.focus};
      outline: none;
      text-decoration: none !important;
      top: 2px;
      box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
      -webkit-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
      -moz-box-shadow: 0 -6px ${theme_vars.colours.focus}, 0 1px ${theme_vars.colours.black};
    `,
    elementBaseStyles: `
            border-bottom: 2px solid transparent;
        `,
    elementFocusStyles: `
            outline: none;
        `,
    visuallyHidden: `
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            -webkit-clip-path: inset(50%) !important;
            clip-path: inset(50%) !important;
            border: 0 !important;
            white-space: nowrap !important;
        `,
  };
};

export const GDS_theme = generate_theme(gds_vars);
export const west_theme = generate_theme(west_vars);
export const north_theme = generate_theme(north_vars);
export const lb_theme_north = generate_theme(lb_vars_north);
export const lb_theme_west = generate_theme(lb_vars_west);

export const themes = {
  GDS_theme,
  west_theme,
  north_theme,
  lb_theme_north,
  lb_theme_west,
};
