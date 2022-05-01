import { Divider, Typography } from '@mui/material'
import React, { FC } from 'react'
import TodoList from '../components/TodoList'
import { todoAPI } from '../services/TodoService'

const fakeTag = 'Домашние дела'

const HomePage: FC = () => {
    const { data: todos } = todoAPI.useFetchAllTodosQuery(0)

    return (
        <>
            <Typography variant='h1' sx={{ marginBottom: 3 }}>{fakeTag}</Typography>
            <Divider />
            <TodoList todos={todos} />
        </>
    )
}

export default HomePage