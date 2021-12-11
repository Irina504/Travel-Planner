import React from 'react'
import { useHistory } from "react-router"
import TopNav from './NavMenu/TopNav'
import traveller from "../images/Banner/traveller.jpg"

import styled from "styled-components"

const LandingPage = () => {

    let history = useHistory();

    const handleClick = (ev) => {
        ev.preventDefault();
        history.push("/search")
    }

    return (
        <div>
            <TopNav />
            <StyledImg src={traveller} alt="traveller"/>
            <Title>The coolest way to plan your trip</Title>
            <ArtWrapper>
                <StyledArt>
                Planning a trip can feel like both the most exciting AND
                the most overwhelming part of travel. Sure, creating a Pinterest board
                full of gorgeous pictures is fun, but then you start trying to figure out
                the actual logistics and it hits you … oh God, this is SO MUCH WORK. Cue panic attacks.
                We're here hopefully to help … 
                </StyledArt>
            </ArtWrapper>
            <StartBtn onClick={(ev) => handleClick(ev)}>Start planning a trip</StartBtn>
        </div>
    )
}


const StyledImg = styled.img`
background-repeat: no-repeat;
max-width:900px;
max-height:100vh;
width: auto;
height: auto;
float: right;
z-index: 1;
position: absolute;
top:0;
right:0;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

const Title = styled.h1`
margin-top: 80px;
font-family: var(--font-family);
font-weight: bold;
padding: 10px;
margin-left: 50px;


`;

const ArtWrapper = styled.div`
width: 600px;
height: auto;
margin-left: 100px;
margin-bottom: 70px;
`;

const StyledArt = styled.article`
padding: 10px;

`;

const StartBtn = styled.button`
color: #FFFFFF;
background: var(--burnt-sienna);
font-size: 16px;
font-weight: bolder;
border: none;
padding: 20px 60px;
margin-left: 400px;
font-family: var(--font-family);
cursor: pointer;

&:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

`;


export default LandingPage
