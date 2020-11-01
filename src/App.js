import './App.css';
import React, { Component } from 'react';
import api from './api';

import Header from './components/Header';
import List from './components/List';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      inputEl: []
    };

    this.addRepository = this.addRepository.bind(this)
  }

  

  async addRepository(event) { //adiciona repositório
    event.preventDefault();

    const inputEl = event.target[0];
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
  }

  render() { 
    const { repositories } = this.state;
    console.log(repositories)

    return(
      <div className="App">
        <Header addRepository={this.addRepository} />
        <List repos={repositories} />
      </div>
    );
  }

}
