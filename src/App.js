import React, { Component } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddForm';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play football' }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) =>{ 
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({ 
      // when the value has the same name as the key it is not necessary to put the two 
      //otherwise it would all be: name value
      todos
     })
   }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
