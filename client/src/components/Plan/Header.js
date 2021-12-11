import React, { useState } from 'react'
import { Autocomplete } from "@react-google-maps/api"
import styled from 'styled-components'
import Car from "../../images/Logo/Car.png"


const Header = ({ setCoordinates }) => {

        const [autocomplete, setAutocomplete] = useState(null);

        const onLoad = (autoC) => setAutocomplete(autoC);

        const onPlaceChanged = () => {
            const lat = autocomplete.getPlace().geometry.location.lat();
            const lng = autocomplete.getPlace().geometry.location.lng();

            setCoordinates({ lat, lng });
        };

    return (
        <Wrapper>
            <Title>
            <Logo src={Car} alt="logo" />
            <StyledSpan>Explore more cities</StyledSpan>
            </Title>
            <SearchBar>
            <Autocomplete  onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <StyledInput  placeholder='where next...?' />
            </Autocomplete>
            </SearchBar>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
height: 80px;
width: 50%;
background: var(--yellow-glow);
color: #FFFFFF;   
text-align: center;

padding: 20px;
box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;


`;
const Title = styled.div`
	display: flex;
	justify-content: flex-start;

`;

const StyledSpan = styled.span`
margin-top: 15px;
font-weight: bolder;

`;

const SearchBar = styled.div`
margin-right: 30px;

`;

const StyledInput = styled.input`
width: 220px;
border: none;
margin-top: 15px;
padding: 5px 5px;
border-radius: 2px;
text-indent: 5px;


`;



const Logo = styled.img`
max-width: 300px;
height: auto;

`;

export default Header
