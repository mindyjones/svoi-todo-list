
import React, { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

import { ITag } from "models/ITag"
import './TagsBlock.css'

interface ITagsBlock {
    tags?: ITag[];
    selected?: number;
    maxWidth: string | number;
    onClick: (e: ITag) => void;
}

const TagsBlock: FC<ITagsBlock> = ({ tags, selected, maxWidth, onClick }) => {
    return (
        <Stack sx={{ maxWidth }}>
            {tags
                && tags.map(tag =>
                    <Button
                        variant={selected === tag.id ? "contained" : "text"}
                        key={tag.id}
                        className='sidebar__tag-button'
                        startIcon={<CircleIcon className='sidebar__icon' sx={{ color: tag.color }} />}
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            paddingLeft: 2,
                            paddingRight: 2,
                            justifyContent: "flex-start",
                        }}
                        onClick={() => onClick(tag)}
                        fullWidth
                    >
                        <Typography className="sidebar__tag-title">{tag.title}</Typography>
                    </Button>
                )
            }
        </Stack>
    )
}

export default TagsBlock