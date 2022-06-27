import { configureStore,  createSlice } from '@reduxjs/toolkit'
import initialData from './initial';


export const todoSlice = createSlice({
    name : 'todo', 
    initialState: [],
    reducers:{

        onAddTask: (state, action)=> {
            // action {type :'todo/onAddTask', playload : "valeur"}
            //initialData

            const newTask = {
                id: Date.now(),
                completed : false,
                name : action.payload

            }

                state.push(action.payload);
        },

        AddToFavoris: (state, action) => {

            state.push(action.payload);
        },

        toggleCompleted : (state, action) => {
            console.log(state, 'voir le state')
                const task = state.find((t)=> t.id=== action.payload);
                console.log(task, 'voir les task')
                task.completed= ! task.completed
        }, 

        deleteTask: (state, action) => {
            state = state.filter((t)=> t.id != action.payload)
            return state
        },

        deleteFavoris: (state, action)=> {
            state = state.filter((t)=>  t.trackId != action.payload)

            return state
           
        }

    }
})


export const {onAddTask, deleteTask,AddToFavoris, deleteFavoris}  =  todoSlice.actions

export default configureStore({
  reducer: {
      todo: todoSlice.reducer
  },
})





