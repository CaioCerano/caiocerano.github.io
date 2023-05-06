import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
    Collapse,
    Slide,
} from '@mui/material'
import { useTheme, } from '@mui/material/styles'
import { Link, } from '../'

import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { styled } from '@mui/material/styles'

import LogoLight from '../../assets/images/v2-black.png'
import LogoDark from '../../assets/images/v2-white.png'

import { ColorModeContext } from '../../routes'
import ResumeFile from 'assets/files/Resume-Caio-Cerano.pdf'

/* ============================= TO DO =============================
    - Ajustar mobile
*/

const NavBarItem = (props) => {
    const { name, customRef, index, scrollToSection, firsTimeRender, setTirsTimeRender, file, downloadResume, } = props

    return (
        <Button
            sx={{
                color: 'text.primary',
                padding: 0,
                textTransform: 'none',
                paddingX: 1,
                marginLeft: { sm: '10px', md: '30px' },
                borderRadius: 1,

                ':hover': {
                    color: 'primary.purple',
                    // color: 'primary.secondary',
                    fontWeight: 'bold',
                    // backgroundColor: 'text.primary',
                    backgroundColor: 'transparent',
                },
            }}
            onClick={() => {
                if (customRef) scrollToSection(customRef)
                if (file) downloadResume(file)
            }}
        >
            <Collapse
                orientation='horizontal'
                in={true}
                appear={firsTimeRender}
                timeout={1000}
                direction='down'
                onEnter={() => setTirsTimeRender(false)}
            >
                {name}
            </Collapse>
        </Button>
    )

    // return (
    //     <Button
    //         sx={{
    //             color: 'text.primary',
    //             borderRadius: 0,
    //             padding: 0,
    //             textTransform: 'none',
    //             paddingX: 1,
    //             marginLeft: { sm: '10px', md: '30px' },
    //             ':hover': {
    //                 backgroundColor: 'transparent',
    //             },
    //         }}
    //         onClick={() => scrollToSection(customRef)}
    //         disableRipple
    //     >
    //         <Collapse
    //             orientation='horizontal'
    //             in={true}
    //             appear={firsTimeRender}
    //             timeout={1000}
    //             direction='down'
    //             onEnter={() => setTirsTimeRender(false)}
    //         // style={{ transitionDelay: index * 500 + 'ms' }}
    //         >
    //             <Link onClick={() => scrollToSection(customRef)}>
    //                 {name}
    //             </Link>
    //         </Collapse>
    //     </Button>
    // )
}

const ButtonTheme = (props) => {
    const { colorMode, theme, } = props

    return (
        <Button
            sx={{
                color: 'text.primary',
                borderRadius: 1,
                textTransform: 'none',
                marginLeft: { sm: '10px', md: '30px' },
                ':hover': {
                    color: 'primary.secondary',
                    fontWeight: 'bold',
                    backgroundColor: 'text.primary',
                },
            }}
            onClick={colorMode.toggleColorMode}
        >
            {theme.palette.mode === 'dark'
                ?
                <>
                    <DarkModeIcon sx={{ fontSize: '26px !important', p: 0, pr: 1, m: 0, height: '18px', }} />
                    Dark
                </>
                :
                <>
                    <LightModeIcon sx={{ fontSize: '26px !important', p: 0, pr: 1, m: 0, height: '18px', }} />
                    Light
                </>
            }
            {/* TRANSITION BACKGROUND COLOR https://p5aholic.me/info/ */}
        </Button>
    )
}

const drawerWidth = 240

const Navbar = (props) => {
    const { startPageRef, listInnerRef, aboutRef, experienceRef, workRef, contactRef, } = props

    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    const navItems = [
        {
            name: 'About',
            ref: aboutRef,
        },
        {
            name: 'Experience',
            ref: experienceRef,
        },
        {
            name: 'Work',
            ref: workRef,
        },
        {
            name: 'Contact',
            ref: contactRef,
        },
        {
            name: 'Resume',
            file: ResumeFile,
        },
    ]
    const [logo, setLogo] = useState(theme.palette.mode === 'dark' ? LogoDark : LogoLight)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [show, setShow] = useState(true)
    const [firsTimeRender, setTirsTimeRender] = useState(true)
    const lastScrollY = useRef(0)

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '35px',
    })

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const scrollToSection = (elementRef) => {
        // Idk why but the scrollIntoView only works for mobile browsers using the timeout function
        setTimeout(() => {
            elementRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    // ----------------------------------Mobile----------------------------------
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <Button key={'home'}
                onClick={() => scrollToSection(startPageRef)}
            >
                <Typography
                    variant='h6' color='inherit' component='div'
                >
                    Caio Cerano
                </Typography>
            </Button>

            <Divider />
            <List>
                {navItems.map(({ name, ref, file, }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center', }}
                            onClick={() => {
                                if (ref) scrollToSection(ref)
                                if (file) downloadResume(file)
                            }}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <ButtonTheme
                    colorMode={colorMode}
                    theme={theme}
                />
            </List>
        </Box>
    )

    const onHoverLogo = useCallback((isEnter) => {
        if (isEnter) {
            if (theme.palette.mode === 'dark') {
                setLogo(LogoLight)
            }
            else {
                setLogo(LogoDark)
            }
        }
        else {
            if (theme.palette.mode === 'dark') {
                setLogo(LogoDark)
            }
            else {
                setLogo(LogoLight)
            }
        }
    }, [theme.palette.mode])

    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            setLogo(LogoDark)
        }
        else {
            setLogo(LogoLight)
        }
    }, [theme.palette.mode])

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > lastScrollY.current && window.scrollY > 300) {
                setShow(false)
            }
            else {
                setShow(true)
            }
            lastScrollY.current = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const downloadResume = (file) => {
        const link = document.createElement("a")
        link.download = 'Resume-Caio-Cerano.pdf'
        link.href = file
        link.click()
    }

    return (
        <>
            <Slide
                direction='down'
                easing='cubic-bezier(0.4, 0, 0.2, 1)'
                in={show}
                mountOnEnter
                unmountOnExit
                timeout={400}
            >
                <AppBar
                    component='nav'
                    sx={{
                        background: `linear-gradient(to top, ${theme.palette.background.navBarSecondary}, ${theme.palette.background.navBarMain})`,
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { sm: 'none' },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' },
                                color: 'text.primary',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Button
                                key={'navbarlogo'}
                                sx={{
                                    borderRadius: 1,
                                    ':hover': {
                                        color: 'primary.secondary',
                                        fontWeight: 'bold',
                                        backgroundColor: 'text.primary',
                                    },
                                }}
                                onMouseEnter={() => onHoverLogo(true)}
                                onMouseLeave={() => onHoverLogo(false)}
                                onClick={() => scrollToSection(startPageRef)}
                            >
                                {/* <Typography
                                    variant='h6'
                                    color='inherit'
                                    component='div'
                                >
                                    LOGO
                                </Typography> */}

                                <Img alt='Logo' src={logo} />
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map(({ name, ref, file, }, index) => {
                                return <NavBarItem
                                    key={name + index}
                                    name={name}
                                    customRef={ref}
                                    index={index}
                                    scrollToSection={scrollToSection}
                                    firsTimeRender={firsTimeRender}
                                    setTirsTimeRender={setTirsTimeRender}
                                    file={file}
                                    downloadResume={downloadResume}
                                />

                            })}
                            <ButtonTheme
                                colorMode={colorMode}
                                theme={theme}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Box component='nav'>
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Navbar