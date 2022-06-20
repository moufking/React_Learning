import React from 'react';
import { NavLink } from 'react-router-dom';
import initialData from './initial';
import ToDoList from './ToDoList';
import Navbar from './Navbar';
import AddTask from './AddTask';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import uniqueId from 'uniqueid';
import Login from './Login';





class App extends React.Component {
  

  state = {
    tasks : initialData
  }

  onToggleCompleted = (taskId) => {
    let updateTask =  this.state.tasks.find(task=>task.id === taskId)
    updateTask.completed = ! updateTask.completed

    this.setState(prevState => (
      prevState.tasks.map(task => {
            return task.id === taskId ? updateTask : task
      })

    ))
  }

  onAddTask = (newTaskName) => {

    let newTask = {
      id : uniqueId(),
      name : newTaskName,
      completed: false
    }

    this.setState(prevState => ({
      tasks : [...prevState.tasks, newTask]
    }))
  }

  onDelete = () => {      
    this.setState(prevState => {
      let newState =  prevState.tasks.filter(task => !task.completed)

      return {
        tasks: newState
      }
    })
  }

  render(){
    return(
      <section id="todo">
          <BrowserRouter>
              <Switch>
                  <Route path="/add_task" render= {(props) => <AddTask />} />
                  <Route path="/login_mediactive" render= {(props) => <Login/>} />
                  <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted= {this.onToggleCompleted} />} />
              </Switch>
              <Navbar  onDelete = {this.onDelete}/>
          </BrowserRouter>
      </section>
  )
  }
}

export default App;
