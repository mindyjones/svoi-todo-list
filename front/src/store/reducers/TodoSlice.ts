import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";
import { fetchTodo } from './ActionCreators';

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
    reducers: {},
    extraReducers: {
        [fetchTodo.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload;
        },
        [fetchTodo.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchTodo.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer