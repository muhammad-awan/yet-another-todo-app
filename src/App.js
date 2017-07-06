import React, { Component } from 'react';
import TodoList from './components/TodoList'

const data = [
  {
    completed: true,
    description: 'Yes'
  },
  {
    completed: false,
    description: 'No'
  }
]

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="App-header mb-3">
          <h2>THE LISTA</h2>
        </div>
        <TodoList items={data}/>
      </main>
    );
  }
}

export default App;
