import React, { useState, useRef, useContext, useEffect, } from 'react'
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

import { ColorModeContext } from '../../routes'

/* ============================= TO DO =============================
    - Ajustar mobile
*/

const NavBarItem = (props) => {
    const { name, customRef, index, scrollToSection, firsTimeRender, setTirsTimeRender, } = props

    return (
        <Button
            sx={{
                color: 'text.primary',
                borderRadius: 0,
                padding: 0,
                textTransform: 'none',
                paddingX: 1,
                marginLeft: { sm: '10px', md: '30px' },
                ':hover': {
                    color: 'primary.secondary',
                    fontWeight: 'bold',
                    backgroundColor: 'text.primary',
                },
            }}
            onClick={() => scrollToSection(customRef)}
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
                borderRadius: 0,
                textTransform: 'none',
                p: 1,
                marginLeft: { sm: '10px', md: '30px' },
                ':hover': {
                    color: 'primary.secondary',
                    fontWeight: 'bold',
                    backgroundColor: 'text.primary',
                },
            }}
            onClick={colorMode.toggleColorMode}
        // color='primary.main'
        >
            {theme.palette.mode === 'dark'
                ?
                <>
                    <DarkModeIcon sx={{ pr: 1, }} />
                    Dark
                </>
                :
                <>
                    <LightModeIcon sx={{ pr: 1, }} />
                    Light
                </>
            }
            {/* TRANSITION BACKGROUND COLOR https://p5aholic.me/info/ */}
        </Button>
    )
}

const drawerWidth = 240

const Navbar = (props) => {
    const {startPageRef, listInnerRef, aboutRef, experienceRef, workRef, contactRef, } = props

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
            ref: contactRef,
        },
    ]

    const [mobileOpen, setMobileOpen] = useState(false)
    const [show, setShow] = useState(true)
    const [firsTimeRender, setTirsTimeRender] = useState(true)
    const lastScrollY = useRef(0)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    // ----------------------------------Mobile----------------------------------
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <Button key={'home'}
            // onClick={() => navigate('/home')} 
            >
                <Typography
                    variant='h6' color='inherit' component='div'
                >
                    Caio Cerano
                </Typography>
            </Button>

            <Divider />
            <List>
                {navItems.map(({ name, }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}
                        // onClick={() => path && navigate(path)}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

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
                        background: `linear-gradient(to top,${theme.palette.background.navBarSecondary},${theme.palette.background.navBarMain})`,

                        // backgroundColor: 'rgba(33, 33, 33, 0.6)',
                        // backgroundColor: 'rgba(30, 23, 52, 0.9)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
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
                                    color: 'text.primary',
                                    textTransform: 'none'
                                }}
                                onClick={() => scrollToSection(startPageRef)}
                            >
                                <Typography
                                    variant='h6'
                                    color='inherit'
                                    component='div'
                                >
                                    LOGO
                                </Typography>
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map(({ name, ref, }, index) => {
                                return <NavBarItem
                                    key={name + index}
                                    name={name}
                                    customRef={ref}
                                    index={index}
                                    scrollToSection={scrollToSection}
                                    firsTimeRender={firsTimeRender}
                                    setTirsTimeRender={setTirsTimeRender}
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