const theme_vars = {
    name: "GDS theme",
    breakpoints: {
        s: "550px",
        m: "768px", // tablets and larger
        l: "1160px", // desktops and larger
        xl: "1440px", // large desktops only
    },
    colours: {
        black: "#000000",
        grey_dark: "#807F80",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#000000",
        action_dark: "#333333",
        positive: "#6C9A36",
        negative: "#9D0B1D",

        focus: "#fd0"
    },
    fontstack: "GDS Transport, Helvetica, Arial, sans-serif",
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    borderRadius: "0px",
}

export const GDS_theme = { theme_vars, 
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