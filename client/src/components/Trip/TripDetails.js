import React, { useState, useEffect, useContext  } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { ImPhone } from "react-icons/im"
import { ImMap2 } from "react-icons/im"
import { ImBin } from 'react-icons/im'
import { ImSphere } from 'react-icons/im'
import TopNav from '../NavMenu/TopNav'

import styled from "styled-components"
import { PlaceContext } from '../PlaceContext'

const TripDetails = () => {

    const {_id} = useParams();
    let history = useHistory();

    const { setIsLoading } =  useContext(PlaceContext)
    const [selectedTrip, setSelectedTrip] = useState({})


    // fetch trip by its _id *************************

    useEffect(() => {
        setIsLoading(true)
        fetch(`/trip/${_id}`)
        .then((res) => res.json())
        .then((data) => {
        setSelectedTrip(data.data);
        setIsLoading(false)
    })
    .catch((err) => {
        console.error("Error", err);
    });

    }, [_id])

    // delete the fetched trip *************************

    const deleteTrip = (ev) => {
        ev.preventDefault();

        setIsLoading(true);
        fetch(`/trips/deleteTrip/${_id}`, {
            method: "DELETE",
            body: JSON.stringify({_id:selectedTrip._id}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .catch((err) => {
            console.log("Error", err)
        })
        history.push("/home")
        setIsLoading(false);
    }



    return (
        <>
            <TopNav />
            <MainContainer>
                <TitleDiv>
                    <div style={{display:"flex", justifyContent: "flex-start", alignItems: "center"}}>
                    <ImMap2 size={30} color="#BBBCD8" /><Title>... my trip to {selectedTrip.city}</Title>
                    </div>
                    <StyledBtn type="button" onClick={(ev) => deleteTrip(ev)}><ImBin size={30} /></StyledBtn>
                </TitleDiv>
            {selectedTrip?.trip?.map((place, index) => {
                return (
                    <Wrapper key={Math.floor(Math.random() * 1400000000000)}>
                        <div>
                            {place?.placeCategory && 
                                <StyledPara style={{fontWeight: "bolder"}}>{place?.placeCategory}</StyledPara>
                            }
                                <StyledPara>{place?.placeName}</StyledPara>
                            {place?.placeAddress && 
                                <p><ImLocation color="#BBBCD8"/>{place?.placeAddress}</p>
                            }
                            {place?.placePhone && 
                                <StyledPara><ImPhone color="#BBBCD8"/>{place?.placePhone}</StyledPara>
                            }
                            {place?.placeWebsite && 
                                <WebBtn onClick={() => window.open(place?.placeWebsite, '_blank')}><ImSphere/>Website</WebBtn>
                            }
                        </div>
                        <ImgContainer>
                            <StyledImg src={place?.placeImage} alt="place" />
                        </ImgContainer>
                    </Wrapper>
                )
            })}
                </MainContainer>
                <EditWrapper>
                    <StyledBtn type="button" onClick={(ev) => deleteTrip(ev)}><ImBin /></StyledBtn>
                </EditWrapper>
        </>
    )
}

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 60%;
margin: auto;
padding: 10px 20px;
margin-top: 20px;
margin-bottom: 50px;
color: var(--wet-asphalt);
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

`;

const TitleDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 3px 10px;
margin-bottom: 20px;


`;

const Wrapper = styled.div`
display: flex;
width: 100%;
margin: auto;
margin-bottom: 20px;
padding: 10px;
justify-content: space-between;

`;

const StyledPara = styled.p`
padding: 3px 5px;

`;

const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center
margin: 20px 10px;
padding: 20px 10px;

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

const EditWrapper = styled.div`
display: flex;
background: var(--wet-asphalt);
justify-content: flex-end;

`;

const StyledBtn = styled.button`
padding: 7px;
background: transparent;
border: none;
width: 50px;
height: 50px;
color:#EE585A;
margin-bottom: 10px;

&:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

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



export default TripDetails
