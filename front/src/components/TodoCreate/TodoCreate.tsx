import { TextField } from '@mui/material'
import React, { FC } from 'react'

interface TodoCreateProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newTaskText: string;
}

const TodoCreate: FC<TodoCreateProps> = ({ onChange, newTaskText }) => {
    return (
        <TextField
            fullWidth
            // label="fullWidth"
            variant="standard"
            onChange={onChange}
            value={newTaskText}
        />
    )
}

export default TodoCreate