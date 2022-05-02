import React, { FC } from 'react'
import { Divider, Skeleton, Stack, Typography } from '@mui/material'
import TodoList from 'components/TodoList'
import { todoAPI } from 'services/TodoService'
import { useTypedSelector } from 'hooks/useTypedSelector'

const fakeTag = 'Домашние дела'

const HomePage: FC = () => {
    const { data: todos, error, isLoading } = todoAPI.useFetchAllTodosQuery(0)

    const { selectedTag } = useTypedSelector(state => state)

    const filteredTodos = (tagId: number) => {
        if (tagId === 0) return todos
        return todos?.filter(todo =>
            todo.tags.some(tag => tag === tagId)
        )
    }

    return (
        <>
            <Typography variant='h1' sx={{ marginBottom: 3 }}>{fakeTag}</Typography>
            <Divider />
            {isLoading
                ? <Stack>
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                </Stack>
                : <TodoList todos={filteredTodos(selectedTag.id)} />
            }
        </>
    )
}

export default HomePage