import React, { useState, useEffect, useRef, useCallback, } from 'react'
import { motion, useAnimation, } from 'framer-motion'
import { LinkedIn, GitHub, EmailOutlined, } from '@mui/icons-material'
import { ParallaxBanner } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { v4 as uuidv4 } from 'uuid'

import { Box, } from '@mui/material'
import { useTheme, } from '@mui/material/styles'
import './Main.css'

import Home from '../home/Home'
import HomeTest from '../home/HomeTest'
import About from '../about/About'
import Experience from '../experience/Experience'
import Work from '../work/Work'
import Contact from '../contact/Contact'

import Navbar from '../../components/navbar/Navbar'

const MotionContactInfoBar = () => {
    const iconStyle = {
        color: 'primary.main',
        fontSize: '22px',
        px: '5px',
        py: '10px',

        '&:hover': {
            color: 'primary.purple',
            cursor: 'pointer'
        },
    }

    const LikedInComponent = React.forwardRef((props, ref) => (
        <LinkedIn ref={ref} sx={iconStyle} onClick={() => window.open('https://www.linkedin.com/in/caio-cerano/')} rel="noopener noreferrer" />
    ))

    const GitHubComponent = React.forwardRef((props, ref) => (
        <GitHub ref={ref} sx={iconStyle} onClick={() => window.open('https://github.com/CaioCerano/')} rel="noopener noreferrer" />
    ))

    const EmailComponent = React.forwardRef((props, ref) => (
        <EmailOutlined ref={ref} sx={iconStyle} onClick={() => window.open('mailto:caiocerano@gmail.com')} rel="noopener noreferrer" />
    ))

    const MotionLikedInComponent = motion(LikedInComponent)

    const MotionGitHubComponent = motion(GitHubComponent)

    const MotionEmailComponent = motion(EmailComponent)

    return (
        <Box
            direction='row'
            sx={{
                display: 'flex',
                position: 'fixed',
                bottom: -10,
                left: '24px',
                zIndex: 100,
                display: { xs: 'none', sm: 'block' },
            }}
            display={{ xs: 'block', sm: 'block' }}
            m={1}
        >
            <motion.div
                initial={{ translateY: '300px' }}
                animate={{ translateY: 0, }}
                transition={{
                    duration: 0.7,
                    delay: 1,
                }}
                style={{
                    display: 'flex',

                    width: '20px',
                    bottom: 0,
                    height: '300px',

                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <MotionLikedInComponent
                    whileHover={{
                        y: '-5px',
                        transition: { duration: 0.2 },
                    }}
                />
                <MotionGitHubComponent
                    whileHover={{
                        y: '-5px',
                        transition: { duration: 0.2 },
                    }}
                />
                <MotionEmailComponent
                    whileHover={{
                        y: '-5px',
                        transition: { duration: 0.2 },
                    }}
                    onClick={() => window.open('mailto:caiocerano@gmail.com')}
                    rel="noopener noreferrer"
                />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, width: '1px', backgroundColor: 'primary.main', marginTop: '0.5em', }} />
            </motion.div>
        </Box >
    )
}

const Main = () => {
    const startPageRef = useRef(null)
    const listInnerRef = useRef(null)

    const aboutRef = useRef(null)
    const experienceRef = useRef(null)
    const workRef = useRef(null)
    const contactRef = useRef(null)

    console.log('Home render')

    const theme = useTheme()

    const [backgroundValues, setBackgroundValues] = useState({
        main: 'rgb(33, 33, 33)',
        secondary: 'rgb(27, 18, 18)',
    })

    useEffect(() => {
        if (theme.palette.mode === 'light') {
            setBackgroundValues({
                main: ' rgb(236, 239, 241)',
                secondary: 'rbg(220, 220, 220)',
            })
        }
        else {
            setBackgroundValues({
                main: 'rgb(33, 33, 33)',
                secondary: 'rgb(27, 18, 18)',
            })
        }
    }, [theme.palette.mode])

    // /*------- Animations -------*/
    // const aboutControls = useAnimation()
    // const experienceControls = useAnimation()
    // const workControls = useAnimation()
    // const contactControls = useAnimation()

    // const { ref: inViewAboutRef, inView: inViewAbout, entry: entryAbout } = useInView({
    //     delay: 100,
    //     threshold: 0.1,
    // })

    // const { ref: inViewExperienceRef, inView: inViewExperience, entry: entryExperience } = useInView({
    //     delay: 100,
    //     threshold: 0.1,
    // })

    // const { ref: inViewWorkRef, inView: inViewWork, entry: entryWork } = useInView({
    //     delay: 100,
    //     threshold: 0.1,
    // })

    // const setAboutRefs = useCallback((node) => {
    //     aboutRef.current = node
    //     inViewAboutRef(node)
    // }, [inViewAboutRef])

    // const setExperienceRefs = useCallback((node) => {
    //     experienceRef.current = node
    //     inViewExperienceRef(node)
    // }, [inViewAboutRef])

    // const setWorkRefs = useCallback((node) => {
    //     workRef.current = node
    //     inViewExperienceRef(node)
    // }, [inViewAboutRef])

    return (
        <Box
            sx={{
                display: 'flex',
            }}
            ref={listInnerRef}
        >
            <Navbar
                startPageRef={startPageRef}
                listInnerRef={listInnerRef}
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                workRef={workRef}
                contactRef={contactRef}
            />
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',

                    width: '100%',

                    alignItems: 'center',
                    justifyContent: 'center',

                    // OUTRA BOX COM OPACIDADE CONTROLADA PELO THEME == DARK??????
                    // background: `linear-gradient(to left top,rgb(236, 239, 241),rbg(220, 220, 220))`,
                    // background: `linear-gradient(to left top,${theme.palette.background.secondary},${theme.palette.background.main})`,
                    // background: 'linear-gradient(to right top,rgb(33, 33, 33),rgb(27, 18, 18))',

                    backgroundColor: theme.palette.background.main,

                    transition: "all .8s ease",
                    WebkitTransition: "all .8s ease",
                    MozTransition: "all .8s ease",
                }}
                // px={{ xs: 8, sm: 16, md: 16, lg: 32, xl: 48 }}
                // px={{ xs: 8, sm: 16, md: 32 }}
                ref={startPageRef}
            >
                {/* <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                    // background: theme.palette.mode === 'dark' ? `linear-gradient(to left top,rgb(12, 12,12),rgb(32, 32, 32))` : `linear-gradient(to left top,rgb(236, 239, 241),rbg(220, 220, 220))`,
                    
                    transition: "all .8s ease",
                    WebkitTransition: "all .8s ease",
                    MozTransition: "all .8s ease",
                }}
            > */}
                <Box
                    sx={{
                        flex: 1,
                        width: '80%',
                        // width: '90%', 
                        maxWidth: '960px',
                    }}
                >
                    <MotionContactInfoBar />

                    {/* <Home /> */}
                    <HomeTest />
                    <About
                        navAboutRef={aboutRef}
                    />
                    <Experience
                        experienceRef={experienceRef}
                    />
                    <Work
                        workRef={workRef}
                    />
                    <Contact
                        contactRef={contactRef}
                    />
                </Box>
                {/* </Box> */}
            </Box>
        </Box>
    )
}

export default Main
