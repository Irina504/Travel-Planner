import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
<Auth0Provider
    domain="dev-wnmwv46f.us.auth0.com"
    clientId="ufF5C9jp0Js4lOIErpy1D0in5Td6LZ7m"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

