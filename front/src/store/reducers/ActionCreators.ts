import axios from "axios";
import { AppDispatch } from "..";
import { ITodo } from "../../models/ITodo";
import { todoSlice } from "./TodoSlice";


export const fetchTodo = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const response = await axios.get<ITodo[]>('http://localhost:3000/todos')
        dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(todoSlice.actions.todosFetchingError(e.message))
    }
}