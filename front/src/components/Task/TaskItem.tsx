import React, { FC } from 'react'

import { FormGroup, Stack, Typography } from '@mui/material'
import useTaskIcon from '../../hooks/useTaskIcon'
import { ITodo } from '../../types/types'

interface TaskItemProps {
  task: ITodo
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const icon = useTaskIcon({ state: task.state })

  return (
    <FormGroup>
      <Stack alignItems="center" direction='row' spacing={3}>
        {icon}
        <Typography variant='body1'>
          {task.title}
        </Typography>
      </Stack>
    </FormGroup>
  )
}

export default TaskItem