import React from "react";
import TaskInput from "../TaskInput";
import Task from "../Task";

class TodoList extends React.Component {
  state = {
    tasks: [
      {
        title: "task 1",
        id: 1,
        done: false
      },
      {
        title: "task 2",
        id: 2,
        done: true
      },
      {
        title: "task 3",
        id: 3,
        done: false
      },
      {
        title: "task 4",
        id: 4,
        done: true
      }
    ]
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
  render() {
    return (
      <main>
        <div className="container py-5">
          <TaskInput addTask={this.addTask}>
            <h1>inside</h1>
          </TaskInput>
          <hr />
          <p>2/4</p>
          <hr />
          <section className="task-container">
            {this.state.tasks.map((task, index) => {
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
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default TodoList;
