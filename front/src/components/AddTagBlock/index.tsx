import React, { useState } from 'react'

import { Typography, Popover, Grid, TextField, Button, styled, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import CustomButton from 'components/CustomButton'
import { tagsColor } from 'theme/tagsColor';
import Iconify, { IconifyProps } from 'components/iconify';
import { tagAPI } from 'services/TagsService';
import { ITag } from 'models';

const AddTagBlock = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [selectColor, setSelectColor] = useState<string | undefined | null>(null)
    const [title, setTitle] = useState('')

    const [createTag] = tagAPI.useCreateTagMutation()

    const sumbitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
        if (title === '' || selectColor === null)
            return
        setSelectColor(null)
        setTitle('')
        setAnchorEl(null);
        await createTag({
            title: title,
            color: selectColor
        } as ITag)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const StyledIcon = styled(Iconify)(() => ({
        fontSize: 24,
        outlineOffset: '-2px',
        '&:hover': {
            // backgroundColor: grey[100],
            outline: '2px solid grey',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',

        },
    }));

    const colorHandler = (color: string) => {
        setSelectColor(color)
    }

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

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
                            defaultValue=""
                            autoComplete='off'
                            size="small"
                            autoFocus
                            onChange={titleHandler}
                        />
                    </Grid>
                    <Grid item container justifyContent='space-between' mb={2}>
                        {
                            Object.values(tagsColor).map((color, index) =>
                                <IconButton aria-label="select color"
                                    key={index}
                                    disableRipple
                                    sx={{ padding: 0 }}
                                    onClick={() => colorHandler(color)}
                                    value={title}
                                >
                                    <StyledIcon icon='akar-icons:circle-fill'
                                        sx={selectColor === color ?
                                            { outline: '3px solid grey', borderRadius: '50%', color }
                                            : { color }}
                                    />
                                </IconButton>
                            )
                        }
                    </Grid>
                    <Grid item >
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={sumbitHandler}
                        >Добавить</Button>
                    </Grid>
                </Grid>
            </Popover>
        </>
    )
}

export default AddTagBlock