import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const AddTask = (props) =>  {

    const {task, history} =  props

     const  [text, setText] = useState("")

     const dispatch = useDispatch();

   const  HandleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "todo/onAddTask",
            payload:  text
        })

        console.log(history, 'voir les informations')

       
       

        /*
        this.props.onAddTask(this.newTask.value)
        this.newTask.value = '';
       this.props.history.push('/')
        */

      

    }

        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit= {e => HandleSubmit(e)}>
                        <div className="form-group mb-3">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control"  value= {text} onChange = {(e)=> setText(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
   

}


export default AddTask ;