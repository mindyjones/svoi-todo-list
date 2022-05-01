import React, { FC } from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface TaskIconProps {
    state: string
}

const useTaskIcon: FC<TaskIconProps> = ({ state }) => {
    const findIcon = () => {
        switch (state) {
            case 'created':
                return <CircleOutlinedIcon fontSize='large' />
            case 'completed':
                return <CheckCircleIcon fontSize='large' color='success' />
            case 'archived':
                return <CheckCircleIcon fontSize='large' color='disabled' />
            default:
                return <CircleOutlinedIcon />
        }
    }
    return findIcon()
}

export default useTaskIcon