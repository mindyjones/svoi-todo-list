import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import useTaskIcon from '../../hooks/useTaskIcon'
import { ITodo } from '../../models/ITodo'

interface TaskItemProps {
  task: ITodo
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const icon = useTaskIcon({ state: task.state })

  return (
    <Stack justifyItems='center' direction='row' spacing={3}>
      {icon}
      <Typography variant='body1'>
        {task.title}
      </Typography>
    </Stack>
  )
}

export default TaskItem