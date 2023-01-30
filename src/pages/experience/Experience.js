import React, { useState, } from 'react'

import { Box, IconButton, Typography, Grid, Card, CardContent, CardActions, Collapse, Stack, List, ListItem, ListItemIcon, ListItemText, } from '@mui/material'
import { styled } from '@mui/material/styles'
import { v4 as uuidv4 } from 'uuid'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { motion, useAnimation, } from 'framer-motion'
import CircleIcon from '@mui/icons-material/Circle'

const CustomListItem = ({ label }) => {
    return (
        <ListItem sx={{ paddingBottom: 0, paddingLeft: 0, padding: 0, marginBottom: '8px', }}>
            <ListItemIcon
                sx={{
                    marginRight: 1.5,
                    minWidth: '0px',
                }}
            >
                <CircleIcon
                    sx={{
                        fontSize: '6px',
                        color: 'text.primary',
                        p: 0,
                    }}
                />
            </ListItemIcon>
            <ListItemText
                // primary={label}
                sx={{ marginTop: 0, }}
            >
                <Typography
                    sx={{
                        color: 'text.primary',
                    }}
                >
                    {label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}

const ExperienceCard = ({ role, company, period, description, }) => {
    // ACCORDION
    const technologies = [
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
    ]
    return (
        <Box
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
            >
                {role}
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    zIndex: 3,
                    // color: 'primary.purple',
                    position: 'static',
                    fontWeight: 'bold',
                    mb: 1,
                }}
            >
                {company}
            </Typography>
            <Typography

                sx={{
                    m: 0,
                    mb: 2,
                    // '&:nth-of-type(even)': {
                    //     textAlign: 'right',
                    // }
                }}
            >
                {period}
            </Typography>
            <Box

                sx={{
                    zIndex: 3,

                    borderRadius: 1,
                    padding: 3,
                    position: 'relative',

                    backgroundColor: 'background.mainGlass',
                    backdropFilter: 'blur(10px)',
                    // color: 'primary.white',
                }}
            >
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa metus, efficitur a sodales nec, posuere sed est.
                </Typography>
                <Typography paragraph>
                    Quisque dictum nibh metus. Aliquam ac sapien aliquet magna pellentesque lacinia. Cras pulvinar elit turpis, at pretium ipsum congue eget. Sed eget dictum sapien, sed mattis libero. Morbi pulvinar sem non ligula dapibus cursus. Phasellus dolor dui, convallis vel vestibulum vitae, maximus sit amet mauris. Sed tellus est, feugiat vel ipsum sed, scelerisque ultricies risus.
                </Typography>
                <Typography paragraph>
                    Phasellus consequat velit ac diam placerat varius. Proin ultrices felis metus, eget molestie nisl bibendum nec. Aliquam posuere nibh sit amet hendrerit luctus.
                </Typography>
                <Grid container>
                    <Grid item sx={{ marginRight: 16, }}>
                        <List sx={{ padding: 0, }}>
                            <CustomListItem label='JavaScript (ES6+)' />
                            <CustomListItem label='React' />
                            <CustomListItem label='HTML5' />
                            <CustomListItem label='Node.js' />
                        </List>
                    </Grid>
                    <Grid item>
                        <List sx={{ padding: 0 }}>
                            <CustomListItem label='TypeScript' />
                            <CustomListItem label='React Native' />
                            <CustomListItem label='CSS3' />
                            <CustomListItem label='MySQL' />
                        </List>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

const Experience = ({ experienceRef, experienceControls, }) => {

    console.log('Experience render')

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                width: '100%',
                // height: '100vh',
                paddingTop: 16,
                paddingBottom: 16,
                flexDirection: 'column',
                overflow: 'hidden',
            }}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            ref={experienceRef}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',

                    width: '100%',
                    paddingBottom: 4,
                }}
            >

                <Box
                    sx={{
                        flexGrow: 1,
                        height: '1px',
                        backgroundColor: 'text.main',
                        marginRight: 4,
                    }}
                />
                <Typography variant='h3'>
                    Experience
                </Typography>
            </Box>
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
                    Here are the companies I worked for the last 3 years:
                </Typography>
            </Box>

            <ExperienceCard
                role='Software Engineer'
                company='Accenture'
                period='January 2021 - Current'
                description='Currently developing foundation code of a web application for an internal project.'
            />

            <ExperienceCard
                role='Software Developer'
                company='Experity - REsight'
                period='December 2019 - December 2021'
                description='Developed a mobile application focused on eCRM.'
            />            

            {/* <Grid
                container
                sx={{
                    pt: 2,
                }}
            >
                <Grid
                    item
                    md={12}
                    lg
                    container
                    sx={{
                        // backgroundColor: 'red',
                    }}
                >
                    <ExperienceCard
                        role='Software Developer'
                        company='Experity - REsight'
                        period='December 2019 - December 2021'
                        description='Developed a mobile application focused on eCRM.'
                    />
                </Grid>
                <Grid
                    item
                    md={12}
                    lg
                    container
                    sx={{
                        // backgroundColor: 'green',
                    }}
                >
                    <ExperienceCard
                        role='Software Engineer'
                        company='Accenture'
                        period='January 2021 - Current'
                        description='Currently developing foundation code of a web application for an internal project.'
                    />
                </Grid>
            </Grid> */}
            {/* <ExperienceCard2
                image={Experity2Logo}
            // image={ExperityLogo}
            /> */}
        </Box>
    )
}

export default Experience
