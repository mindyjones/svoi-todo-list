import { FC } from 'react'
import { Grid, Skeleton, Stack, Typography, Button } from '@mui/material'
import TagsBlock from '../TagsBlock';
import { tagAPI } from 'services/TagsService';

import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ITag } from 'models';

import CustomButton from 'components/CustomButton';
import AddTagBlock from 'components/AddTagBlock';
import Iconify from 'components/iconify';

import './Sidebar.css'
interface ISidebar {
    width?: number
}

const Sidebar: FC<ISidebar> = ({ width }) => {
    const { data: tags, isLoading } = tagAPI.useFetchAllTagsQuery(0)
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
                    className='sidebar__tag-button'
                    onClick={() => onClick({
                        id: 0, title: "", color: ""
                    })}
                >
                    <Grid container justifyContent='space-between' alignItems='center' direction='row' spacing={1}>
                        <Grid item md={2} container justifyContent='center'>
                            <Iconify icon='bi:list-ul' sx={{ fontSize: 20, color: '#000' }} />
                        </Grid>
                        <Grid item md={10}>
                            <Typography className="sidebar__tag-title">Все задачи</Typography>
                        </Grid>
                    </Grid>
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