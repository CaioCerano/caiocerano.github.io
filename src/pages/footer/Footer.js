import React from 'react'
import { Box, } from '@mui/material'
import { Link, } from 'components'

const Footer = () => {
    console.log('Footer render')

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                paddingTop: 32,
                paddingBottom: 4,
                justifyContent: 'center',
            }}
        >
            <Link onClick={() => window.open('https://github.com/CaioCerano/caiocerano.github.io')}>
                Designed & Built by Caio Cerano Silva
            </Link>
        </Box>
    )
}

export default Footer
