import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTodoForm from './CreateTodoForm';
import Todo from './Todo';

// import './TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
    }

    add(todoObj) {
        this.props.dispatch({
            type: 'ADD_TODO',
            payload: todoObj
        })
    }
    remove(id) {
        this.props.dispatch({
            type: 'REMOVE_TODO',
            payload: id
        })
    }

    render() {
        const todos = this.props.todoList.map(t => <Todo key={t.id}
            todo={t}
            triggerRemove={this.remove}
        />)
        return (
            <div className="TodoList">
                <CreateTodoForm triggerAdd={this.add} />
                {todos}
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return { todoList: reduxState.todoList };
}

export default connect(mapStateToProps)(TodoList);