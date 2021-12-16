import React, { useContext, useEffect } from 'react'
import { PlaceContext } from './PlaceContext'
import SingleTrip from './Trip/SingleTrip'

import styled from "styled-components"
import TopNav from './NavMenu/TopNav'
import Footer from './Footer'

const Home = () => {

    const { trips, setTrips, isLoading, setIsLoading } = useContext(PlaceContext)

    useEffect(() => {

        fetch("/trips")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data)
            setTrips(data.data);
        })
        .catch((err) => {
            console.error("Error", err);
        });
    }, []) // here I should add trips per userId

    

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

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-Top: 70px;

`;

export default Home
