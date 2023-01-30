import React from 'react'
import { motion, useAnimation, } from 'framer-motion'
import { LinkedIn, GitHub, EmailOutlined, } from '@mui/icons-material'

import { Box, Typography, Divider, } from '@mui/material'

import './Main.css'

const MotionRightBar = () => {
    return (
        <Box sx={{
            width: { md: 'none', lg: '30vw' },
            // width: '530px',

            zIndex: 1000,
            height: '100vh',
            right: 0,
            position: 'absolute',
        }}>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100%' }}
                transition={{
                    duration: 1,
                    delay: 0.4,
                }}
            >
                <div className='test' />
            </motion.div>
        </Box>
    )
}

const Main = () => {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                // width: '90%',
                // maxWidth: '960px',

            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    width: { md: '100%', lg: 'calc(100% - 330px)' },

                    // GRIIIIIIIIIIIID
                    // maxWidth: '960px',

                    // width: { md: '100%', lg: 'calc(100% - 380px)' },
                    // px={{ xs: 8, sm: 16, md: 48 }}
                    // width: { md: '100%', lg: 'calc(100% - 530px)' },

                    height: '100vh',
                    minHeight: '300px',
                }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    style={{
                        flex: 1,
                        display: 'flex',

                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        zIndex: 1000,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',

                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',

                            zIndex: 1000,
                        }}
                    >
                        <Typography variant='h6' >
                            Hey, my name is
                        </Typography>
                        {/* <Typography
                        variant='h6'
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        My name is
                    </Typography> */}
                        <Typography
                            sx={{
                                paddingTop: 2,
                                paddingBottom: 2,
                                fontSize: { xs: '6em', sm: '6em', md: '7em', lg: '8em', xl: '8em' }
                                // fontSize: '6em'
                            }}
                        >
                            Caio Cerano
                        </Typography>
                        <Typography variant='h6' sx={{ width: '70%' }}>
                            I’m a software engineer specialized in creating and designing user focused experiences. (new technologies...)
                        </Typography>
                    </Box>
                </motion.div>

                {/* <Divider
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '1px',
                        // borderColor: 'text.primary',
                        mb: 4
                    }}
                /> */}
                {/* <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'primary.main',
                        mb: 4
                    }}
                /> */}

                {/* <MotionRightBar /> */}
            </Box>
        </Box>
    )
}

export default Main
