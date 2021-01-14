import { gds_vars } from "./theme_gds";
import { north_vars } from "./theme_north";
import { west_vars } from "./theme_west";



const generate_theme = (theme_vars) => {
    return { 
        name: theme_vars.theme_name, 
        full_name: theme_vars.full_name, 
        cardinal_name: theme_vars.cardinal_name, 
        theme_vars, 
        fontStyles: `
            font-family: ${theme_vars.fontstack};
            color: ${theme_vars.colours.black};
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.4;
        
            @media screen and (min-width: ${theme_vars.breakpoints.m}){
                font-size: 19px;
                font-size: 1.1875rem;
                line-height: 1.45;

                p, h2, h3, h4 {
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
            display: inline-block;
        `,
        linkStylesHover: `
            color: ${theme_vars.colours.action_dark};
            text-decoration: underline;
            text-decoration-style: dotted;
        `,
        linkStylesFocus: `
            color: ${theme_vars.colours.black};
            background: ${theme_vars.colours.focus};
            outline: none;
            text-decoration: none !important;
            box-shadow: 0px 2px 0px 0px ${theme_vars.colours.black};
            -webkit-box-shadow: 0px 2px 0px 0px ${theme_vars.colours.black};
            -moz-box-shadow: 0px 2px 0px 0px ${theme_vars.colours.black};
        `,
        linkStylesActive: `
            transform: translateY(1px);
            box-shadow: 0px 1px 0px 0px ${theme_vars.colours.black};
            -webkit-box-shadow: 0px 1px 0px 0px ${theme_vars.colours.black};
            -moz-box-shadow: 0px 1px 0px 0px ${theme_vars.colours.black};
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
        `
    }
}

export const GDS_theme = generate_theme(gds_vars);
export const west_theme = generate_theme(west_vars);
export const north_theme = generate_theme(north_vars);