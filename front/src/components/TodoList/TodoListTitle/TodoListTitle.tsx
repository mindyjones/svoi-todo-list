import React, { FC, useState } from 'react'

import { ITag } from 'models';

import { Box, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
interface TodoListTitleProps {
    selectedTag: ITag
}

const TodoListTitle: FC<TodoListTitleProps> = ({ selectedTag }) => {
    const [editeble, setEditeble] = useState(false)
    const [newTitle, setNewTitle] = useState(selectedTag.title)

    const handleClick = () => {
        setNewTitle(selectedTag.title)
        if (selectedTag.id !== 0)
            setEditeble(true)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value)
    }

    const sumbitHandler: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        setEditeble(false)
        // event.preventDefault();
        // await createTodo({
        //     title: newTaskText,
        //     date: "",
        //     state: "created",
        //     tags: [selectedTag.id],
        // } as ITodo)
        // setNewTaskText('')
    }

    return (
        <>
            {editeble
                ? <Box component="form" onSubmit={sumbitHandler} onBlur={sumbitHandler}>
                    <TextField
                        // id="standard-basic"
                        // label="Standard"
                        InputProps={{
                            classes: {
                                input: 'todolist__title todolist__title-input',
                            },
                            sx: { color: selectedTag.color }
                        }}
                        value={newTitle}
                        onChange={handleChange}
                        variant="standard"
                        autoFocus

                        fullWidth
                    />
                </Box>
                : selectedTag.title
                    ? <Typography className='todolist__title todolist__title-tag' variant='h1' onClick={handleClick} sx={{ color: selectedTag.color }}>
                        {selectedTag.title}
                        <EditIcon className='todolist__title-edit' />
                    </Typography>
                    : <Typography className={'todolist__title'} variant='h1'>
                        {'Все задачи'}
                    </Typography>
            }
        </>
    )
}

export default TodoListTitle