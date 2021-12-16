import React from 'react'
import LoginButton from "../Login/LoginButton"
import AdobeLogo_Sienna from "../../images/Logo/AdobeLogo_Sienna.png"
import { useAuth0 } from "@auth0/auth0-react"; 

import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const TopNav = () => {

  const { user, isAuthenticated } = useAuth0();
  let history = useHistory();


  const returnToSearch = (ev) => {
    ev.preventDefault();
    history.push("/search")
}


    return (
        <Wrapper>
            <div>
                <Logo src={AdobeLogo_Sienna} onClick={(ev) => returnToSearch(ev)} />
            </div>
            <RightSideNav>
              {isAuthenticated ? (
                      <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
                        <p style={{color: "#A46A9D", textShadow: "0.3px 0.3px 4px #ffffff", fontWeight: "bolder", marginTop:"20px", marginRight:"10px", fontStyle:"italic"}}>Welcome back! </p>
                        <img style={{ borderRadius:"50%", width: "40px", height: "40px", padding: "2px"}} src={user.picture} alt={user.name} />
                    </div>
              ): (
                <LoginButton />
              )}
            </RightSideNav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background: var(--burnt-sienna);
  width: 100%;
  top: 0;
  padding: 5px 50px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;

const Logo = styled.img`
max-width: 300px;
height: auto;
`;

const RightSideNav = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

export default TopNav
