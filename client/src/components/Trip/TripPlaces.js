import React, { useContext } from 'react'
import styled from "styled-components"
import { PlaceContext } from '../PlaceContext'
import { ImLocation } from 'react-icons/im'
import { ImPhone } from "react-icons/im"
import { ImMap2 } from "react-icons/im"
import { ImBin } from 'react-icons/im'
import { ImSphere } from 'react-icons/im'



const TripPlaces = ({ place }) => {

    const { removePlace } =  useContext(PlaceContext)

    const removePlaceHandler = (ev, place) => {
        ev.preventDefault();
        ev.stopPropagation();

        removePlace(place);
    }


    return (
        <Wrapper>
            <div>
                {place?.placeCategory && 
                <p style={{fontWeight: "bolder"}}><ImMap2 color="#BBBCD8" style={{marginRight: "10px"}} />{place?.placeCategory}</p>
                }
                <p>{place?.placeName}</p>
                {place?.placeAddress && 
                <p><ImLocation/>{place?.placeAddress}</p>
                }
                {place?.placePhone && 
                <p><ImPhone />{place?.placePhone}</p>
                }
                {place?.placeWebsite && 
                <WebBtn onClick={() => window.open(place?.placeWebsite, '_blank')}><ImSphere />Website</WebBtn>
                }
            </div>
            <ImgContainer>
                <StyledImg src={place?.placeImage} alt="place" />
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
margin-top: 10px;
margin-bottom: 20px;
padding: 10px;
justify-content: space-around;
border-radius: 10px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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

const WebBtn = styled.button`
border: none;
color: white;
border-radius: 5px;
background:var(--blue-fountain);
font-weight: 500;
padding: 5px 15px;
margin-left: 7px;

&:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}

`;


export default TripPlaces
