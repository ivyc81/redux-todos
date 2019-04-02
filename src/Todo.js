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

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todo.id !== nextProps.todo.id;
    }

    render() {
        const { text } = this.props.todo;
        return (
            <div className="Todo" onClick={this.clickHandler}>
                <div> { text } </div>
            </div>
        );
    }
}

export default Todo;