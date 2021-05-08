import React from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox handleChange={ this.handleChange  } />
        <CardList monsters={ filteredMonster } />
      </div>
    );
  }
}

export default App;
