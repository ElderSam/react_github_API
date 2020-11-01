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

    this.setState({ loading: true });

    try{
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

    }catch(err) {
      console.log(err)
      alert('O repositório não existe!');
    }

    this.setState({ loading: false });
    this.state.inputEl.value = ''; //esvazia o campo
  }

  render() { 
    const { repositories, loading } = this.state;
    console.log(repositories)

    return(
      <div className="App">
        <Header listRepositories={this.listRepositories} />
        <List repos={repositories} loading={loading} />
      </div>
    );
  }

}
