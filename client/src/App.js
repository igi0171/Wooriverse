import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import Landing from "./components/Landing/Landing";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/:artist/feed" exact component={Home} />
          <Route path="/:artist/feed/:id" exact component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/" />)}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
