import React, { createContext, useState, createRef, useEffect } from 'react'

export const PlaceContext = createContext(null);

export const PlaceProvider = ({ children }) => {

    const [places, setPlaces] = useState([]);
    const [type, setType] = useState('attractions');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [mapRefs, setMapRefs] = useState([]); // used in List Comp
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);


    return (
        <PlaceContext.Provider value={{
            places, 
            setPlaces,
            type, 
            setType,
            rating, 
            setRating,
            filteredPlaces,
            setFilteredPlaces,
            mapRefs,
            setMapRefs,
            weatherData,
            setWeatherData,
            isLoading,
            setIsLoading,
            coords, 
            setCoords,
            bounds,
            setBounds, 
            autocomplete, 
            setAutocomplete, 
            childClicked, 
            setChildClicked,
        }}>
        {children}    
        </PlaceContext.Provider>
    )
}

