import logo from "./logo.svg";
import "./app.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Landingpage from "./views/landingPage/Landingpage";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Dashbaord from "./views/dashboard/Dashboard";

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/dashboard'>
            <Dashbaord />
          </Route>
          <Route path='/'>
            <Landingpage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
