import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  state = {
    repositories: []
  }

  /*componentDidMount(){
  }*/

  addRepository(event) {
    event.preventDefault();

    const obj = {
      name: 'Repository Name',
      description: 'description',
      avatar_url: 'https://avatars3.githubusercontent.com/u/43392457?v=4',
      html_url: `https://github.com/{USER_NAME}`
    }

    const { repositories } = this.state
    repositories.push(obj)
    
    this.setState({ repositories })
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
        <input type="text" name="username" placeholder="digite um usuário"/>
        <button type="submit">Pesquisar</button>
      </form>

      <ul id="repository-list">

        {repositories.map(repo => (
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
