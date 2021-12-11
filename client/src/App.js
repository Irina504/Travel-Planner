import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./components/LandingPage"
import SearchPage from "./components/SearchPage"
import PlanPage from "./components/Plan/PlanPage";
// import List from "./components/List/List"



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



        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
