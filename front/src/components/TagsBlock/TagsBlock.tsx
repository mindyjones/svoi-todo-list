import { Button, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { ITag } from '../../types/types';
import './TagsBlock.css'

interface ITagsBlock {
    tags?: ITag[];
    selected?: number;
    maxWidth: string | number;
    onClick: (e: number) => void;
}

const fakeTags = [
    {
        "id": 1,
        "title": "Работа",
        "color": "#42B883"
    },
    {
        "id": 2,
        "title": "Домашние дела дела дела",
        "color": "#64C4ED"
    },
    {
        "id": 3,
        "title": "Покупки",
        "color": "#C9D1D3"
    },
    {
        "id": 4,
        "title": "Фильмы",
        "color": "#FFBBCC"
    }
]

const TagsBlock: FC<ITagsBlock> = ({ tags, selected, maxWidth, onClick }) => {
    return (
        <Stack sx={{ maxWidth }}>
            {
                fakeTags.map(tag =>
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
                        onClick={() => onClick(tag.id)}
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