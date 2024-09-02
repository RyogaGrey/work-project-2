import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#7B868C'
        },
        secondary: {
            main: '#3D3935',
        },
        error: {
            main: '#CC0000',
        },
        warning: {
            main: '#F7B500',
        },
        linksAndButtons: {
            main: '#CC0000',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#CC0000',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#A30000',
                    },
                },
            },
        },
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3D3935',
        },
        secondary: {
            main: '#7B868C'
        },
        error: {
            main: '#7C1800',
        },
        warning: {
            main: '#F7B500',
        },
        linksAndButtons: {
            main: '#CC0000',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#CC0000',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#A30000',
                    },
                },
            },
        },
    },
})





// export const tokens = (mode: string) => ({
//     ...(mode === 'light' ? {
//         red: {
//             DEFAULT: '#CE0E2D',
//             '186': '#CC0000',
//             '1665': '#EA2C00',
//             '1815': '#7C1800',
//         },
//         black: {
//             DEFAULT: '#3D3935',
//         },
//         grey: {
//             DEFAULT: '#7B868C',
//         },
//         white: {
//             DEFAULT: '#FFFFFF',
//         },
//         yellow: {
//             '1235': '#F7B500',
//         },
//         green: {
//             '355': '#00A31C',
//             '356': '#008918',
//             '357': '#005A10'
//         }
//     } : {
//         red: {
//             DEFAULT: '#CE0E2D',
//             '186': '#CC0000',
//             '1665': '#EA2C00',
//             '1815': '#7C1800',
//         },
//         black: {
//             DEFAULT: '#3D3935',
//         },
//         grey: {
//             DEFAULT: '#7B868C',
//         },
//         white: {
//             DEFAULT: '#FFFFFF',
//         },
//         yellow: {
//             '1235': '#F7B500',
//         },
//         green: {
//             '355': '#00A31C',
//             '356': '#008918',
//             '357': '#005A10'
//         }
//     })
// })