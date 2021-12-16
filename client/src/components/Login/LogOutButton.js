import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </StyledButton>
  );
};

const StyledButton = styled.div`
/* position:absolute;
top: 40px;
right: 40px; */
width: 150px;
border: none;
color: var(--purple-foxglove);
background: transparent;
font-family: var(--font-family);
padding: 10px 30px;
font-size: 24px;
font-weight: bold;
border: 1px solid var(--burnt-sienna);
border-radius: 5px;
cursor: pointer;
z-index: 10;


`;

export default LogoutButton;
