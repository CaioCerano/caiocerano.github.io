import React, { useState, } from 'react'
import { motion, } from 'framer-motion'
import styled from 'styled-components'

import { Box, Typography, Collapse, Alert, Button, Snackbar, } from '@mui/material'
import { Link, } from '../../components'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

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
                // initial={{ translateX: '-100vw', }}
                animate={contactControls}
                // animate={{ opacity: 1, }}
                transition={{
                    duration: 1.5,
                    delay: 0,
                }}
                style={{
                    display: 'flex',
                    // flex: 1,

                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    zIndex: 1000,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',

                        width: '100%',
                        paddingBottom: 4
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            height: '1px',
                            backgroundColor: 'primary.main',
                            marginRight: 4,
                        }}
                    />
                    <Typography variant='h3'>
                        Contact
                    </Typography>
                </Box>
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
