import React, { FC, useEffect, useState } from 'react'
import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import TagsBlock from '../TagsBlock';
import CustomButton from '../CustomButton/CustomButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { tagAPI } from 'services/TagsService';

import './Sidebar.css'
interface ISidebar {
    width?: number
}

const Sidebar: FC<ISidebar> = ({ width }) => {
    const { data: tags, error, isLoading } = tagAPI.useFetchAllTagsQuery(0)


    const [tagSelected, setTagSelected] = useState(0)

    const onClick = (value: number) => {
        setTagSelected(value)
    }

    return (
        <Grid
            container
            direction="column"
            className='sidebar'
            sx={{ width: 200 }}>
            <Grid item container
                direction="row"
                alignItems="center"
                className="sidebar__item sidebar__all"
            >
                <CustomButton
                    icon={<FormatListBulletedIcon className="sidebar__icon" />}
                    className='sidebar__tag-button'
                    onClick={() => onClick(0)}
                >
                    <Typography className="sidebar__tag-title">Все задачи</Typography>
                </CustomButton>
            </Grid>
            <Grid item className="sidebar__item">
                {
                    isLoading
                        ? <Stack>
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                            <Skeleton height={36} />
                        </Stack>
                        : <TagsBlock onClick={onClick} maxWidth={200} selected={tagSelected} tags={tags} />
                }
            </Grid>
            <Grid item className="sidebar__item sidebar_add">

            </Grid>
        </Grid >
    )
}

export default Sidebar