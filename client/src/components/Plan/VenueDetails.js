import React from 'react'
import styled from "styled-components"
import placeHolderPhoto from "../../images/PlaceholderPhoto.jpg"
import { ImLocation } from "react-icons/im" // location 
import { ImPhone } from "react-icons/im"
import Rating from '@material-ui/lab/Rating'

const VenueDetails = ({ place, selected, refProp }) => {
    // console.log(place)

    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block:"start" })

    return (
        <>
        <Wrapper>
            <ImgContainer>
                <StyledImg src={place.photo ? place.photo.images.large.url : placeHolderPhoto } alt="media" />
            </ImgContainer>
            <div>
                <p style={{fontSize:'16px', fontWeight:'bolder', color:'#50AAB3', marginTop:'10px'}}>{place.name}</p>
                <div style={{ display: 'flex', justifyContent:'space-between'}}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <p style={{color: '#c8d6e5', fontSize:'14px'}}>{place.num_reviews} review{place.num_reviews > 1 && 's'}</p>
                </div>
                <div style={{ display: 'flex', justifyContent:'space-between'}}>
                    <p style={{paddingTop:'5px',fontSize: '15px'}}>Price</p>
                    <p style={{color: '#EE585A'}}>{place.price_level}</p>
                </div>

                <div style={{ display: 'flex', justifyContent:'space-between'}}>
                    <p style={{fontSize: '15px'}}>Ranking</p>
                    <p  style={{fontSize: '14px'}}>{place.ranking}</p>
                </div>
            <div>
                {place?.cuisine?.map(({name}) => {
                    return <CuisineSpan key={name}>{name}</CuisineSpan>
                })}
                {place?.address && (
                    <p style={{fontSize: '12px', paddingTop:'5px'}}>
                    <ImLocation size={12} />{place.address}
                    </p>
                )}
                {place?.phone && (
                    <p style={{fontSize: '12px', paddingTop:'2px'}}>
                    <ImPhone size={12} />{place.phone}
                    </p>
                )}
                <div>
                    <WebBtn onClick={() => window.open(place?.website, '_blank')}>Website</WebBtn>
                    <AddBtn>Add to trip</AddBtn>
                </div>
            </div>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 420px;

/* align-items: flex-start; */
/* border: 1px solid var(--blue-fountain); */
margin: 10px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

`;

const ImgContainer = styled.div`
width: 400px;
height: 400px;
justify-content: center;
display: flex;
flex-direction: row;
overflow: hidden;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;



`;
const StyledImg = styled.img`
flex: 1;
height: 100%;

`;

const CuisineSpan = styled.span`
padding: 1px 5px;
margin: 3px;
background: #c8d6e5;
border-radius: 5px;
font-size: 10px;

`;

const WebBtn = styled.button`
margin-top: 10px;
padding: 5px 10px;
border: none;
color: white;
border-radius: 5px;
background:var(--blue-fountain);
font-weight: 500;


`;

const AddBtn = styled.button`
margin-top: 10px;
margin-left: 10px;
padding: 5px 10px;
border: none;
color: white;
border-radius: 5px;
background: var(--burnt-sienna);
font-weight: 500;
`;


export default VenueDetails
