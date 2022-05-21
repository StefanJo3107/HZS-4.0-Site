import React from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Application from "./Pages/Application";
import Error from "./Pages/Error";
import ScrollToTop from "./Components/Utilities/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {/* <Route path="/prijava" exact component={Application}></Route> */}
        <Route path="*" component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
