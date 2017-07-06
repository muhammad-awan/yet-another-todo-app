import React, { Component } from 'react';
import Checkbox from './components/Checkbox'
import Field from './components/Field'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>THE LISTA</h2>
        </div>
          <Checkbox checked={ true } label='Moi Mucha'/>  
          <Field value='some value' label='Mia'/>  
      </div>
    );
  }
}

export default App;
