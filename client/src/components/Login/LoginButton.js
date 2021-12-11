import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButton onClick={() => loginWithRedirect()}>Log in</StyledButton>;
};


const StyledButton = styled.button`
width: 150px;
border: none;
color: var(--purple-foxglove);
background: transparent;
font-family: var(--font-family);
padding: 10px 30px;
font-size: 24px;
border: 1px solid var(--burnt-sienna);
cursor: pointer;
`;

export default LoginButton;


