import React from 'react'
import LogoutButton from './Login/LogOutButton'

import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper>
            <LogoutButton />
        </Wrapper>
    )
}

const Wrapper = styled.div`
position:absolute;
bottom: 0;
width:100%;
height:60px;
background: var(--wet-asphalt);

`;


export default Footer
