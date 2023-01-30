import React from 'react'
import { Box, } from '@mui/material'

const HiddenBox = ({ children, sx }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                width: '100%',
                overflow: 'hidden',
                p: 0,
                m: 0,
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}

export default HiddenBox