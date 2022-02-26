import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) =>
//         state.filter((item) => item.id !== action.payload)
// })

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        deleteToDo: (state, action) =>
            state.filter((item) => item.id !== action.payload)
    }
});
const store = configureStore({reducer: toDos.reducer});

export const {
    addToDo,
    deleteToDo
} = toDos.actions;

export default store;