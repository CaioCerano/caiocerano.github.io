import React from 'react'
import { Typography, } from '@mui/material'

const Paragraphs = (props) => {
    const {
        items,
    } = props

    return (
        <>
            {
                items.map((label) => {
                    return (
                        <Typography
                            paragraph
                        >
                            {label}
                        </Typography>
                    )
                })
            }
        </>
    )
}

export default Paragraphs
