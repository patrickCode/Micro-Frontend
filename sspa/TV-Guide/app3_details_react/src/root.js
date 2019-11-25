import React from "react";
import { Provider } from "react-redux";
import { ProgramDetails } from "./details";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.state.store}>
        <ProgramDetails></ProgramDetails>
      </Provider>
    );
  }
}
