import React, { useState, } from 'react'
import styled from 'styled-components'
import { useTheme, } from '@mui/material/styles'

const LinkStyled = styled.a`
    color: ${props => props.primaryColor};
    position: relative;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${props => props.purple};
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    :hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    :hover {
        color:${props => props.purple};
        transition: .3s ease-in-out;
        -webkit-transition: .3s ease-in-out;
    }
`

const Link = (props) => {
    const { children, target, onClick, } = props
    
    const theme = useTheme()

    return <LinkStyled target={target} onClick={onClick} primaryColor={theme.palette.text.main} purple={theme.palette.primary.purple}>{children}</LinkStyled>
}

export default Link
