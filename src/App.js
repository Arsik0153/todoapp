import React from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: "Go home"},
      {id: 2, content: "Have dinner"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="container ">
        <h1 className="center">Todo app</h1>
        <Todos 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
        />
        <AddTodo 
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
