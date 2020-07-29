import React from "react";
let timeout;
export default class Task extends React.Component {
  state = {
    time: 0
  };
  onClickDelete = event => {
    event.stopPropagation();
    this.props.deleteTask(this.props.id);
  };
  timeCounting = () => {
    this.setState({
      time: this.state.time + 1
    });
    timeout = setTimeout(this.timeCounting, 1000);
  };

  componentDidMount() {
    this.timeCounting();
    clearTimeout(timeout);
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.updateTask(this.props.id);
        }}
        className={`${
          this.props.done ? "done" : ""
        } task card d-flex flex-row justify-content-between align-items-center mb-3`}
      >
        <div className="task-title p-2">
          {this.props.index + 1} - {this.props.title} - {this.state.time}
        </div>
        <button onClick={this.onClickDelete} className="button btn-danger p-2">
          X
        </button>
      </div>
    );
  }
}
