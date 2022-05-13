import { FC } from 'react'
import Iconify from 'components/iconify';
export interface TaskIconProps {
    state: string,
    fontSize?: number
}

const useTaskIcon: FC<TaskIconProps> = ({ state, fontSize }) => {
    const findIcon = () => {
        switch (state) {
            case 'created':
                return <Iconify icon='akar-icons:circle' sx={{ fontSize: fontSize || 24 }} />
            case 'completed':
                return <Iconify icon='akar-icons:circle-check' sx={{ fontSize: fontSize || 24, color: '#42B883' }} />
            case 'archived':
                return <Iconify icon='ant-design:check-circle-twotone' sx={{ fontSize: fontSize || 24, color: 'disabled' }} />
            default:
                return <Iconify icon='akar-icons:circle-alert' />
        }
    }
    return findIcon()
}

export default useTaskIcon