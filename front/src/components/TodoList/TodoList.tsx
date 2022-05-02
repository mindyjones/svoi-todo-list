import React, { useState } from 'react'

import { Box, Container, Divider, Typography } from '@mui/material'
import TaskItem from '../Task/TaskItem'
import './TodoList.css'
import TodoCreate from 'components/TodoCreate/TodoCreate'
import { todoAPI } from 'services/TodoService';
import { ITodo, ITag } from 'models'
interface TodoListProps {
    todos?: ITodo[],
    selectedTag: ITag
}

const TodoList: React.FC<TodoListProps> = ({ todos, selectedTag }) => {
    const [newTaskText, setNewTaskText] = useState('')
    const [createTodo, { }] = todoAPI.useCreateTodoMutation()
    const [updateTodo, { }] = todoAPI.useUpdateTodoMutation()
    const [removeTodo, { }] = todoAPI.useRemoveTodoMutation()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value)
    }

    const sumbitHandler: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newTaskText)
        await createTodo({
            title: newTaskText,
            date: "",
            state: "created",
            tags: [],
        } as ITodo)
        setNewTaskText('')
    }

    const removeHandler = (task: ITodo) => {
        removeTodo(task)
    }

    const updateHandler = (task: ITodo) => {
        updateTodo(task)
    }

    return (
        <>
            <Typography className='todolist__title' variant='h1'>{selectedTag.title || 'Все задачи'}</Typography>
            <Divider />

            <Container className='todolist__container'>
                {todos && todos.map(e =>
                    <Container key={e.id} className='task__container'>
                        <TaskItem task={e} remove={removeHandler} update={updateHandler} />
                    </Container>
                )}
                <Box component="form" onSubmit={sumbitHandler}
                    className='todolist__input'
                >
                    <TodoCreate onChange={handleChange} newTaskText={newTaskText} />
                </Box>
            </Container>
        </>
    )
}

export default TodoList