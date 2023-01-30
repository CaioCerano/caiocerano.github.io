import React, { useState, useMemo, useContext, createContext, } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider, } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { defaultTheme, styledTheme, } from './themes/Themes'
import { createTheme, responsiveFontSizes, } from '@mui/material/styles'

import Main from './pages/main/Main'
import GlobalStyles from "@mui/material/GlobalStyles"

export const ColorModeContext = createContext({ toggleColorMode: () => { } })

const AppRoutes = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                )
            },
        }),
        [],
    )

    const MuiTheme = useMemo(() => responsiveFontSizes(createTheme(defaultTheme(mode))), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <StyledThemeProvider theme={styledTheme}>
                <ThemeProvider theme={MuiTheme}>
                    <GlobalStyles
                        styles={{
                            scrollbarWidth: 'thin',
                            '&::-webkit-scrollbar': {
                                width: '0.3em',
                                background: 'linear-gradient(rgb(27, 18, 18), rgb(33, 33, 33))',
                            },
                            // '&::-webkit-scrollbar-track': {
                            //     background: 'rgb(27, 18, 18)',
                            // },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#888',
                                borderRadius: '30px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background: 'rgb(146, 15, 166)',
                            }
                        }}
                    />
                    <Main />
                </ThemeProvider>
            </StyledThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default AppRoutes