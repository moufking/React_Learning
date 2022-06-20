import { configureStore, createSlice } from "@reduxjs/toolkit"
import initialData from "./components/initial"

export const todoSlice = createSlice({
    name : 'todo', 
    initialState: initialData,
    reducers:{

        onAddTask: (state, action)=> {
            // action {type :'todo/onAddTask', playload : "valeur"}

            const newTask = {
                id: Date.now(),
                completed : false,
                name : action.payload

            }

                state.push(newTask);
        }

    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})