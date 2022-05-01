import { TextField } from '@mui/material'
import React, { FC } from 'react'

interface TodoCreateProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoCreate: FC<TodoCreateProps> = ({ onChange }) => {
    return (
        <TextField
            fullWidth
            // label="fullWidth"
            id="newTask"
            variant="standard"
            onChange={onChange}
        />
    )
}

export default TodoCreate