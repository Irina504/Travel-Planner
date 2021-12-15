import React, { createContext, useState, createRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const PlaceContext = createContext(null);

const initialState = {
    name: "",
    email: "",
    city: "",
    startDate: "", 
    endDate: "",
    trip: [],
}


const tripInitialState = {
    _id: uuidv4(),
    destination:"",
    userName: "",
    email: "",
    startDate:"",
    endDate:"",
    trip: [],
 }


export const PlaceProvider = ({ children }) => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    // Trip Context 

    const [trip, setTrip] = useState([])
    const [trips, setTrips] = useState([])


    const [tripInfo, setTripInfo] = useState(tripInitialState);

    // add place to trip *******************

    const addPlace = (data) => {
        setTrip([...trip].concat(data))
        window.localStorage.setItem("trip", JSON.stringify(trip))
    }

    // remove place from trip **************

    const removePlace = (data) => {
        if (trip.length === 1) {
            setTrip = []
        } else {
            setTrip([...trip].filter((item) => item.place.name !== data[0].place.name))
        }
        window.localStorage.setItem("trip", JSON.stringify(trip));
    };

    // remove trip***************************

    const clearTrip = (data) => {
        setTrip = []
        window.localStorage.removeItem("trip")
    }



    return (
        <PlaceContext.Provider value={{
            places,
            setPlaces,
            coordinates, 
            setCoordinates,
            trip, 
            setTrip,
            trips, 
            setTrips,
            addPlace,
            tripInfo, 
            setTripInfo,
            removePlace,
            clearTrip,
        }}>
        {children}    
        </PlaceContext.Provider>
    )
}

