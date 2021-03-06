import React, { useState } from "react";
import "./Dashbaord.scss";
// import Sidebar from "../../components/Sidebar/Sidebar";

import { HashRouter, Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardHome from "./views/home/DashboardHome";
// import CashPoints from "./CashPoints/CashPoints";
// import Transactions from "./Transactions/Transactions";
// import Support from "./Support/Support";
// import Settings from "./Settings/Settings";

import Logo from "../../assets/images/icon-png-blue.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Wallets from "./views/wallets/Wallets";
import Transactions from "./views/transactions/Transactions";
import Nav from "../../components/nav/Nav";
import Settings from "./views/settings/Settings";

export default function Dashbaord() {
  let match = useRouteMatch();

  return (
    <div className='dashboard'>
      <div className='dash-body'>
        <Nav />

        <div className='dash-contents'>
          <HashRouter>
            <Switch>
              <Route exact path={`${match.path}`}>
                <DashboardHome />
              </Route>
              <Route exact path={`${match.path}/wallets`}>
                <Wallets />
              </Route>
              <Route exact path={`${match.path}/wallets`}>
                <Wallets />
              </Route>
              <Route exact path={`${match.path}/settings`}>
                <Settings />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}
