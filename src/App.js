import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  state = {
    repositories: []
  }

  componentDidMount(){
    const repoForm = document.getElementById('repository-form')
 
    repoForm.onsubmit = (event) => {
      this.addRepository(event)
    }
  }

  addRepository(event) {
    event.preventDefault();

    const obj = {
      name: 'Elder Samuel',
      description: 'test',
      avatar_url: 'https://avatars3.githubusercontent.com/u/43392457?v=4',
      html_url: 'https://github.com/ElderSam'
    }

    const aux = this.state.repositories
    aux.push(obj)
    
    this.setState({repositories: aux})
    console.log(this.state.repositories)
  }

  render() {

    return(
      <div className="App">
      <header className="App-header">
        <h1>App GitHub!</h1>       
      </header>
    
      <form id="repository-form">
        <input type="text" name="username" placeholder="digite um usuário"/>
        <button type="submit">Pesquisar</button>
      </form>

      <ul id="repository-list">
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTLsZtEs4N7hlthpkaRUBwqcToenaNK7tpEg&usqp=CAU" alt=""/>
          <strong>USUÁRIO</strong>
          <p>Descrição </p>
          <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        
      </ul>

    </div>
    );
  }
}
