import React, { Component } from "react";

import GitHubLogo from '../assets/github-logo.png';
import "./Header.css";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.doListRepositoriesFromChild = this.doListRepositoriesFromChild.bind(this);
    }

    doListRepositoriesFromChild(event) { //pega o valor do campo e chama o método listar do componente pai
        event.preventDefault();

        const username = event.target[0].value;

        if(username === '') {
            alert('Por favor preencha um nome de usuário válido (do GitHub)')
        };

        console.log(`username: ${username}`)
    
        this.props.listRepositories(username);
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
            onSubmit={(event) => this.doListRepositoriesFromChild(event)}
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
