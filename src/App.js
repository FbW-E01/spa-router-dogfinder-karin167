import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-browser-router";
import whiskeyImage from "./images/whiskey.jpg";
import tubbyImage from "./images/tubby.jpg";
import hazelImage from "./images/hazel.jpg";
import "./app.css";

function Whiskey() {
  return (
    <div>
      <h3>Whiskey</h3>
      <p>Whiskey is a dog . Not a drink, But he is super fun!</p>
    </div>
  );
}
function Hazel() {
  return (
    <div>
      <h3>Hazel</h3>
      <p>Hazel is a smart dog, and super cute!</p>
    </div>
  );
}
function Tubby() {
  return (
    <div>
      <h3>Tubby</h3>
      <p>such a nice dog, very friendly !</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello, we have dogs.</h1> <br />
      <h3>Click on them for more info!</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/dogs/Whiskey">
              <img src={whiskeyImage} />
              Whiskey
            </NavLink>
          </li>
          <li>
            <NavLink to="/dogs/Hazel">
              <img src={hazelImage} />
              Hazel
            </NavLink>
          </li>
          <li>
            <NavLink to="/dogs/Tubby">
              <img src={tubbyImage} />
              Tubby
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="details"></div>
      <Switch>
        <Route path="/dogs/Whiskey" component={Whiskey}></Route>
        <Route path="/dogs/Hazel" component={Hazel}></Route>
        <Route path="/dogs/Tubby" component={Tubby}></Route>
        <Route
          path="/dogs"
          render={() => {
            return "choose a dog";
          }}
        />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/dogs" />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
