import React, { useState } from 'react'

import { Box, Container, Divider } from '@mui/material'

import { todoAPI } from 'services/TodoService';
import { ITodo, ITag } from 'models'

import TaskItem from 'components/Task/TaskItem'
import TodoCreate from 'components/TodoList/TodoCreate/TodoCreate'

import './TodoList.css'
import TodoListTitle from './TodoListTitle';
interface TodoListProps {
    todos?: ITodo[],
    selectedTag: ITag
}

const TodoList: React.FC<TodoListProps> = ({ todos, selectedTag }) => {
    const [newTaskText, setNewTaskText] = useState('')
    const [createTodo] = todoAPI.useCreateTodoMutation()
    const [updateTodo] = todoAPI.useUpdateTodoMutation()
    const [removeTodo] = todoAPI.useRemoveTodoMutation()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value)
    }

    const sumbitHandler: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createTodo({
            title: newTaskText,
            date: "",
            state: "created",
            tags: [selectedTag.id],
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
            <TodoListTitle selectedTag={selectedTag} />
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