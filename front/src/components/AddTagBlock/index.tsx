import React, { useState } from 'react'

import { Typography, Popover, Grid, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import CustomButton from 'components/CustomButton'
import CircleIcon from '@mui/icons-material/Circle';
import { tagsColor } from 'theme/tagsColor';

const AddTagBlock = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <CustomButton
                icon={<AddIcon className="sidebar__icon" />}
                className='sidebar__add-button'
                onClick={handleClick}
            >
                <Typography className="sidebar__add-title">Добавить тег</Typography>
            </CustomButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    square: false,
                    elevation: 2
                }}
            >
                <Grid direction='column' container m={3} width={235}>
                    <Grid item mb={2}>
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue=""
                            size="small"
                        />
                    </Grid>
                    <Grid item container justifyContent='space-between' mb={2}>
                        {
                            Object.values(tagsColor).map(color =>
                                <CircleIcon key={color} sx={{ color, border: '1px solid grey' }} />
                            )
                        }
                    </Grid>
                    <Grid item >
                        <Button variant="contained" fullWidth>Добавить</Button>
                    </Grid>
                </Grid>
            </Popover>
        </>
    )
}

export default AddTagBlock