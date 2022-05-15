
import { FC } from 'react'

import { Button, Grid, IconButton, Typography } from '@mui/material'

import { ITag } from "models/ITag"
import Iconify from 'components/iconify';
import './TagsBlock.css'
import { tagAPI } from 'services/TagsService';

interface ITagsBlock {
    tags?: ITag[];
    selected?: number;
    maxWidth: string | number;
    onClick: (e: ITag) => void;
}

const TagsBlock: FC<ITagsBlock> = ({ tags, selected, maxWidth, onClick }) => {
    const [removeTag] = tagAPI.useRemoveTagMutation()


    const handleDeleteTag = (tag: ITag) => {
        removeTag(tag)
    }

    return (
        <Grid sx={{ maxWidth }}>
            {tags
                && tags.map(tag =>
                    <Button
                        variant={selected === tag.id ? "contained" : "text"}
                        key={tag.id}
                        className='sidebar__tag-button'
                        onClick={() => onClick(tag)}
                        fullWidth
                    >
                        <Grid container justifyContent='space-between' alignItems='center' direction='row' >
                            <Grid item md={2} container justifyContent='center'>
                                <Iconify icon='akar-icons:circle-fill' sx={{ color: tag.color, fontSize: 14 }} />
                            </Grid>
                            <Grid item md={8}>
                                <Typography className="sidebar__tag-title">{tag.title}</Typography>
                            </Grid>
                            <Grid item md={selected === tag.id ? 2 : 1} container justifyContent='center'>
                                {selected === tag.id &&
                                    <IconButton onClick={() => handleDeleteTag(tag)} disableRipple disableFocusRipple sx={{ color: '#fff' }}>
                                        <Iconify icon='ic:outline-clear' sx={{ fontSize: 24 }} />
                                    </IconButton>
                                }
                            </Grid>
                        </Grid>
                    </Button>
                )
            }
        </Grid >
    )
}

export default TagsBlock