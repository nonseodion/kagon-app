import React, { useState } from "react";
import "./Dashbaord.scss";
// import Sidebar from "../../components/Sidebar/Sidebar";

import { HashRouter, Route, Switch, useRouteMatch } from "react-router-dom";

// import DashboardHome from "./DashboardViews/DashboardHome";
// import CashPoints from "./CashPoints/CashPoints";
// import Transactions from "./Transactions/Transactions";
// import Support from "./Support/Support";
// import Settings from "./Settings/Settings";

import Logo from "../../assets/images/icon-png-blue.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Wallets from "./views/wallets/Wallets";
import Transactions from "./views/transactions/Transactions";

export default function Dashbaord() {
  let match = useRouteMatch();

  const [currentPage, setCurrentPage] = useState("Dashbaord");

  return (
    <div className='dashboard'>
      <Sidebar width={250} setCurrentPage={setCurrentPage} />
      <div className='dash-body'>
        <div className='dashboard-heading'>
          <p className='page-title'>{currentPage}</p>
        </div>

        <div className='dash-contents'>
          <HashRouter>
            <Switch>
              <Route exact path={`${match.path}`}>
                {/* <DashboardHome /> */}
              </Route>
              <Route exact path={`${match.path}/wallets`}>
                <Wallets />
              </Route>
              <Route exact path={`${match.path}/transactions`}>
                <Transactions />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}
