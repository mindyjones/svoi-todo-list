import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
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
            {
                todos.map(e =>
                    <Typography variant='h3'>{e.title}</Typography>
                )
            }
        </div>
    )
}

export default HomePage