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

    this.listRepositories = this.listRepositories.bind(this)
  }

  async listRepositories(username) { //adiciona repositório

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
        <Header listRepositories={this.listRepositories} />
        <List repos={repositories} />
      </div>
    );
  }

}
