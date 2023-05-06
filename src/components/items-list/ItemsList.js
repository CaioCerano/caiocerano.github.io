import React from 'react'
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

export const CustomListItem = ({ label }) => {
    return (
        <ListItem
            sx={{
                display: 'flex',
                p: 0,
                mb: '8px',
                alignItems: 'flex-start',
            }}
        >
            <ListItemIcon
                sx={{
                    mr: 1.5,
                    mt: '4px',
                    mb: '4px',
                    minWidth: '0px',
                }}
            >
                <CircleIcon
                    sx={{
                        fontSize: '6px',
                        color: 'text.primary',
                        height: '1.5rem', // Height of a Typography line = fontSize * lineHeight (1rem * 1.5),
                        p: 0,
                    }}
                />
            </ListItemIcon>
            <ListItemText sx={{ mr: 0, }}>
                <Typography sx={{ color: 'text.primary', }}>
                    {label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}

const ItemsList = (props) => {
    const {
        items,
    } = props

    const leftItems = []
    const rightItems = []

    for (const [index, value] of items.entries()) {
        if (index % 2)
            rightItems.push(value)

        else
            leftItems.push(value)
    }

    return (
        <Grid container>
            <Grid item sx={{ mr: 16, }}>
                <List sx={{ p: 0, }}>
                    {leftItems.map((itemValue) => {
                        return <CustomListItem label={itemValue} />
                    })}
                </List>
            </Grid>
            <Grid item>
                <List sx={{ p: 0 }}>
                    {rightItems.map((itemValue) => {
                        return <CustomListItem label={itemValue} />
                    })}
                </List>
            </Grid>
        </Grid>
    )
}

export default ItemsList