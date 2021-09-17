import React, { createContext, Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const appContext = createContext();

export default withRouter(
  class AppContextProvider extends Component {
    state = sessionStorage.getItem("kagonStore")
      ? JSON.parse(sessionStorage.getItem("kagonStore"))
      : {
          isLoggedIn: false,
          userInfo: {},
          wallets: [],
          coins: [],
        };

    componentDidMount() {
      let state = JSON.parse(sessionStorage.getItem("kagonStore"));
      this.setState(state);
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        // Whatever storage mechanism you end up deciding to use.
        sessionStorage.setItem("kagonStore", JSON.stringify(this.state));
      } else {
        sessionStorage.setItem("kagonStore", JSON.stringify(prevState));
      }
    }

    updateStateValue = (values) => {
      this.setState(values);
    };

    logout = () => {
      // this.setState({
      // });
      // sessionStorage.clear();
    };

    render() {
      const { updateStateValue } = this;
      return (
        <appContext.Provider
          value={{
            ...this.state,
            updateStateValue,
          }}
        >
          {this.props.children}
        </appContext.Provider>
      );
    }
  },
  {
    position: "top-right",
  }
);
