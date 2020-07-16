import React from "react";

class ClassPerson extends React.Component {
  state = {
    status: "sleep",
    another: "another"
  };
  updateStatus = () => {
    this.setState({
      status: "Working",
      another: "superanother"
    });
  };

  render() {
    return (
      <div>
        <h1>Class Person {this.state.status}</h1>
        <button onClick={this.updateStatus}>Update status</button>
        <p>{this.state.another}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

export default ClassPerson;
