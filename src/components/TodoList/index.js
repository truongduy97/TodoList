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
        done: false
      },
      {
        title: "task 3",
        id: 3,
        done: true
      }
    ]
  };

  addTask = title => {
    const new_task = {
      title,
      id: this.state.tasks.length + 1,
      done: false
    };
    this.setState({
      tasks: [...this.state.tasks, new_task]
    });
  };

  render() {
    return (
      <main>
        <div class="container py-5">
          <TaskInput addTask={this.addTask}>
            <h1>inside</h1>
          </TaskInput>
          <hr />
          <section class="task-container">
            {this.state.tasks.map(task => {
              return (
                <Task title={task.title} id={task.id} done={task.done}></Task>
              );
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default TodoList;
