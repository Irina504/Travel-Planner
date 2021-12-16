import React, { createRef, useState, useEffect, useContext } from 'react'
import LoadingSpinner from "../LoadingSpinner"
import styled from "styled-components"
import VenueDetails from './VenueDetails'
import { PlaceContext } from '../PlaceContext'




const Grid = ({ 
  clickedChild, 
  isLoading, 
  type, 
  setType,
  rating, 
  setRating, 
}) => {

  const [elemRefs, setElemRefs] = useState([])
  const { places } = useContext(PlaceContext)


    useEffect(() => {
      setElemRefs((refs) => Array(places?.length).fill().map((_, index) => refs[index] || createRef()));
      
    }, [places])


    return (
        <MainWrapper>
            {isLoading ? (
                <LoadingSpinner />
            ): (
                <>
                <DropdownWrapper>
                <SelectDropdown>
                    <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} >
                        <option value="attractions">Attractions</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                    </select>
                </SelectDropdown>
                <SelectDropdown>
                    <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="rating">Rating</option>
                        <option value={3}>Above 3</option>
                        <option value={4}>Above 4</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </SelectDropdown>
                </DropdownWrapper>
                <div>
                    {places?.map((place, index) => {
                        return (
                            <div ref={elemRefs[index]} key={index}>
                                <VenueDetails 
                                place={place} 
                                selected={Number(clickedChild) === index}
                                refProp={elemRefs[index]}
                                />
                            </div>
                        )
                    })}
                </div>
                </>
            )}
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
height: 85vh;
width: 550px;
display: flex;
flex-direction:column;
/* align-items: center; */
overflow: hidden;
overflow-y: scroll;
margin-left: 50px;


`;

const DropdownWrapper = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
margin-right: 50px; 
padding: 10px;


`;

const SelectDropdown = styled.div`
* {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  color:#34495e ;
}
  
  position: relative;
  background-color: var(--clouds);
  border-radius: 4px;
  width: 200px;
  color: #ecf0f1;

& select {
  font-size: 1rem;
  font-weight: 500;
  max-width: 100%;
  padding: 8px 66px 8px 10px;
  border: none;
  background-color: var(--blue-ballerina);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
& select:active {
  outline: none;
  box-shadow: none;
}

& select :focus {
  outline: none;
  box-shadow: none;
}

&:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid var(--burnt-sienna);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}

`;



export default Grid
