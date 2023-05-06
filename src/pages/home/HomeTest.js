import React from 'react'
import { motion, } from 'framer-motion'
import { Box, Typography, } from '@mui/material'
import { useTheme, } from '@mui/material/styles'

import './Main.css'

const Home = () => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                width: '100%',
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
                    style={{
                        flex: 1,
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        zIndex: 1000,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',

                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            zIndex: 1000,
                        }}
                    >
                        <Typography
                        component={motion.div}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{
                                duration: 1,
                                delay: 0.7,
                            }}
                            variant='h6'
                        >
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
                        component={motion.div}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            sx={{
                                paddingTop: 2,
                                paddingBottom: 2,
                                textAlign: 'justify',
                                fontSize: { xs: '60px', sm: '6em', md: '7em', lg: '8em', xl: '8em' },

                                backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.purple}, #FF0080)`,
                                backgroundSize: '200% 200%',
                                animation: 'gradient 5s ease infinite',
                                // backgroundImage: `linear-gradient(90deg, #670f80, ${theme.palette.primary.purple})`,
                                ' -webkit-background-clip': 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Caio Cerano
                        </Typography>
                        <Typography
                        component={motion.div}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{
                                duration: 1,
                                delay: 0.7,
                            }}
                            variant='h6'
                            sx={{ width: '70%' }}
                        >
                            I’m a software engineer specialized in developing and designing user focused experiences.
                        </Typography>
                    </Box>
                </motion.div>
            </Box >
        </Box >
    )
}

export default Home
