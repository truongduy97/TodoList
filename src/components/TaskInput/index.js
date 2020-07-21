import React, { Component } from "react";

export default class TaskInput extends Component {
  state = {
    new_task_title: ""
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addTask(this.state.new_task_title);
    this.setState({
      new_task_title: ""
    });
  };
  onChangeHanlder = event => {
    this.setState({
      new_task_title: event.target.value
    });
  };
  render() {
    return (
      <section class="task-input">
        <form onSubmit={this.onSubmitHandler} class="input-group mb-3">
          <input
            onChange={this.onChangeHanlder}
            value={this.state.new_task_title}
            type="text"
            class="form-control"
            placeholder="Input task here"
          />
          <div class="input-group-append">
            <button class="btn btn-primary">Add</button>
          </div>
        </form>
      </section>
    );
  }
}
