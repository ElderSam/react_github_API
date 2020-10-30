import './App.css';
import React, { Component } from 'react';
import api from './api';

export default class App extends Component {

  state = {
    repositories: [],
    inputEl: ''
  }

  changeInput(event) {
    this.setState({ inputEl: event.target.value }) 
  }

  async addRepository(event) { //adiciona repositório
    event.preventDefault();
    const username = this.state.inputEl;
    console.log(`username: ${username}`)

    if(username === '') return;

    const result = await api.get(`users/${username}/repos`)
    console.log(result);
    const aux = result.data.map(({ name, description, html_url, owner:{ avatar_url } }) => {
      return {
        name,
        description,
        html_url,
        avatar_url,
      }
    });

    console.log(aux)
    this.setState({ repositories: aux });
    console.log(this.state.repositories)

    this.render();
  }

  render() { 
    const { repositories } = this.state;

    return(
      <div className="App">
      <header className="App-header">
        <h1>App GitHub!</h1>       
      </header>
    
      <form id="repository-form" onSubmit={ (event) => this.addRepository(event) }>
        <input type="text" name="username"
          placeholder="digite um usuário"
          onChange={ (event) => this.changeInput(event)}  
        />
        <button type="submit">Pesquisar</button>
      </form>

      <ul id="repository-list">

        {repositories.map((repo) => (
          <li>
            <img src={ repo.avatar_url } alt="avatar url"/>
            <strong>{ repo.name }</strong>
            <p>{ repo.description }</p>
            <a href={ repo.html_url } target="_blank" rel="noopener noreferrer">link</a>
          </li>
        ))}

      </ul>

    </div>
    );
  }
}
