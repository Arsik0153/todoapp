import React from 'react';

class AddTodo extends React.Component {
  state ={
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.value == "") return;
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  };
}

export default AddTodo;