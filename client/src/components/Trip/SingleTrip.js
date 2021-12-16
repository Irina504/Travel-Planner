import React, { useContext  } from 'react'
import { useHistory  } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner';
import { PlaceContext } from '../PlaceContext';
import moment from 'moment';

import styled from "styled-components"

const SingleTrip = ({trip}) => {

    let history = useHistory();

    const { isLoading } = useContext(PlaceContext)

    const onClick = (ev) => {
        ev.stopPropagation()
        ev.preventDefault();
        history.push(`/trip/${trip._id}`)
    }


    if (isLoading === true ) {
        return (
            <LoadingSpinner />
        )
    } else {

        return (
            <Wrapper onClick={onClick}>
                <h5>Trip to {trip.city}</h5>
                <ImgContainer>
                <StyledImg src={trip?.trip[0]?.placeImage} alt="city" />
                </ImgContainer>
                <p>{moment(trip.startDate).format("MMM D")} - {moment(trip.endDate).format("MMM D")}</p>
            </Wrapper>
        )
    }
}

const Wrapper  = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

const ImgContainer = styled.div`
width: 200px;
height: 200px;
margin: 5px;
margin-top: 8px;
justify-content: center;
display: flex;
overflow: hidden;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

&:hover {
    opacity: 1;
    -webkit-transform: scale(1.1) ease-in-out;
    transform: scale(1.1);
} 


`;

const StyledImg = styled.img`
flex: 1;
height: 100%;

`;

export default SingleTrip
