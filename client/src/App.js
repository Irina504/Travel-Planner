import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./components/LandingPage"
import SearchPage from "./components/SearchPage"
import PlanPage from "./components/Plan/PlanPage";
import TripPage from "./components/Trip/TripPage";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home"



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
          <Route path="/plan">
            <PlanPage />
          </Route>
          <Route path="/trip">
            <TripPage />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        

          
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
