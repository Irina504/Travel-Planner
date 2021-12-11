import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
            bl_latitude: sw.lat, 
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
        }
        });

        return data;
    } catch (err) {
        console.log(err)
    }
}


export const getWeather = async (lat, lng) => {
    try {
        if (lat & lng) {
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat:lat, lon: lng, }, 
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });
            return data;
        }
    } catch (err) {
        console.log(err)
    }
}

// Get place photo with Google Places API

// https://maps.googleapis.com/maps/api/place/photo
//   ?maxwidth=400
//   &photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT
//   &key=YOUR_API_KEY


