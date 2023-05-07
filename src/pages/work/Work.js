import React, { useRef, useEffect, useCallback, memo, } from 'react'
import { motion, useAnimation, } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { useInView } from 'react-intersection-observer'
import { Stack, Box, Typography, } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PageTitle, Paragraphs, HoverBox, } from 'components'
import { useTheme, } from '@mui/material/styles'

import PersonalSiteImage from 'assets/images/portoflio.png'
import FuturoEstagiosImage from 'assets/images/futuro_estagios.png'
import ResightWebImage from 'assets/images/resight_web.png'

const WorkCardGrid = ({ title, developer, date, description, image, technologies, right = false, first = false }) => {
    console.log('WorkCardGrid render2')

    const workCardControls = useAnimation()
    const workCardImageControls = useAnimation()
    const workCardRef = useRef(null)

    const initialPanelValue = { x: right ? '100%' : '-100%', opacity: 0, }

    const { ref: inViewWorkCardRef, inView: inViewWorkCard, entry: entryAbout } = useInView({
        delay: 100,
        threshold: 0.1,
    })

    const setWorkCardRefs = useCallback((node) => {
        workCardRef.current = node
        inViewWorkCardRef(node)
    }, [inViewWorkCardRef])

    const theme = useTheme()

    useEffect(() => {
        if (inViewWorkCard) {
            workCardControls.start({
                opacity: 1,
                x: 0,
            })
            workCardImageControls.start({
                opacity: 1,
            })
        }
        // else {
        //     workCardControls.start({
        //         opacity: 0,
        //         x: right ? '100%' : '-100%',
        //     })
        //     workCardImageControls.start({
        //         opacity: 0,
        //     })
        // }
    }, [inViewWorkCard])

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    })

    return (
        <Box
            ref={setWorkCardRefs}
            sx={{
                width: '100%',
                mt: first ? 12 : 20,

                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
                columnCount: 12,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    gridRow: { md: '1' },
                    gridColumn: { md: right ? '6 / 12' : '1 / 7' },
                    // gridColumn: { md: right ? '7 / 12' : '1 / 6' },
                    mr: 0,

                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    component={motion.div}
                    initial={initialPanelValue}
                    animate={workCardControls}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: [0.1, 0.2, .24, 1]
                    }}

                    sx={{
                        m: 0,
                        mb: 1,
                        // '&:nth-of-type(even)': {
                        //     textAlign: 'right',
                        // }
                        textAlign: right && { xs: 'left', sm: 'left', md: 'right' },
                    }}
                >
                    {developer + ' - ' + date}
                </Typography>
                <Typography
                    component={motion.div}
                    initial={initialPanelValue}
                    animate={workCardControls}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0.1, 0.2, .24, 1]
                    }}
                    variant='h4'
                    sx={{
                        zIndex: 3,
                        // color: 'primary.purple',
                        position: 'static',
                        fontWeight: 700,
                        mb: 2,

                        textAlign: right && { xs: 'left', sm: 'left', md: 'right' },
                    }}
                >
                    {title}
                </Typography>
                <Box
                    component={motion.div}
                    initial={initialPanelValue}
                    animate={workCardControls}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0.1, 0.2, .24, 1]
                    }}

                    sx={{
                        zIndex: 3,
                        borderRadius: 1,
                        padding: 3,
                        position: 'relative',
                        backgroundColor: 'background.mainGlass',
                        backdropFilter: 'blur(10px)',
                        //  offset-x | offset-y | blur-radius | spread-radius | color
                        boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.37)',
                    }}
                >
                    <Paragraphs items={description} />
                </Box>
                <Stack
                    component={motion.div}
                    initial={initialPanelValue}
                    animate={workCardControls}
                    transition={{
                        duration: 0.7,
                        delay: 0.8,
                        ease: [0.1, 0.2, .24, 1]
                    }}

                    direction="row"
                    sx={{
                        zIndex: 4,
                        display: 'flex',
                        flexWrap: 'wrap',
                        position: 'relative',
                        mt: 1,

                        justifyContent: right ? { xs: 'flex-start', sm: 'flex-start', md: 'flex-end' } : 'flex-start',
                    }}
                >
                    {technologies && technologies.length > 0 && technologies.map(({ label, link, }, index) => {
                        return <Typography
                            sx={{
                                zIndex: 4,
                                textAlign: 'center',

                                px: 1,
                                mt: 2,

                                backgroundColor: 'background.mainGlass',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.17)',

                                mr: right ? { xs: 2, sm: 2, md: 0 } : 2,
                                ml: right && { xs: 0, sm: 0, md: 2 },
                            }}
                            onClick={link}
                            key={index}
                        >
                            {label}
                        </Typography>
                    })}
                </Stack>
            </Box>

            <Box
                component={motion.div}
                initial={{ opacity: 0, }}
                animate={workCardImageControls}
                transition={{
                    duration: 1,
                    delay: 0,
                }}

                sx={{
                    flex: 1,
                    display: 'flex',

                    gridRow: '1',
                    // gridColumn: { md: right ? '1 / 7' : '6 / 12' },
                    gridColumn: { md: right ? '1 / 8' : '5 / 12' },
                    mb: { xs: 2, sm: 4, md: 0 },

                    zIndex: 1,

                }}
            >
                <Img
                    alt={title + 'label'}
                    src={image}
                    sx={{
                        filter: {xs: 'grayscale(0%) contrast(1) brightness(100%)', sm: 'grayscale(100%) contrast(1) brightness(60%)' },
                        // filter: 'grayscale(100%) contrast(1) brightness(60%)',
                        transitionDuration: '0.3s',
                        alignSelf: 'center',
                        opacity: 0.8,
                        borderRadius: 1,
                        // border: 1,
                        // borderColor: 'black',

                        '&:hover': {
                            transition: 'all 0.6s ease',
                            filter: 'grayscale(0%) contrast(1) brightness(100%)',
                            opacity: 1,
                            // boxShadow: `4px 4px 4px 4px ${theme.palette.primary.purple}`,

                            // borderColor: theme.palette.primary.purple,
                        },
                    }}
                />
            </Box>

        </Box>
    )
}

const Work = ({ workRef, }) => {
    const MemoizedWorkCardGrid = memo(WorkCardGrid)

    console.log('Work render')

    const descriptions = {
        portfolio: [
            'This is the site you are currently using and also my first personal portfolio website!',
            'It was built with the intention of showing my skills and experiences and I think this project has helped to vastly improve my design and web development skills.',
            'I mainly focused on learning and improving my skills in HTML, CSS, responsivity and design.',
        ],
        resight: [
            'A retail execution and monitoring solution. I worked with a team for two years in this project and it consisted of both a web and mobile application.',
            'I acted in different areas during this project but mostly in the development of the mobile application, using primarily React Native.',
        ],
        futuroEstagios: [
            'I worked together with a small team to develop this web application for contract management built to meet the specific needs of the customer.',
        ]
    }

    return (
        <Box
            sx={{
                flex: 1,
                // Nota: width e maxWidth customizados para incluir o BoxShadow + overflow: 'hidden'
                width: { xs: '80%', sm: '80%', md: 'calc(80% + 16px)' },
                maxWidth: { xs: '80%', sm: '80%', md: 'calc(976px)' },
                px: '-80px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    flexDirection: 'column',
                    px: '8px',
                    overflow: 'hidden',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
                ref={workRef}
            >
                <PageTitle title='Work' />
                <Box
                    sx={{
                        display: 'flex',
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'column',

                        maxHeight: '800px',
                        // maxHeight: '60vh',

                        zIndex: 1000,

                    }}
                >
                    <Typography>
                        Here are some of my latest projects
                    </Typography>
                </Box>

                <MemoizedWorkCardGrid
                    first
                    developer='Personal Project'
                    title='Portfolio Website'
                    date='2023'
                    description={descriptions.portfolio}
                    image={PersonalSiteImage}
                    technologies={[
                        {
                            label: 'React',
                            key: uuidv4(),
                        },
                        {
                            label: 'MUI',
                            key: uuidv4(),
                        },
                        {
                            label: 'Styled Components',
                            key: uuidv4(),
                        }
                    ]}
                />
                <MemoizedWorkCardGrid
                    right
                    developer='Experity'
                    title='REsight'
                    date='2021'
                    description={descriptions.resight}
                    image={ResightWebImage}
                    technologies={[
                        {
                            label: 'React',
                            key: uuidv4(),
                        },
                        {
                            label: 'React Native',
                            key: uuidv4(),
                        },
                        {
                            label: 'Styled Components',
                            key: uuidv4(),
                        },
                        {
                            label: 'Redux',
                            key: uuidv4(),
                        },
                        {
                            label: 'MySQL',
                            key: uuidv4(),
                        },
                        {
                            label: 'SQLite',
                            key: uuidv4(),
                        },
                        {
                            label: 'Node.js',
                            key: uuidv4(),
                        },
                    ]}
                />
                <MemoizedWorkCardGrid
                    developer='YEY'
                    title='Futuro Estágios'
                    date='2019'
                    description={descriptions.futuroEstagios}
                    image={FuturoEstagiosImage}
                    technologies={[
                        {
                            label: 'React',
                            key: uuidv4(),
                        },
                        {
                            label: 'MUI',
                            key: uuidv4(),
                        },
                        {
                            label: 'Styled Components',
                            key: uuidv4(),
                        },
                        {
                            label: 'MySQL',
                            key: uuidv4(),
                        },
                        {
                            label: 'Node.js',
                            key: uuidv4(),
                        },
                    ]}
                />
            </Box>
        </Box>
    )
}

export default memo(Work)
