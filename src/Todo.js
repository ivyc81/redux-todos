import React, { Component } from 'react';

// import './Todo.css'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.triggerRemove(this.props.todo.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.todo.id !== nextProps.todo.id;
    return false;
  }

  render() {
    const { text } = this.props.todo;
    return (
      <div className="Todo">
        <div>
          {text}
          <button  onClick={this.clickHandler}> X </button>
        </div>
      </div>
    );
  }
}

export default Todo;