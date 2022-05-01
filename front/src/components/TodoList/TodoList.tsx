import React from 'react'

import { Container } from '@mui/material'
import TaskItem from '../Task/TaskItem'
import { ITodo } from '../../models/ITodo'
import './TodoList.css'
interface TodoListProps {
    todos?: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <Container>
            {todos && todos.map(e =>
                <Container key={e.id} className='task__container'>
                    <TaskItem task={e} />
                </Container>
            )}
        </Container>
    )
}

export default TodoList