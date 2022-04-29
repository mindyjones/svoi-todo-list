import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TodoList from '../components/TodoList'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchTodo } from '../store/reducers/ActionCreators'

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { todos } = useAppSelector(state => state.todoReducer)

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])


    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
}

export default HomePage