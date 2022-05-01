import { Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TodoList from '../components/TodoList'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchTodo } from '../store/reducers/ActionCreators'

const fakeTag = 'Домашние дела'

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { todos } = useAppSelector(state => state.todoReducer)

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <>
            <Typography variant='h1' sx={{ marginBottom: 3 }}>{fakeTag}</Typography>
            <Divider />
            <TodoList todos={todos} />
        </>
    )
}

export default HomePage