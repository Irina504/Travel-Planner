import React, { useContext, useEffect, useState } from 'react'
import Gmap from "./Gmap"
import Grid from "./Grid"
import Header from "./Header"
import { getPlacesData, getWeather } from '../../api/travelApi'
import styled from 'styled-components'
import { PlaceContext } from '../PlaceContext'




const PlanPage = () => {

    const { coordinates, setCoordinates, places, setPlaces  } = useContext(PlaceContext)
    
    const [type, setType] = useState('attractions');
    const [rating, setRating] = useState('');

    const [bounds, setBounds] = useState({});

    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [clickedChild, setClickedChild] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    // passed to Grid I'm not sure I'll keep that******************// 

    const selectHandler = (ev) => {
        setType(ev.target.value)
        localStorage.setItem("type", type)

    }
    //*************************************************************/

    // determine user's location at the start of the app ********************************************

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
    //         setCoordinates({ lat: latitude, lng: longitude });
    //     })
    // }, [])

    // ******************************************************************************************/

    // filter places based in selected rating ****************//

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating )
        setFilteredPlaces(filteredPlaces);

    }, [rating])

    //*******************************************************/

    // fetch data about places and weather *********************************************************

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
            setIsLoading(true)

            getWeather(coordinates.lat, coordinates.lng)
            .then((data) => {
                setWeatherData(data)
            })
            getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
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
                        // places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                        selectHandler={selectHandler} // not sure if I'll keep it 
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
