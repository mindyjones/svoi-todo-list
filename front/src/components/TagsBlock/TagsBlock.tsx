import { Button, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { ITag } from '../../models/ITag'
import CircleIcon from '@mui/icons-material/Circle';
interface ITagsBlock {
    tags?: ITag[],
    selected?: number
}

const fakeTags = [
    {
        "id": 1,
        "title": "Работа",
        "color": "#42B883"
    },
    {
        "id": 2,
        "title": "Домашние дела",
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

const fakeSelect = 2

const TagsBlock: FC<ITagsBlock> = ({ tags, selected }) => {
    return (
        <Container className='sidebar__tags' sx={{ width: '100%' }}>
            {
                fakeTags.map(tag =>
                    <Button
                        className='sidebar__tag-button'
                        variant={fakeSelect === tag.id ? "outlined" : 'text'}
                        startIcon={<CircleIcon className='sidebar__tag-icon' sx={{ color: tag.color }} />} >
                        <Typography className="sidebar__tag-title" >{tag.title}</Typography>
                    </Button>
                )
            }
        </Container>
    )
}

export default TagsBlock