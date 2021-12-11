import React, { useEffect, useState } from 'react'
import Gmap from "./Gmap"
import Grid from "./Grid"
import Header from "./Header"
import { getPlacesData, getWeather } from '../../api/travelApi'
import styled from 'styled-components'


const PlanPage = () => {


    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState({});

    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    const [clickedChild, setClickedChild] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // determine user's location at the start of the app
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, [])

    // filter places based in selected rating

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating )
        setFilteredPlaces(filteredPlaces);

    }, [rating])

    // fetch data about places and weather 

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
            setIsLoading(true)

            getWeather(coordinates.lat, coordinates.lng)
            .then((data) => {
                setWeatherData(data)
            })
            getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                // console.log(data)
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                setFilteredPlaces([])
                setIsLoading(false)
            })
        }
    }, [type, bounds])


    
    return (
        <div>
            <Header setCoordinates={setCoordinates}  />
                <ListWrapper>
                    <Grid
                        isLoading={isLoading}
                        clickedChild={clickedChild}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </ListWrapper>
                <div>
                    <Gmap
                        setClickedChild={setClickedChild}
                        setBounds={setBounds}
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        weatherData={weatherData}
                    />
                </div>
            </div>
        )
}

const ListWrapper = styled.div`
position: absolute;
top: 100px;
left: 0;

`;

export default PlanPage
