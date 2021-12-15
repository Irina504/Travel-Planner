import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { PlaceContext } from '../PlaceContext'
import { ImLocation } from 'react-icons/im'
import { ImPhone } from "react-icons/im"
import { ImMap2 } from "react-icons/im"
import { ImBin } from 'react-icons/im'
import { ImSphere } from 'react-icons/im'



const TripPlaces = ({ place }) => {

    const {
        addPlace,
        removePlace,
    } = useContext(PlaceContext)


    return (
        <Wrapper>
            <div>
                <ImMap2 />
            </div>
            <div>
                <p>{place?.placeCategory}</p>
                <p>{place?.placeName}</p>
                <p><ImLocation/>{place?.placeAddress}</p>
                <p><ImPhone />{place?.placePhone}</p>
                <Link onClick={() => window.open(place?.website, '_blank')}><ImSphere />{place?.placeWebsite}</Link>

            </div>
            <ImgContainer>
                <StyledImg src={place?.placeImage} />
            </ImgContainer>
            <div>
                <ImBin />
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
display: flex;
width: 100%;
margin: auto;
margin: 15px;
padding: 10px;
border: 1px solid gray;

justify-content: space-around;



`;



const ImgContainer = styled.div`
width: 100px;
height: 100px;
justify-content: center;
display: flex;
overflow: hidden;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;


const StyledImg = styled.img`
flex: 1;
height: 100%;
`;


export default TripPlaces
