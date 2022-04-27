import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";

interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    }
})

export default todoSlice.reducer