import React, { FC, useState } from 'react'

import { ITag } from 'models';

import { Box, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { tagAPI } from 'services/TagsService';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
interface TodoListTitleProps {
    selectedTag: ITag
}

const TodoListTitle: FC<TodoListTitleProps> = () => {
    const [editeble, setEditeble] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const { selectedTag } = useTypedSelector(state => state)
    const { changeTag } = useActions()
    const [updateTag, { }] = tagAPI.useUpdateTagMutation()

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
        updateTag({ ...selectedTag, title: newTitle })
        changeTag({ ...selectedTag, title: newTitle })
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
                        <EditIcon className='todolist__title-edit' sx={{ color: '#DFDFDF' }} />
                    </Typography>
                    : <Typography className={'todolist__title'} variant='h1'>
                        {'Все задачи'}
                    </Typography>
            }
        </>
    )
}

export default TodoListTitle