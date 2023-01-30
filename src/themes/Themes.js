import * as React from 'react'

const primaryWhite = 'rgb(236, 239, 241)'
const secondaryWhite = 'rbg(220, 220, 220)'
// const secondaryWhite = 'rbg(229,229,229)'
// const secondaryWhite = 'rbg(207, 216, 220)'
// const primaryWhite = 'rgb(250, 249, 246)'
const primaryBlack = 'rgb(32, 32, 32)'
const secondaryBlack = 'rgb(12, 12,12)'
const primaryPurple = 'rgb(146, 15, 166)'

const theme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: primaryBlack,
                    secondary: primaryWhite,

                    white: primaryWhite,
                    purple: primaryPurple,
                },
                background: {
                    main: primaryWhite,
                    secondary: secondaryWhite,

                    mainGlass: 'rgba(220, 220, 220, 0.6)',
                    navBarMain: 'rgba(220, 220, 220, 0.6)',
                    // navBarMain: 'rgba(207, 216, 220, 0.6)',
                    navBarSecondary: 'rgba(236, 239, 241, 0.4)',
                },
                text: {
                    main: primaryBlack,
                    secondary: primaryPurple,
                },
            }
            : {
                primary: {
                    main: primaryWhite,
                    secondary: primaryBlack,

                    white: primaryWhite,
                    purple: primaryPurple,
                },
                // divider:primaryWhite,
                background: {
                    main: secondaryBlack,
                    // main: primaryBlack,
                    secondary: primaryBlack,
                    // secondary: secondaryBlack,

                    mainGlass: 'rgba(32, 32, 32, 0.4)',
                    navBarMain: 'rgba(8, 8, 8, 0.6)',
                    navBarSecondary: 'rgba(8, 8, 8, 0.3)',
                },
                text: {
                    main: primaryWhite,
                    secondary: primaryPurple,
                },
            }),
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        allVariants: {
            color: mode === 'light' ? primaryBlack : primaryWhite
        }
        // fontFamily: [
        //     'Quicksand',
        //     'sans-serif',
        // ].join(','),
        // fontFamily: "'Montserrat', sans-serif",
        // 'Graphik', sans-serif
    },
    components: {
        MuiTypography: {
            defaultProps: {
            },
            styleOverrides: {
                root: {
                    '::-moz-selection': {
                        color: primaryPurple,
                        background: mode === 'light' ? primaryWhite : primaryBlack,
                    },
                    '::selection': {
                        color: primaryPurple,
                        background: mode === 'light' ? primaryWhite : primaryBlack,
                    },
                    'a::selection': {
                        color: primaryPurple,
                        background: mode === 'light' ? primaryWhite : primaryBlack,
                    },
                    'a::-moz-selection': {
                        color: primaryPurple,
                        background: mode === 'light' ? primaryWhite : primaryBlack,
                    },
                },
            },
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#2b2b2b",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#6b6b6b",
                        minHeight: 24,
                        border: "3px solid #2b2b2b",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b",
                    },
                },
            },
        },
    },
})

export const styledTheme = {
    mainColor: primaryWhite,
    purple: primaryPurple,
}

export const defaultTheme = theme