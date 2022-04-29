import React from 'react'

import { ITodo } from '../../models/ITodo'
import { Typography } from '@mui/material'

interface ITodoList {
    todos: ITodo[]
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
    return (
        <ul>
            {todos.map(e =>
                <li>
                    <Typography variant='h3'>
                        {e.title}
                    </Typography>
                </li>
            )}

        </ul>
    )
}

export default TodoList