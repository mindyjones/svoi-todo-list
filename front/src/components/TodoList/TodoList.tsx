import React, { useState } from 'react';

import { Container, Divider, Stack, Typography } from '@mui/material';

import { todoAPI } from 'services/TodoService';
import { ITodo, ITag } from 'models';

import TaskItem from 'components/Task/TaskItem';
import TodoCreate from 'components/TodoList/TodoCreate/TodoCreate';

import './TodoList.css';
import TodoListTitle from './TodoListTitle';
interface TodoListProps {
    todos?: ITodo[];
    selectedTag: ITag;
}

const TodoList: React.FC<TodoListProps> = ({ todos, selectedTag }) => {
    const [newTaskText, setNewTaskText] = useState('');
    const [createTodo] = todoAPI.useCreateTodoMutation();
    const [updateTodo] = todoAPI.useUpdateTodoMutation();
    const [removeTodo] = todoAPI.useRemoveTodoMutation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    };

    const sumbitHandler = async () => {
        if (newTaskText === '') return;
        await createTodo({
            title: newTaskText,
            date: '',
            state: 'created',
            tags: [selectedTag.id],
        } as ITodo);
        setNewTaskText('');
    };

    const removeHandler = (task: ITodo) => {
        removeTodo(task);
    };

    const updateHandler = (task: ITodo) => {
        updateTodo(task);
    };

    return (
        <>
            <Container className="todolist__container">
                <TodoListTitle selectedTag={selectedTag} />
                <Divider />

                {todos && todos.length > 0 ? (
                    todos.map((e) => (
                        <Stack key={e.id} className="task__container">
                            <TaskItem task={e} remove={removeHandler} update={updateHandler} />
                        </Stack>
                    ))
                ) : (
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <Typography className="todolist__title-empty">
                            Задачи отсутствуют
                        </Typography>
                    </Stack>
                )}
                <TodoCreate
                    onChange={handleChange}
                    newTaskText={newTaskText}
                    sumbitHandler={sumbitHandler}
                />
            </Container>
        </>
    );
};

export default TodoList;
