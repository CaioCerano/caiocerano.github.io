import React from 'react'
import { motion, } from 'framer-motion'

import { Box, Typography, } from '@mui/material'
import { Link, PageTitle, } from 'components'


const Contact = ({ contactRef, contactControls, }) => {
    console.log('Contact render')

    return (
        <Box
            sx={{
                flex: 1,
                width: '100%',
                paddingTop: 16,
                paddingBottom: 16,
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            ref={contactRef}
            onScroll={(e) => console.log('onscroll', e)}
        >
            <motion.div
                initial={{ opacity: 1, }}
                animate={contactControls}
                transition={{
                    duration: 1.5,
                    delay: 0,
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    zIndex: 1000,
                }}
            >
                <PageTitle title='Contact' titlePosition='right' />
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
                    <Typography paragraph>
                        Feel free to contact me for opportunies or any question that you may have and I’ll try my best to get back to you as soon as I can!
                    </Typography>
                    <Typography paragraph>
                        My email is <Link target='_blank' onClick={() => window.open('mailto:caiocerano@gmail.com')}> caiocerano@gmail.com </Link>
                    </Typography>
                </Box>
            </motion.div>
        </Box>
    )
}

export default Contact
