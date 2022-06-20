import React from 'react';
import { useSelector } from 'react-redux';
import ToDo from './ToDo';


const ToDoList = ({match, onToggleCompleted }) => {

    let filteredTasks

    const tasks =  useSelector((state) => state.todo)

    switch (match.params.filter) {
        case 'completed':
         filteredTasks  = tasks.filter(task=>task.completed)
            break;

        default:
            filteredTasks = tasks
            break;
    }

    if(filteredTasks.length === 0)
    {

        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
               <li className="list-group-item">Aucune tache à afficher</li>
            </ul>
        </>
        )

    }else {
        return (
            <>
            <h1 className="m-3">Liste de tâches {filteredTasks.lenght }</h1>
            <ul className="list-group m-3">
                {
                    filteredTasks.map((task) => <ToDo task = {task} key={task.id}/>)
                }
            </ul>
        </>
        )
    }
    
 }


export default ToDoList
