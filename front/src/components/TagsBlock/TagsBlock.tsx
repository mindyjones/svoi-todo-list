
import { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'

import { ITag } from "models/ITag"
import './TagsBlock.css'
import Iconify from 'components/iconify';

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
                        startIcon={<Iconify icon='akar-icons:circle-fill' sx={{ color: tag.color }} />}
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