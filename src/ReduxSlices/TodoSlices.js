import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: ""
    }]
}


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            })

        },
        remove: (state, action) => {
            state.todos = state.todos.filter((t) => {
                return t.id !== action.payload
            })


        },
        changeState: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { add, remove, changeState } = todoSlice.actions
export default todoSlice.reducer