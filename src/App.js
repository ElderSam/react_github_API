import './App.css';
import React, { Component } from 'react';
import api from './api';

import Header from './components/Header';
import UserDetails from './components/UserDetails';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      repositories: [],
      inputEl: []
    };

    this.getGitHubData = this.getGitHubData.bind(this)
  }
  
  async getGitHubData(username) { //faz requisições para obter dados do usuário e os repositórios

    this.setState({ loading: true });

    const userExists = await this.listUserDetails(username);
    console.log(`userExists: ${userExists}`)
    if(userExists)
      await this.listRepositories(username);
  
    this.setState({ loading: false });
  }

  async listUserDetails(username) {
    console.log('listUserDetails')
    try{
      const result = await api.get(`users/${username}`)
      console.log(result);
  
      const aux = result.data 
      console.log(aux)
  
      this.setState({ userData: aux });
      /* userData = { login, avatar_url, html_url, site_admin, blog, name, company,
      location, email, bio, followers, following, created_at, updated_at } */

      return true;

    }catch(err) {
      console.log(err)
      alert('O usuário não existe!');

      return false;
    }
  }

  async listRepositories(username) { //adiciona repositórios do usuário

    try{
      const result = await api.get(`users/${username}/repos`)
      console.log(result);
  
      const aux = result.data.map(({ name, description, html_url, language }) => {
        return {
          name,
          description,
          html_url,
          language
        }
      });
  
      this.setState({ repositories: aux });

    }catch(err) {
      console.log(err)
      alert('Erro ao consultar repositórios!');
    }

  }

  render() { 
    const { repositories, userData, loading } = this.state;
    console.log(repositories)

    return(
      <div className="App">
        <Header getGitHubData={this.getGitHubData} />

        <UserDetails userData={userData} />
        <List repos={repositories} loading={loading} />

        <Footer />
      </div>
    );
  }

}
