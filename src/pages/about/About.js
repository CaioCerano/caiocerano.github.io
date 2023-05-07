import React, { useRef, useEffect, useCallback, useState, } from 'react'
import { motion, useAnimation, } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Box, Typography, } from '@mui/material'
import { HiddenBox, Link, PageTitle, ItemsList, HoverBox, } from 'components'

import CircleIcon from '@mui/icons-material/Circle'

const About = ({ navAboutRef, }) => {
    const [hasRendered, setHasRendered] = useState(false)

    console.log('About render')

    const aboutTitleControls = useAnimation()
    const aboutRef = useRef(null)

    const { ref: inViewAboutRef, inView: inViewAbout, entry: entryAbout } = useInView({
        delay: 100,
        threshold: 0.1,
    })

    const setAboutRefs = useCallback((node) => {
        aboutRef.current = node
        inViewAboutRef(node)
    }, [inViewAboutRef])

    useEffect(() => {
        if (!hasRendered && inViewAbout) {
            setHasRendered(true)
            aboutTitleControls.start({
                opacity: 1,
                translateY: 0,
            })
        }
    }, [inViewAbout])

    return (
        <Box
            // ref={navAboutRef}
            ref={(refValue) => { navAboutRef.current = refValue; setAboutRefs(refValue) }}
            sx={{
                flex: 1,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                zIndex: 1000,
                width: '100%',
                pt: 16,
                pb: 16,
            }}
        >
            <HiddenBox>
                <PageTitle
                    title='About me'
                    component={motion.div}
                    initial={{
                        translateY: '100%',
                        opacity: 0,
                    }}
                    animate={aboutTitleControls}
                    transition={{
                        duration: 0.8,
                        delay: 0,
                    }}
                />
            </HiddenBox>
            <HiddenBox>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                    }}
                    component={motion.div}
                    initial={{ translateY: '-100%', opacity: 0, }}
                    animate={aboutTitleControls}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                >
                    <HoverBox>
                        <Box
                            sx={{
                                p: 3,
                                flexDirection: 'column',
                            }}
                        >
                            <Typography paragraph >
                                I’m Caio, a Front-End Developer located in São Paulo, Brazil. I'm also currently studying for bachelor's degree in Computer Science and Science and Technology at <Link target='_blank' onClick={() => window.open('https://www.ufabc.edu.br/en/')}>
                                    Federal University of ABC (UFABC)
                                </Link>.
                            </Typography>

                            <Typography paragraph>
                                My interest in web development began in 2017 when I first started creating websites about themes I liked back then, with the goal of learning and improving my skills.
                                Nowadays I've been working as a developer for the last 3 years both for web and mobile applications, specialized in creating dynamic and intuitive user focused experiences.
                            </Typography>

                            <Typography paragraph>
                                Here are some of the technologies that I've been using recently:
                            </Typography>

                            <ItemsList
                                items={[
                                    'JavaScript (ES6+)',
                                    'TypeScript',
                                    'React',
                                    'React Native',
                                    'HTML5',
                                    'CSS3',
                                    'Node.js',
                                    'MySQL',
                                ]}
                            />
                        </Box>
                    </HoverBox>
                </Box>
            </HiddenBox>
        </Box>
    )
}

export default About
