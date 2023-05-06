import React from 'react'
import { Box, Typography, } from '@mui/material'

const PageTitle = (props) => {
    const { title,
        titlePosition = 'left',
        boxProps,
        component,
        initial,
        animate,
        transition,
    } = props

    const Title = () => {
        return <Typography variant='h3'>
            {title}
        </Typography>
    }

    const Bar = () => {
        return <Box
            sx={{
                flexGrow: 1,
                height: '1px',
                backgroundColor: 'text.main',
                ml: titlePosition === 'left' && 4,
                mr: titlePosition !== 'left' && 4,
            }}
        />
    }

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                pb: 4,
                width: '100%'
            }}
            component={component}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {titlePosition === 'left'
                ?
                <>
                    <Title />
                    <Bar />
                </>
                :
                <>
                    <Bar />
                    <Title />
                </>
            }
        </Box>
    )
}

export default PageTitle