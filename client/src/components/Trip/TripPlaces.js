import React, { useContext } from 'react'
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
        // trip,
        // addPlace,
        removePlace,
    } = useContext(PlaceContext)

    const removePlaceHandler = (ev, place) => {
        ev.preventDefault();
        ev.stopPropagation();

        removePlace(place);
    }


    return (
        <Wrapper>
            <div>
                <ImMap2 />
            </div>
            <div>
                {place?.placeCategory && 
                <p>{place?.placeCategory}</p>
                }
                <p>{place?.placeName}</p>
                {place?.placeAddress && 
                <p><ImLocation/>{place?.placeAddress}</p>
                }
                {place?.placePhone && 
                <p><ImPhone />{place?.placePhone}</p>
                }
                {place?.website && 
                <Link onClick={() => window.open(place?.website, '_blank')}><ImSphere />{place?.placeWebsite}</Link>
                }
            </div>
            <ImgContainer>
                <StyledImg src={place?.placeImage} alt="place-image" />
            </ImgContainer>
            <div>
                <ImBin onClick={(ev) => removePlaceHandler(ev, place)} />
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
