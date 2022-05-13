import React, { FC } from 'react'

import { FormGroup, Grid, IconButton, Stack, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

import useTaskIcon from 'hooks/useTaskIcon'
import { ITodo, TodoState } from 'models/ITodo'
import Iconify from 'components/iconify';
interface TaskItemProps {
    task: ITodo;
    remove: (task: ITodo) => void
    update: (task: ITodo) => void
}

const TaskItem: FC<TaskItemProps> = ({ task, remove, update }) => {
    const icon = useTaskIcon({ state: task.state, fontSize: 32 })

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(task)
    }

    const handleStateUpdate = (event: React.MouseEvent) => {
        const state = task.state === TodoState.created ? TodoState.completed : TodoState.created
        update({ ...task, state })
    }

    return (
        <FormGroup>
            <Grid alignItems="center" direction='row' spacing={3} container>
                <Grid item xs={1}>
                    <IconButton onClick={handleStateUpdate}>
                        {icon}
                    </IconButton>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='body1'>
                        {task.title}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={handleRemove}>
                        <Iconify icon='ic:outline-clear' />
                    </IconButton>
                </Grid>
            </Grid>
        </FormGroup>
    )
}

export default TaskItem