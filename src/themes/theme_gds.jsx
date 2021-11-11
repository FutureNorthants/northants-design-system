const breakpointsVals = {
    s: "550",
    m: "768", // tablets and larger
    l: "1160", // desktops and larger
    xl: "1440", // large desktops only
};

export const gds_vars = {
    theme_name: "GDS theme",
    cardinal_name: "gds",
    is_memorial: false,
    full_name: "FutureGov Template",       
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
        xl:`${breakpointsVals.xl}px`, // large desktops only
    },
    colours: {
        black: "#000000",
        grey_darkest: "#3C3C3B",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#1d70b8",
        action_light: "#FAFAFA",
        action_dark: "#003078",
        positive: "#6C9A36",
        negative: "#d4351c",
    
        visited: "#4c2c92",
        focus: "#fd0",
        placeholder: "#585656"
    },
    fontstack: "GDS Transport, Helvetica, Arial, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_width: "2px",
    border_width_error: "3px",
    border_radius: "0px",
    border_radius_large: "0px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px",
        x_large: "45px;"
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
    `
}