import React from "react";
import TaskInput from "../TaskInput";
import Task from "../Task";
import NoTaskImage from "../../assets/3281755.jpg";
class TodoList extends React.Component {
  state = {
    tasks: []
  };

  addTask = title => {
    const new_task = {
      title,
      id: Date.now() + Math.random(),
      done: false
    };
    this.setState({
      tasks: [new_task, ...this.state.tasks]
    });
  };

  deleteTask = id => {
    const new_tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks: new_tasks
    });
  };
  updateTask = id => {
    const index = this.state.tasks.findIndex(task => {
      return task.id === id;
    });
    const new_tasks = [...this.state.tasks];
    new_tasks[index].done = !new_tasks[index].done;
    new_tasks.sort((a, b) => {
      return a.done - b.done;
    });
    this.setState({
      tasks: new_tasks
    });
  };
  img_style = { width: "50%" };
  render() {
    return (
      <main>
        <div className="container py-5">
          <TaskInput addTask={this.addTask}>
            <h1>inside</h1>
          </TaskInput>

          <hr />
          <section className="task-container">
            {this.state.tasks.length > 0 && (
              <p>
                {this.state.tasks.reduce((total, task) => {
                  if (task.done) {
                    return (total = total + 1);
                  } else {
                    return total;
                  }
                }, 0)}
                /{this.state.tasks.length}
              </p>
            )}
            {this.state.tasks.length > 0 ? (
              this.state.tasks.map((task, index) => {
                return (
                  <Task
                    index={index}
                    key={task.id}
                    title={task.title}
                    id={task.id}
                    done={task.done}
                    deleteTask={this.deleteTask}
                    updateTask={this.updateTask}
                  ></Task>
                );
              })
            ) : (
              <img src={NoTaskImage} style={this.img_style} />
            )}
          </section>
        </div>
      </main>
    );
  }
}

export default TodoList;
