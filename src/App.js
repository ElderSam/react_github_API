import './App.css';

function App() {
  return (
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTLsZtEs4N7hlthpkaRUBwqcToenaNK7tpEg&usqp=CAU"/>
          <strong>USUÁRIO</strong>
          <p>Descrição </p>
          <a href="https://www.reactjs.org" target="_blank">link</a>
        </li>
        
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTLsZtEs4N7hlthpkaRUBwqcToenaNK7tpEg&usqp=CAU"/>
          <strong>USUÁRIO</strong>
          <p>Descrição </p>
          <a href="https://www.reactjs.org" target="_blank">link</a>
        </li>
      </ul>

    </div>
  );
}

export default App;
