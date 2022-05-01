import React from 'react'

import { Container } from '@mui/material'
import TaskItem from '../Task/TaskItem'
import { ITodo } from '../../types/types'

interface TodoListProps {
    todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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