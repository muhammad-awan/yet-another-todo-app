import React, { Component } from 'react';
import TodoList from './components/TodoList'
import shortid from 'shortid'

const data = [
  {
    _id: shortid.generate(),
    completed: true,
    description: 'Yes'
  },
  {
    _id: shortid.generate(),
    completed: false,
    description: 'No'
  }
]

class App extends Component {
  state = {
    items: data
  }

  handleAddTodoItem = () => {
    const newItem = {
      _id: shortid.generate(),
      completed: false,
      description: ''
    }

    this.setState((prevState) => {
      const newItems = prevState.items.concat(newItem)
      return {
        items: newItems
      }
    })
  }

  handleCompleteTodoItem = (id) => {
    this.setState( (prevState) => {
      const newItems = prevState.items.map((item) => (
        item._id === id ? (
          Object.assign({}, item, {completed: !item.completed})
        ) : (
          item
        )
      ))

      return {
        items: newItems
      }
    })
  }

  render() {
    const {items} = this.state
    return (
      <main className="App">
        <div className="App-header mb-3">
          <h2>THE LISTA</h2>
        </div>
        <button onClick={this.handleAddTodoItem}>Add</button>
        <TodoList items={items} onCompleteItem={this.handleCompleteTodoItem}/>
      </main>
    );
  }
}

export default App;
