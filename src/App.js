import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    greeting: null
  }

  componentWillMount(){
    fetch('http://13.53.131.29:8080/test')
    .then(res => res.json())
    .then(json => this.setState({json.name}))
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.greeting}</h1>
      </header>
    </div>
  );
}
}

export default App;
