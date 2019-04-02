import React, { Component } from 'react';

// import './CreateTodoForm.css'

class CreateTodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.triggerAdd(this.state);
    this.setState({
      text: '',
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {

    return (

      <form onSubmit={this.handleSubmit}>
        <div>
          Add a new Todo!
                    <div>
            <label htmlFor="text" />
            <input id="text"
              name="text"
              placeholder="Todo"
              value={this.state.text}
              onChange={this.handleChange} />
          </div>

          <button> Add </button>

        </div>
      </form>
    );
  }
}

export default CreateTodoForm;