import React, { useContext } from 'react'
import { ImInsertTemplate } from 'react-icons/im'
import { PlaceContext } from './PlaceContext'

const Home = () => {

    const {trips, setTrips} = useContext(PlaceContext)


    return (
        <div>
            Home Page
        </div>
    )
}

export default Home
