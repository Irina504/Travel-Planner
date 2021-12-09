import React from 'react'
import LoginButton from "../Login/LoginButton"
import Logo3 from "../../images/Logo/Logo3.png"

import styled from 'styled-components'

const TopNav = () => {
    return (
        <Wrapper>
            <div>
                <Logo src={Logo3} />
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
  width: 100%;
  top: 0;
  padding: 5px 50px;
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
