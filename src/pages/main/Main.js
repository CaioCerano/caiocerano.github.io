import React, { useState, useEffect, useRef, forwardRef, } from 'react'
import { motion, } from 'framer-motion'
import { LinkedIn, GitHub, EmailOutlined, } from '@mui/icons-material'

import { Box, } from '@mui/material'
import { useTheme, } from '@mui/material/styles'
import './Main.css'

// import Home from 'pages/home/Home'
import HomeTest from 'pages/home/HomeTest'
import About from 'pages/about/About'
import Experience from 'pages/experience/Experience'
import Work from 'pages/work/Work'
import Contact from 'pages/contact/Contact'
import Footer from 'pages/footer/Footer'

import Navbar from 'components/navbar/Navbar'

const MotionContactInfoBar = () => {
    const iconStyle = {
        color: 'primary.main',
        fontSize: '22px',
        mx: '5px',
        my: '10px',

        '&:hover': {
            color: 'primary.purple',
            cursor: 'pointer'
        },
    }

    const LikedInComponent = forwardRef((props, ref) => (
        <LinkedIn ref={ref} sx={iconStyle} onClick={() => window.open('https://www.linkedin.com/in/caio-cerano/')} rel="noopener noreferrer" />
    ))

    const GitHubComponent = forwardRef((props, ref) => (
        <GitHub ref={ref} sx={iconStyle} onClick={() => window.open('https://github.com/CaioCerano/')} rel="noopener noreferrer" />
    ))

    const EmailComponent = forwardRef((props, ref) => (
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
                main: 'rgb(236, 239, 241)',
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
    const lastScrollY = useRef(0)

    // useEffect(() => {
    //     const handleScroll = event => {
    //         console.log('handleScroll', window.scrollY)
    //         // if (window.scrollY > lastScrollY.current && window.scrollY > 300) {
    //         //     setShow(false)
    //         // }
    //         // else {
    //         //     setShow(true)
    //         // }
    //         blob.animate({
    //             // left: `${clientX}px`,
    //             top: `${window.scrollY}px`
    //         }, { duration: 3000, fill: "forwards" });
    //         lastScrollY.current = window.scrollY
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    // const blob = document.getElementById("blob");
    // const backgroundEffectView = document.getElementById("backgroundEffectView");

    // window.onpointermove = event => {
    //     const { clientX, clientY } = event;
    //     console.log('onpointermove', clientX, clientY)
    //     blob.animate({
    //         left: `${clientX}px`,
    //         top: `${clientY}px`
    //     }, { duration: 3000, fill: "forwards" });
    // }

    // const [top, setTop] = useState(0)

    // useEffect(() => {
    //     console.log('backgroundEffectView', backgroundEffectView)
    //     console.log('blob', blob)
    //     const handleScroll = event => {
    //         console.log('handleScroll', window.scrollY)
    //         // setTop(window.scrollY)

    //         backgroundEffectView.animate({
    //             top: `${window.scrollY}px`
    //         }, { duration: 1, fill: "forwards" });
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [backgroundEffectView, blob, document,])

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: 'background.main'
            }}
            ref={listInnerRef}
            id='mainView'
        >
            <Navbar
                startPageRef={startPageRef}
                listInnerRef={listInnerRef}
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                workRef={workRef}
                contactRef={contactRef}
            />

            {/* <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    display: 'flex',
                    flexGrow: 1,
                    top: top,
                    position: 'absolute',
                    overflow: 'hidden',
                    animation: '1s ease',
                }}
                id='backgroundEffectView'
            >
                <Box
                    id='blob'
                    sx={{
                        height: '34vmax',
                        width: '34vmax',
                        aspectRatio: 1,
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        translate: '-50% -50%',
                        borderRadius: '50%',
                        background: 'linear-gradient(to right, red, blue)',
                        animation: 'gradient 5s ease infinite',
                        opacity: 0.8,
                        overflow: 'hidden',

                    }}
                />
                <Box
                    id='blur'
                    sx={{
                        height: '400%',
                        width: '100%',
                        position: 'absolute',
                        zIndex: 0,
                        backdropFilter: 'blur(12vmax)',
                        overflow: 'hidden',

                    }}
                />
            </Box> */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',

                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // OUTRA BOX COM OPACIDADE CONTROLADA PELO THEME == DARK??????
                    // background: `linear-gradient(to left top,rgb(236, 239, 241),rbg(220, 220, 220))`,
                    // background: `linear-gradient(to left top,${theme.palette.background.secondary},${theme.palette.background.main})`,
                    // background: 'linear-gradient(to right top,rgb(33, 33, 33),rgb(27, 18, 18))',

                    // backgroundColor: theme.palette.background.main,

                    transition: "all .8s ease",
                    WebkitTransition: "all .8s ease",
                    MozTransition: "all .8s ease",
                    overflow: 'hidden',
                }}
                // px={{ xs: 8, sm: 16, md: 16, lg: 32, xl: 48 }}
                // px={{ xs: 8, sm: 16, md: 32 }}
                ref={startPageRef}
            >
                <Box
                    sx={{
                        flex: 1,
                        width: '80%',
                        maxWidth: '960px',
                    }}
                >
                    <MotionContactInfoBar />

                    <HomeTest />
                    <About
                        navAboutRef={aboutRef}
                    />
                    <Experience
                        experienceRef={experienceRef}
                    />
                </Box>

                <Work
                    workRef={workRef}
                />

                <Box
                    sx={{
                        flex: 1,
                        width: '80%',
                        maxWidth: '960px',
                    }}
                >
                    <Contact
                        contactRef={contactRef}
                    />
                    <Footer />
                </Box>
            </Box>
        </Box >
    )
}

export default Main
