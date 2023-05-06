import React, { useEffect, useRef, useCallback, } from 'react'
import { Box, Typography, } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { PageTitle, HiddenBox, CustomListItem, } from 'components'
import { motion, useAnimation, } from 'framer-motion'

const ExperienceCard = ({ role, company, period, description, }) => {
    // ACCORDION

    const initialTitleValue = { x: '-100%', opacity: 0, }
    const initialDetailsValue = { y: '-100%', opacity: 0, }
    const titleControls = useAnimation()
    const detailsControls = useAnimation()
    const experienceCardRef = useRef(null)

    const { ref: inViewExperienceCardRef, inView: inViewExperienceCard, entry: entryAbout } = useInView({
        delay: 100,
        threshold: 0.1,
    })

    const setExperienceCardRef = useCallback((node) => {
        experienceCardRef.current = node
        inViewExperienceCardRef(node)
    }, [inViewExperienceCardRef])

    useEffect(() => {
        console.log('inViewExperienceCard exp', inViewExperienceCard)

        if (inViewExperienceCard) {
            titleControls.start({
                opacity: 1,
                x: 0,
            })
            detailsControls.start({
                opacity: 1,
                y: 0,
            })
        }
        // else {
        //     titleControls.start({
        //         opacity: 0,
        //         x: right ? '100%' : '-100%',
        //     })
        //     workCardImageControls.start({
        //         opacity: 0,
        //     })
        // }
    }, [inViewExperienceCard])

    return (
        <Box
            ref={setExperienceCardRef}
            sx={{
                flex: 1,
                display: 'flex',
                gridRow: { md: '1' },
                gridColumn: { md: '1 / 6' },
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
                mt: 8,
            }}
        >
            <Typography
                sx={{
                    m: 0,
                    mb: 1,
                }}
                component={motion.div}
                initial={initialTitleValue}
                animate={titleControls}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.1, 0.2, .24, 1]
                }}
            >
                {role}
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    zIndex: 3,
                    position: 'static',
                    fontWeight: 'bold',
                    mb: 1,
                }}
                component={motion.div}
                initial={initialTitleValue}
                animate={titleControls}

                transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0.1, 0.2, .24, 1]
                }}
            >
                {company}
            </Typography>
            <Typography
                sx={{
                    m: 0,
                    mb: 2,
                }}
                component={motion.div}
                initial={initialTitleValue}
                animate={titleControls}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.1, 0.2, .24, 1]
                }}
            >
                {period}
            </Typography>
            <HiddenBox>
                <Box
                    component={motion.div}
                    initial={initialDetailsValue}
                    animate={detailsControls}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: [0.1, 0.2, .24, 1]
                    }}
                    sx={{
                        zIndex: 3,
                        borderRadius: 1,
                        padding: 3,
                        position: 'relative',
                        backgroundColor: 'background.mainGlass',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {description.map((itemValue) => {
                        return (
                            <CustomListItem label={itemValue} />
                        )
                    })
                    }
                </Box>
            </HiddenBox>
        </Box>
    )
}

const Experience = ({ experienceRef, experienceControls, }) => {

    console.log('Experience render')

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                width: '100%',
                paddingTop: 16,
                paddingBottom: 16,
                flexDirection: 'column',
                overflow: 'hidden',
            }}
            ref={experienceRef}
        >
            <PageTitle title='Experience' titlePosition='right' />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    maxHeight: '800px',
                    zIndex: 1000,
                }}
            >
                <Typography>
                    Here are the companies I worked during the last years:
                </Typography>
            </Box>

            <ExperienceCard
                role='Software Engineer'
                company='Accenture'
                period='January 2022 - Present'
                description={[
                    'Developed foundation code of a web application for an internal project using primarily React, TypeScript, HTML, CSS and MUI.',
                    'Automated API documentation in Next.js.',
                    'Fixed bugs and implemented different quality of life features.',
                ]}
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

            <ExperienceCard
                role='Software Developer'
                company='Experity - REsight'
                period='December 2019 - December 2021'
                description={[
                    'For more than 2 years I worked with a team on the development of a eCRM application that consisted of a web and mobile app.',
                    'I acted in different areas during this project but mostly in the development of the mobile application, using primarily React Native, JavaScript (ES6+), HTML, CSS and SQLite.',
                    'Worked together with a team of developers and designers to build friendly, consistent and responsive user experiences across the entire application.',
                    'Wrote an extensive and comprehensive documentation for the project handover.',
                ]}
            />

            {/* <Accordion
                role='Software Developer'
                company='Experity - REsight'
                period='December 2019 - December 2021'
                description={[
                    'For more than 2 years I worked with a team on the development of a eCRM application that consisted of a web and mobile app.',
                    'I acted in different areas during this project but mostly in the development of the mobile application, using primarily React Native, JavaScript (ES6+), HTML, CSS and SQLite.',
                    'Worked together with a team of developers and designers to build friendly, consistent and responsive user experiences across the entire application.',
                    'Wrote an extensive and comprehensive documentation for the project handover.',
                ]}
            /> */}
        </Box>
    )
}

export default Experience
