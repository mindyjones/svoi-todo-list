import React from 'react'

import { ITodo } from '../../models/ITodo'
import { Container } from '@mui/material'
import TaskItem from '../Task/TaskItem'

interface ITodoList {
    todos: ITodo[]
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
    return (
        <Container>
            {todos.map(e =>
                <Container key={e.id} sx={{ margin: 2 }}>
                    <TaskItem task={e} />
                </Container>
            )}

        </Container>
    )
}

export default TodoList