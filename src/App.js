import './App.css';
import React, { Component } from 'react';
import api from './api';
import List from './components/List';

export default class App extends Component {

  state = {
    repositories: [],
    inputEl: []
  }

  changeInput(event) {
    this.setState({ inputEl: event.target }) 
  }

  async addRepository(event) { //adiciona repositório
    event.preventDefault();

    const { inputEl } = this.state;
    if(inputEl.length === 0) return;

    const username = inputEl.value;
    console.log(`username: ${username}`)

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

    this.setState({ repositories: aux });

    this.state.inputEl.value = ''; //esvazia o campo

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

      <List repos={ repositories }/>
    </div>
    );
  }
}
