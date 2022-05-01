import { Button, IconButton } from '@mui/material'
import React, { FC } from 'react'
import useTaskIcon, { TaskIconProps } from '../../hooks/useTaskIcon'


interface TaskButtonProps {
    state: string
}

const TaskButton: FC<TaskButtonProps> = ({ state }) => {
    // const icon = useTaskIcon({ state  TaskIconProps })
    return (
        <IconButton aria-label="delete" size="large">
            {/* {icon} */}
        </IconButton>
    )
}

export default TaskButton