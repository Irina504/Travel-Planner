import React from 'react'
import GoogleMapReact from "google-map-react"
import { ImLocation2 } from "react-icons/im"


const Gmap = ({ setCoordinates, setBounds, coordinates, places, setClickedChild, weatherData}) => {


     return (
        <div style={{ height: '100vh', width: '50%', position: 'absolute', top: '80px', right: '0' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true, }}
            onChange={(ev) => {
                // console.log(ev)
                setCoordinates({ lat: ev.center.lat, lng: ev.center.lng });
                setBounds({ ne: ev.marginBounds.ne, sw: ev.marginBounds.sw })
            }}
            onChildClick={(child) => {
                setClickedChild(child)
            }}
            >
                {places?.map((place, index) => {
                    return (
                    <div
                    key={index}
                    className='markerContainer'
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    >
                        <ImLocation2 size={26} color="#EE585A" />
                    </div>
                    )
                })}
                {weatherData?.list?.map((data, index) => {
                    return (
                        <div key={index}
                        lat={data.coord.lat}
                        lng={data.coord.lon}
                        >  
                            <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather-image" />

                        </div>
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Gmap;
