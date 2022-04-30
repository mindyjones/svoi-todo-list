import React, { FC } from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { TodoState } from '../models/ITodo';

interface TaskIconProps {
    state: string
}

const useTaskIcon: FC<TaskIconProps> = ({ state }) => {
    const findIcon = () => {
        switch (state) {
            case 'created':
                return <CircleOutlinedIcon />
            case 'completed':
                return <CheckCircleOutlinedIcon color='success' />
            case 'archived':
                return <CheckCircleOutlinedIcon color='disabled' />
            default:
                return <CircleOutlinedIcon />
        }
    }
    return findIcon()
}

export default useTaskIcon