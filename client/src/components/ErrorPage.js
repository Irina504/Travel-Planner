import React from 'react'
import TopNav from "./NavMenu/TopNav"
import { NavLink } from "react-router-dom";
import { ImCross } from 'react-icons/im'

import styled from "styled-components"

const ErrorPage = () => {
    return (
        <div>
            <TopNav />
                <Wrapper>
                    <p> <ImCross style={{color:"#EE585A", marginRight:"8px"}} /> We couldn't find the page you're trying to access. <br />
                        Please refresh the page or click <LinkHome to={"/"}> here </LinkHome> to
                        return home.
                    </p>
                </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
width: 400px;
margin: 100px auto;

`;


const LinkHome = styled(NavLink)`
font-weight: 700;
`;

export default ErrorPage
