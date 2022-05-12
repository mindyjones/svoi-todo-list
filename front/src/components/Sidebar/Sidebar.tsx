import { FC } from 'react'
import { Grid, Popover, Skeleton, Stack, Typography } from '@mui/material'
import TagsBlock from '../TagsBlock';
import CustomButton from '../CustomButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { tagAPI } from 'services/TagsService';

import './Sidebar.css'
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ITag } from 'models';
import AddTagBlock from 'components/AddTagBlock';
interface ISidebar {
    width?: number
}

const Sidebar: FC<ISidebar> = ({ width }) => {
    const { data: tags, error, isLoading } = tagAPI.useFetchAllTagsQuery(0)
    const { changeTag } = useActions()
    const { selectedTag } = useTypedSelector(state => state)

    const onClick = (value: ITag) => {
        changeTag(value)
    }

    return (
        <Grid
            container
            direction="column"
            className='sidebar'
            sx={{ width: 200 }}
        >
            <Grid item container
                direction="row"
                alignItems="center"
                className="sidebar__item sidebar__all"
            >
                <CustomButton
                    icon={<FormatListBulletedIcon className="sidebar__icon" />}
                    className='sidebar__tag-button'
                    onClick={() => onClick({
                        id: 0, title: "", color: ""
                    })}
                >
                    <Typography className="sidebar__tag-title">Все задачи</Typography>
                </CustomButton>
            </Grid>
            <Grid item className="sidebar__item" mb={3}>
                {
                    isLoading
                        ? <Stack>
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                        </Stack>
                        : <TagsBlock onClick={onClick} maxWidth={200} selected={selectedTag.id} tags={tags} />
                }
            </Grid>
            <Grid item className="sidebar__item sidebar__add">
                <AddTagBlock />
            </Grid>
        </Grid >
    )
}

export default Sidebar