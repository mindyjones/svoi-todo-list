import React, { FC } from 'react'
import { Divider, Skeleton, Stack, Typography } from '@mui/material'
import TodoList from '../components/TodoList'
import { todoAPI } from '../services/TodoService'

const fakeTag = 'Домашние дела'

const HomePage: FC = () => {
    const { data: todos, error, isLoading } = todoAPI.useFetchAllTodosQuery(0)

    return (
        <>
            <Typography variant='h1' sx={{ marginBottom: 3 }}>{fakeTag}</Typography>
            <Divider />
            {isLoading
                ? <Stack>
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                </Stack>
                : <TodoList todos={todos} />
            }
        </>
    )
}

export default HomePage