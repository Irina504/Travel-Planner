import React, { useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react"; 
import { useHistory } from 'react-router-dom';

import travelAbs from '../../images/Banner/travelAbs.jpg'
import Car_Sienna from "../../images/Logo/Car_Sienna.png"

import LogoutButton from '../Login/LogOutButton';
import TripPlaces from './TripPlaces';

import { ImCalendar } from 'react-icons/im'

import styled from 'styled-components'
import { PlaceContext } from '../PlaceContext';


const TripPage = () => {

    let history = useHistory();

    const [selectedPlaces, setSelectedPlaces] = useState([]);
    
    const {trip,
        setTrips,
        clearTrip,
        tripInfo, 
        setTripInfo, 
        } = useContext(PlaceContext)

    // displaying user's photo if user is logged  in ******************* //
    
    const { user, isAuthenticated } = useAuth0();

    //*************************************************/

    // displaying destination, the start and end date of the trip******* //

    const destination = localStorage.getItem("city")
    const startDate = localStorage.getItem("startDate")
    const endDate = localStorage.getItem("endDate")
    let newStartDate = moment(startDate).format("MMM D")
    let newEndDate = moment(endDate).format("MMM D")

    // ****************************************************************//

    // making the logo a return to plan page to add new activities

    const returnToSearch = (ev) => {
        ev.preventDefault();
        history.push("/plan")
    }

    // add selected pages to localStorage and then save to MongoDb

    useEffect(() => {
        const data = localStorage.getItem("trip")
        if(data) {
            setSelectedPlaces(JSON.parse(data))
        }
    }, [])

    useEffect (() => {
        if (isAuthenticated) {
                setTripInfo({ 
                _id: uuidv4(), 
                name:user.name, 
                email: user.email, 
                city: localStorage.getItem("city"),
                trip: JSON.parse(localStorage.getItem("trip")),
                startDate: localStorage.getItem("startDate"), 
                endDate: localStorage.getItem("endDate"),
            })                
        }
            },[])


        const saveTripHandler = (ev) => {
            ev.preventDefault();
            console.log(tripInfo)
            fetch("/trip/addNewTrip", {
                method: "POST",
                body: JSON.stringify(tripInfo),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                })
                .then(localStorage.clear());
                history.push("/home")
                
        }

        // clear all places added to Trip *****************************************//

        const clearTripHandler = (ev) => {
            ev.preventDefault();
            ev.stopPropagation();

            clearTrip();
        }


        // Fetch all saved trips **************************************************//

        const seeTrips = (ev) => {
            ev.preventDefault();

                fetch("/trips")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                setTrips(data);
            })
            .catch((err) => {
                console.error("Error", err);
            });
        history.push("/home")
        }


    return (
        <>
        <Wrapper>
            <StyledImg src={travelAbs} alt="travel" />
                <WrapperDetails>
                    <h1 style={{paddingTop:'20px', color:'#A46A9D', fontWeight:'bold'}}>Trip to {destination}</h1>
                    <Details  style={{paddingTop:'60px'}}>
                        <div style={{ display: 'flex', justifyContent:'space-between'}} >
                        <ImCalendar size={36} color='#c8d6e5' style={{marginLeft: '20px', marginRight: '10px'}} />
                            <span style={{ marginTop: "10px"}}>{newStartDate} - {newEndDate}</span>
                        </div>
                        {isAuthenticated && 
                        <img src={user.picture} size={36} color='#c8d6e5' style={{ marginRight: '10px', borderRadius:"50%", width: "40px", height: "40px"}} alt="avatar" />
                        }
                    </Details>
                </WrapperDetails>
        </Wrapper>
        <PlacesWrapper>
        {selectedPlaces.map((place, index) => {
            return (
                <div key={index}>
                    <TripPlaces place={place} trip={trip} />
                </div>
            )
        })}
        </PlacesWrapper>
        <FooterDiv>
            <div>
                <img src={Car_Sienna} style={{height:"auto", width:"80px", cursor:"pointer"}} onClick={(ev) => returnToSearch(ev)}  alt="bus" />
            </div>
            <ButtonsDiv>
            <StyledBtn onClick={saveTripHandler}>Save Trip</StyledBtn>
            <StyledBtn onClick={clearTripHandler}>Delete Trip</StyledBtn>
            <StyledBtn onClick={seeTrips}>See all my trips</StyledBtn>
            <LogoutButton />
            </ButtonsDiv>
        </FooterDiv>
        </>
    )
}

const Wrapper  = styled.div`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

`;

const StyledImg = styled.img`
max-height: 400px;
min-width: 100vw;
height: auto;
width: auto;

`;

const WrapperDetails = styled.div`
text-align: center;
position: absolute;
top: 90%;
left: 50%;
transform: translate(-50%, -50%);
color: black;
padding: 10px 20px;
width: 600px;
height: 200px;
background: var(--clouds);
border-radius: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

const PlacesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start-flex;
width: 70%;
margin: auto;
margin-Top: 100px;
margin-bottom: 100px;

`;

const Details = styled.div`
display: flex;
justify-content: space-between;

`;

const FooterDiv = styled.div`
display: flex;
justify-content: flex-start;
height: 90px;
background: var(--burnt-sienna);
width: 100%;
top: 0;
padding: 5px 50px;
box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

`;

const ButtonsDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`;

const StyledBtn = styled.button`
margin: 2px 10px;
padding: 5px 20px;
background: transparent;
color: #FFFFFF;
border: none;
border-Radius: 5px;
cursor: pointer;

&:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}



`;



export default TripPage
