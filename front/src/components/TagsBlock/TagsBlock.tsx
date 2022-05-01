import { Button, ButtonGroup, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { ITag } from '../../types/types';
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
            <ButtonGroup
                orientation="vertical"
                variant="text"
                sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {
                    fakeTags.map(tag =>
                        <Button

                            key={tag.id}
                            className='sidebar__tag-button'
                            startIcon={<CircleIcon className='sidebar__tag-icon'
                                sx={{
                                    color: tag.color,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: 160
                                }}
                            />} >
                            <Typography className="sidebar__tag-title"   >{tag.title}</Typography>
                        </Button>
                    )
                }

            </ButtonGroup>
        </Container >
    )
}

export default TagsBlock