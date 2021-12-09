import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./components/LandingPage"
import SearchPage from "./components/SearchPage"



function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
