import React from 'react'
import { useDispatch } from 'react-redux'

const ToDo = (props) => {

    const {task} = props
    const dispatch = useDispatch();

    const toggleCompleted = () => {

       dispatch({
           type: 'todo/toggleCompleted',
           payload:  task.id
       })
       
    }

    const deleteTask = () => {

        dispatch( {
            type :'todo/deleteTask',
            payload: task.id
        })

    }
  
        return  (
            <li className={"list-group-item d-flex align-tiems-center  " + (task.completed?  'bg-success':  'btn-outline-success')}>
                {task.name}
                <button className="btn btn-sm ml-auto btn-outline-success" onClick={()=> toggleCompleted() }>&#x2713;</button>

                <button className="btn btn-sm ml-auto btn-outline-success" onClick={()=> deleteTask() }>delete</button>
            </li>
        )
}

export default ToDo