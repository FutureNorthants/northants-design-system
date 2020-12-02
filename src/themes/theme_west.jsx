const theme_vars = {
    name: "West Northants theme",
    breakpoints: {
        s: "550px",
        m: "768px", // tablets and larger
        l: "1160px", // desktops and larger
        xl: "1440px", // large desktops only
    },
    colours: {
        black: "#3C3C3B",
        grey_dark: "#807F80",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#386193",
        action_dark: "#0E335B",
        positive: "#6C9A36",
        negative: "#9D0B1D",

        focus: "#E2CA76"
    },
    fontstack: "Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    borderRadius: "3px"
}

export const west_theme = { theme_vars, 
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
    `
}
