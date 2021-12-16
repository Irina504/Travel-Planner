import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin, localStorage: localStorage.clear() })}>
      Log Out
    </StyledButton>
  );
};

const StyledButton = styled.div`
position: absolute;
bottom: 0;
right:0;
width: 150px;
border: none;
color: #FFFFFF;
background: transparent;
font-family: var(--font-family);
padding: 10px 30px;
font-size: 22px;
font-weight: bold;
border-radius: 5px;
cursor: pointer;
z-index: 10;


`;

export default LogoutButton;
