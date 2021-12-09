import React from 'react'
import { useHistory } from "react-router"
import TopNav from './NavMenu/TopNav'
import Petra from "../images/Banner/Petra.jpg"

import styled from "styled-components"

const LandingPage = () => {

    // let history = useHistory();

    // const handleClick = (ev) => {
    //     ev.preventDefault();
    //     history.push("/plan")
    // }

    return (
        <div>
            <TopNav />
            <StyledImg src={Petra} alt="Petra"/>
            <button>Start planning a trip</button>
        </div>
    )
}


const StyledImg = styled.img`
background-repeat: no-repeat;
max-width:900px;
max-height:600px;
width: auto;
height: auto;
float: right;
z-index: 1;
position: absolute;
top:0;
right:0;
`;



export default LandingPage
