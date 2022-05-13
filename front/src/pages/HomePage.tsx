import React, { FC } from 'react'
import { Skeleton, Stack } from '@mui/material'

import TodoList from 'components/TodoList'
import { todoAPI } from 'services/TodoService'
import { useTypedSelector } from 'hooks/useTypedSelector'

const HomePage: FC = () => {
    const { data: todos, isLoading } = todoAPI.useFetchAllTodosQuery(0)

    const { selectedTag } = useTypedSelector(state => state)

    const filteredTodos = (tagId: number) => {
        if (tagId === 0) return todos
        return todos?.filter(todo =>
            todo.tags.some(tag => tag === tagId)
        )
    }

    return (
        <>
            {isLoading
                ? <Stack>
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                    <Skeleton className='task__container' />
                </Stack>
                : <TodoList todos={filteredTodos(selectedTag.id)} selectedTag={selectedTag} />
            }
        </>
    )
}

export default HomePage