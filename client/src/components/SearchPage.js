import React from 'react'
import CustomPicker from './Calendar/CustomPicker'
import styled from "styled-components"
import TopNav from './NavMenu/TopNav'

const SearchPage = () => {
    return (
        <div>
        <TopNav/>
        <Wrapper>
            <h1>Plan a new trip</h1>
            <div>
                <form>
                    <input placeholder="Where to?" />
                    <CustomPicker />
                    <button>Start planning</button>
                </form>
            </div>
        </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)

`;

export default SearchPage


