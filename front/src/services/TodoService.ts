import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ITodo } from "../models/ITodo"


export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        fetchAllTodos: build.query<ITodo[], any>({
            query: () => ({
                url: '/todos'
            }),
            providesTags: result => ['Todo']
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        removeTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'DELETE',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
    })
})