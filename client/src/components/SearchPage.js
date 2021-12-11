import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from './Calendar/DatePicker'
import styled from "styled-components"
import TopNav from './NavMenu/TopNav'
import { Autocomplete } from "@react-google-maps/api"


const SearchPage = ({ setCoordinates }) => {

    const [autocomplete, setAutocomplete] = useState(null);


    let history = useHistory();

    const clickHandler = (ev) => {
        ev.preventDefault();
        history.push("/plan")
    }

    const onLoad = (autoC) => setAutocomplete(autoC);


    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
        };


    return (
        <div>
        <TopNav/>
        <Wrapper>
            <Title>Plan a new trip</Title>
            <div>
                <form>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <StyledInput placeholder="Where to?" />
                    </Autocomplete>
                    <DatePicker />
                    <StyledBtn onClick={(ev) => clickHandler(ev)}>Start planning</StyledBtn>
                </form>
            </div>
        </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px auto;

`;

const Title = styled.h1`
text-align: center;

`;

const StyledInput = styled.input`
margin: 10px 0;
width: 410px;
padding: 5px;

`;


const StyledBtn = styled.button`
align-self: center;
color: #FFFFFF;
background: var(--burnt-sienna);
font-size: 16px;
font-weight: bolder;
border: none;
padding: 10px 30px;
margin-top: 10px;
font-family: var(--font-family);
cursor: pointer;

&:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

`;

export default SearchPage


