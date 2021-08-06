import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Router>
          <Route
            path="/registration"
            exact
            render={(props) => <Registration />}
          />
          <Route path="/" exact render={(props) => <Main />} />
        </Router> */}
        <main>
          <Route path="/" component={Login} exact></Route>
          <Route path="/registration" component={Registration} exact></Route>
          <Route path="/home" component={Home} exact></Route>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
