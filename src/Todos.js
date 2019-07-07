import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
      <h5 className="center">
        There's no todo's
      </h5>
  )

  return(
    <div className="collection">
      {todoList}
    </div>
  );
}

export default Todos;