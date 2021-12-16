import React, { useContext, useEffect } from 'react'
import { PlaceContext } from './PlaceContext'
import SingleTrip from './Trip/SingleTrip'

import styled from "styled-components"
import TopNav from './NavMenu/TopNav'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'

const Home = () => {

    const { trips, setTrips, isLoading } = useContext(PlaceContext)

    useEffect(() => {

        fetch("/trips")
            .then((res) => res.json())
            .then((data) => {
            setTrips(data.data);
        })
        .catch((err) => {
            console.error("Error", err);
        });
    }, []) 

    if(isLoading === true) {
        return (
            <LoadingSpinner />
        )
    } else {

        return (
            <>
                <TopNav />
                <Wrapper>
                    {trips?.map((trip, index) => {
                        return (
                        <div key={index}>
                            <SingleTrip trip={trip} />
                        </div>
                        )
                    })}
                </Wrapper>
                <Footer />
            </>
        )

    }

}

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-Top: 70px;
color: var(--wet-asphalt);

`;

export default Home
