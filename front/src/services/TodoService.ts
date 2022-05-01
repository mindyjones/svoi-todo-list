import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ITodo } from "../models/ITodo"


export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (build) => ({
        fetchAllTodos: build.query<ITodo[], number>({
            query: () => ({
                url: '/todos'
            })
        })
    })
})