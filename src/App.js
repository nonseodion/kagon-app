import logo from "./logo.svg";
import "./app.scss";

import AppContextProvider from "./store/appContext";

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
import ForgotPassword from "./views/auth/ForgotPassword";

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <AppContextProvider>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/forgot-password'>
              <ForgotPassword />
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
        </AppContextProvider>
      </div>
    </HashRouter>
  );
}

export default App;
