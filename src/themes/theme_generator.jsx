import { gds_vars } from "./theme_gds";
import { north_vars } from "./theme_north";
import { west_vars } from "./theme_west";

const generate_theme = (theme_vars) => {
    return { 
        name: theme_vars.name, 
        theme_vars, 
        fontStyles: `
            font-family: ${theme_vars.fontstack};
            color: ${theme_vars.colours.black};
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.25;
        
            @media screen and (min-width: ${theme_vars.breakpoints.m}){
                font-size: 19px;
                font-size: 1.1875rem;
                line-height: 1.45;

                p {
                    max-width: 38em;
                }
            }
        `,
        linkStyles: `
            color: ${theme_vars.colours.action};
            font-weight: 700;
            text-decoration: underline;
            border-bottom: 2px solid transparent;
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
            text-decoration: none;
            border-bottom-color: ${theme_vars.colours.black};
        `,
        elementBaseStyles: `
            border-bottom: 2px solid transparent;
        `,
        elementFocusStyles: `
            outline: none;
        `
    }
}

export const GDS_theme = generate_theme(gds_vars);
export const west_theme = generate_theme(west_vars);
export const north_theme = generate_theme(north_vars);