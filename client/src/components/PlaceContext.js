import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const PlaceContext = createContext(null);

const initialState = {
    _id: uuidv4(),
    name: "",
    email: "",
    city: "",
    startDate: "", 
    endDate: "",
    trip: [],
}


export const PlaceProvider = ({ children }) => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [isLoading, setIsLoading] = useState(false);


    // Trip Context 

    const [trip, setTrip] = useState([])
    const [trips, setTrips] = useState([])


    const [tripInfo, setTripInfo] = useState(initialState);

    // add place to trip *******************

    const addPlace = (data) => {
        const newTrip = [...trip].concat(data)
        setTrip(newTrip)
        window.localStorage.setItem("trip", JSON.stringify(newTrip))
    }

    // remove place from trip 

    const removePlace = (data) => {
        // console.log(data)
        let copy = [...trip]
        if (trip.length === 1) {
            copy = []
        } else {
            copy = [...trip].filter((item) => item.placeName !== data.placeName)
        } 
        setTrip(copy)
        window.localStorage.setItem("trip", JSON.stringify(copy));
    };

    // remove trip***************************

    const clearTrip = () => {
        setTrip = []
        window.localStorage.clear();
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
            isLoading, 
            setIsLoading,
        }}>
        {children}    
        </PlaceContext.Provider>
    )
}

