import React from "react";
import { Provider } from "react-redux";
import { ProgramDetails, Details } from "./details";

export default class Root extends React.Component {

  state = {
    store: this.props.store,
    globalStateProvider: this.props.globalStateProvider,
  };

  render() {
    console.log(this.state.store.getState());
    return (
      <Provider store={this.state.store}>
        <ProgramDetails></ProgramDetails>
      </Provider>
    );
  }
}
