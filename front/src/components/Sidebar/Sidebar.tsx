import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './Sidebar.css'
import TagsBlock from '../TagsBlock';

interface ISidebar {
    width?: number
}

const Sidebar: FC<ISidebar> = ({ width }) => {
    return (
        <Grid container direction='column' className='sidebar' sx={{ width: 200 }}>
            <Grid item container
                direction="row"
                alignItems="center"
                className="sidebar__item sidebar__all"
            >
                <FormatListBulletedIcon className="sidebar__all-icon" fontSize='small' />
                <span className="sidebar__all-title">
                    Все задачи
                </span>
            </Grid>
            <Grid item className="sidebar__item">
                <TagsBlock />
            </Grid>
            <Grid item className="sidebar__item sidebar_add">

            </Grid>
        </Grid>
    )
}

export default Sidebar