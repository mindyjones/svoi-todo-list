import React, { FC, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import './Sidebar.css'
import TagsBlock from '../TagsBlock';
import CustomButton from '../CustomButton/CustomButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
interface ISidebar {
    width?: number
}

const Sidebar: FC<ISidebar> = ({ width }) => {
    const [tagSelected, setTagSelected] = useState(0)

    const onClick = (value: number) => {
        setTagSelected(value)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
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
                <TagsBlock onClick={onClick} maxWidth={200} selected={tagSelected} />
            </Grid>
            <Grid item className="sidebar__item sidebar_add">

            </Grid>
        </Grid >
    )
}

export default Sidebar