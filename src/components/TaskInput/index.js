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
      <section className="task-input">
        <form onSubmit={this.onSubmitHandler} className="input-group mb-3">
          <input
            onChange={this.onChangeHanlder}
            value={this.state.new_task_title}
            type="text"
            className="form-control"
            placeholder="Input task here"
          />
          <div className="input-group-append">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </section>
    );
  }
}
