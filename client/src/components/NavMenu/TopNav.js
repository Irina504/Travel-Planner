import React from 'react'
import LoginButton from "../Login/LoginButton"
import AdobeLogo_Sienna from "../../images/Logo/AdobeLogo_Sienna.png"

import styled from 'styled-components'

const TopNav = () => {
    return (
        <Wrapper>
            <div>
                <Logo src={AdobeLogo_Sienna} />
            </div>
            <RightSideNav>
            <LoginButton />
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
