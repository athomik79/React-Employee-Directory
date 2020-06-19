import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Employees</Header>
      </Wrapper>
    );
  }
}

export default App;
