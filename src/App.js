import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      SearchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }


  render(){
    const {monsters,SearchField} = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(SearchField.toLowerCase())
    )
      console.log(filteredMonsters);

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={ e=> this.setState({SearchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters} />
     </div>
    
    );
  }
}

export default App;
