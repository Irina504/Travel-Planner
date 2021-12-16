import React, { useState, useEffect, useContext  } from 'react'
import { useParams } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { ImPhone } from "react-icons/im"
import { ImMap2 } from "react-icons/im"
import { ImBin } from 'react-icons/im'
import { ImSphere } from 'react-icons/im'
import { ImPencil } from 'react-icons/im'
import TopNav from '../NavMenu/TopNav'

import styled from "styled-components"
import { PlaceContext } from '../PlaceContext'

const TripDetails = () => {

    const {_id} = useParams()
    const { setIsLoading } =  useContext(PlaceContext)

    const [selectedTrip, setSelectedTrip] = useState({})
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        setIsLoading(true)
        fetch(`/trip/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data)
        setSelectedTrip(data.data);
        setIsLoading(false)
    })
    .catch((err) => {
        console.error("Error", err);
    });

    }, [_id])

    const updateTrip = (ev) => {
        ev.preventDefault();
        setIsLoading(true);

        fetch(`/trips/updateTrip/${_id}`, {
            method: "PUT",
            body: JSON.stringify(selectedTrip),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((res) => {
            setStatus("updated")
        }).catch((err) => {
            console.log("Error", err)
            setStatus("error")
        })
    }

    const deleteTrip = (ev) => {
        ev.preventDefault();
        setIsLoading(true);

        fetch(`/trips/deleteTrip/${_id}`, {
            method: "DELETE",
            body: JSON.stringify(selectedTrip),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setSelectedTrip({})
            setStatus("deleted")
        }).catch((err) => {
            console.log("Error", err)
            setStatus("error")
        })
    }



    return (
        <>
            <TopNav />
            <MainContainer>
            <Title><ImMap2 style={{paddingRight:"20px"}} />My Trip to {selectedTrip.city}</Title>
            {selectedTrip?.trip?.map((place, index) => {
                return (
                    <Wrapper key={Math.floor(Math.random() * 1400000000000)}>
                        <div>
                            {place?.placeCategory && 
                                <p>{place?.placeCategory}</p>
                            }
                                <p>{place?.placeName}</p>
                            {place?.placeAddress && 
                                <p><ImLocation/>{place?.placeAddress}</p>
                            }
                            {place?.placePhone && 
                                <p><ImPhone/>{place?.placePhone}</p>
                            }
                            {place?.website && 
                                <button onClick={() => window.open(place?.website, '_blank')}><ImSphere/>Website</button>
                            }
                        </div>
                        <ImgContainer>
                            <StyledImg src={place?.placeImage} alt="place-image" />
                        </ImgContainer>
                    </Wrapper>
                )
            })}
                </MainContainer>
                <EditWrapper>
                    <button onClick={(ev) => deleteTrip(ev)}><ImPencil/></button>
                    <button><ImBin /></button>
                </EditWrapper>
        </>
    )
}

const MainContainer = styled.div`
margin: 10px;
padding: 10px;
margin-bottom: 50px;


`;

const Wrapper = styled.div`
display: flex;
width: 60%;
margin: auto;
margin-bottom: 20px;
padding: 10px;
justify-content: space-between;


`;

const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center
margin: 50px 20px;
padding: 20px 50px;

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
justify-content: flex-end;

`;



export default TripDetails
