import React, { useRef, useState, } from 'react'
import { Box, } from '@mui/material'

const HoverBox = (props) => {
    const {
        children,
        showBorder = true,
        showInside = false,
        borderEffect,
        insideEffect,
    } = props

    const cardRef = useRef()

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const handleMouseMove = e => {
        e.persist()

        const rect = cardRef.current.getBoundingClientRect()

        const xNewValue = e.clientX - rect.left
        const yNewValue = e.clientY - rect.top

        setX(xNewValue)
        setY(yNewValue)
    }


    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <Box
                ref={cardRef}
                sx={{
                    display: 'flex',
                    // height: '100%',
                    width: '100%',

                    backgroundColor: 'rgba(255, 255, 255, 0.03)',

                    borderRadius: 1,
                    // cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',

                    // ':before': {
                    //     borderRadius: 'inherit',
                    //     content: '""',
                    //     height: '100%',
                    //     left: '0px',
                    //     opacity: 0,
                    //     position: 'absolute',
                    //     top: '0px',
                    //     transition: 'opacity',
                    //     width: '100%',
                    //     transitionDuration: '500ms',
                    //     transitionTimingFunction: 'ease',
                    //     zIndex: 3,

                    //     background:`radial-gradient(800px circle at ${x}px ${y}px, rgba(143, 16, 178, 0.06), transparent 40%)`,
                    //     // background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.06), transparent 30%)`,
                    // },

                    ':after': {
                        borderRadius: 'inherit',
                        content: '""',
                        height: '100%',
                        left: '0px',
                        opacity: 0,
                        position: 'absolute',
                        top: '0px',
                        transition: 'opacity',
                        width: '100%',
                        transitionDuration: '500ms',
                        transitionTimingFunction: 'ease',
                        zIndex: 1,

                        background: `radial-gradient(600px circle at ${x}px ${y}px,rgba(143, 16, 178, 1), transparent 40%)`,
                        // background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.4), transparent 30%)`,
                    },

                    ':hover:after': {
                        opacity: 1,
                    },
                    ':hover:before': {
                        opacity: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        borderRadius: 'inherit',
                        display: 'flex',
                        backgroundColor: 'background.main',
                        flexDirection: 'column',
                        // flexGrow: 1,
                        margin: '1px',
                        zIndex: 2,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </div>
    )
}

export default HoverBox