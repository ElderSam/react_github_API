import React, { Component } from "react";

import GitHubLogo from '../assets/github-logo.png';
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
        <header className="App-header flex-one">
            <div className="flex-one">
                <img src={GitHubLogo} alt="github logo" />
                <h2>App GitHub!</h2>
            </div>

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

            <a href="https://github.com/ElderSam/react_github_API">código fonte</a>            
        </header>
    );
  }
}
