import React, { useState, useMemo, createContext, useEffect, } from 'react'
import { ThemeProvider, } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { defaultTheme, styledTheme, } from './themes/Themes'
import { createTheme, responsiveFontSizes, } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"

import Main from './pages/main/Main'

export const ColorModeContext = createContext({ toggleColorMode: () => { } })

const AppRoutes = () => {
    const [mode, setMode] = useState('dark')

    useEffect(() => {
        if (typeof window !== 'undefined')
            setMode(localStorage.getItem('theme') || 'dark')
    }, [])


    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newTheme = prevMode === 'light' ? 'dark' : 'light'

                    localStorage.setItem('theme', newTheme)
                    return newTheme
                })
            },
        }),
        [],
    )

    const MuiTheme = useMemo(
        () => responsiveFontSizes(createTheme(defaultTheme(mode))),
        [mode]
    )

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