import axios from "axios";
import { AppDispatch } from "..";
import { ITodo, ITag } from "../../types/types";
import { todoSlice } from "./TodoSlice";
import { tagsSlice } from "./TagsSlice";


export const fetchTodo = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const response = await axios.get<ITodo[]>('http://localhost:3000/todos')
        dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(todoSlice.actions.todosFetchingError(e.message))
    }
}

export const fetchTags = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(tagsSlice.actions.tagsFetching())
        const response = await axios.get<ITag[]>('http://localhost:3000/tags')
        dispatch(tagsSlice.actions.tagsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(tagsSlice.actions.tagsFetchingError(e.message))
    }
}