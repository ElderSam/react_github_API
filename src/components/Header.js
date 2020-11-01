import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.doAddRepositoryFromChild = this.doAddRepositoryFromChild.bind(this);
    }

    doAddRepositoryFromChild(event) {
        this.props.addRepository(event);
    }

  render() {
    return (
      <header className="App-header">
        <h1>App GitHub!</h1>

        <form
          id="repository-form"
          onSubmit={(event) => this.doAddRepositoryFromChild(event)}
        >
          <input
            type="text"
            name="username"
            placeholder="digite um usuário"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </header>
    );
  }
}
