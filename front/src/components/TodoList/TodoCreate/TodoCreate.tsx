import { Button, Container, Grid, IconButton, styled, TextField, Typography } from '@mui/material'
import Iconify from 'components/iconify';
import React, { FC, useState } from 'react'



const CustomLabel = styled(Grid)(() => ({
    cursor: 'pointer',
    color: '#B4B4B4',
    '&:hover': {
        // backgroundColor: grey[100],
        color: '#878787',
        // textShadow: '1px 1px #000',

    },
}));

interface TodoCreateProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newTaskText: string;
    sumbitHandler: () => void;
}

const TodoCreate: FC<TodoCreateProps> = ({ onChange, newTaskText, sumbitHandler }) => {
    const [showInput, setShowInput] = useState(false)

    const handleClick = () => {

        setShowInput(false)
        sumbitHandler()
    }

    const handleShow = () => {
        setShowInput(!showInput)
    }

    return (
        <>
            {!showInput ?
                <>
                    <CustomLabel alignItems="center" direction='row' spacing={3} container onClick={handleShow}>
                        <Grid item xs={1}>
                            <IconButton disableRipple disableFocusRipple >
                                <Iconify icon='akar-icons:plus' sx={{ fontSize: 28 }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='body1'>
                                Новая задача
                            </Typography>
                        </Grid>
                    </CustomLabel>
                </>
                : <Grid container>
                    <Grid item md={11} mb={2} component="form" onSubmit={handleClick}>
                        <TextField
                            fullWidth
                            hiddenLabel
                            defaultValue=""
                            autoComplete='off'
                            size="small"
                            autoFocus
                            onChange={onChange}
                            value={newTaskText}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button
                                variant="contained"
                                onClick={handleClick}
                            >Добавить задачу</Button>
                        </Grid>

                        <Grid item>
                            <Button
                                variant="outlined"

                                sx={{
                                    color: 'rgba(0, 0, 0, 0.26)',
                                    border: '1px solid rgba(0, 0, 0, 0.12)'
                                }}
                                onClick={handleShow}
                            >Отмена</Button>
                        </Grid>
                    </Grid>
                </Grid>
            }

        </>

    )
}

export default TodoCreate