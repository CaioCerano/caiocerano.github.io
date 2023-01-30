import React, { useState, useMemo, useContext, createContext, } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider, } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { defaultTheme, styledTheme, } from './themes/Themes'
import { createTheme, responsiveFontSizes, } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"

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
                    <CssBaseline />
                    <Main />
                </ThemeProvider>
            </StyledThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default AppRoutes