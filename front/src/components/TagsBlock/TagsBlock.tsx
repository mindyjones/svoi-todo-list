import React, { FC } from 'react'

interface ITagsBlock {
    tags: Array<{}>
}

const TagsBlock: FC<ITagsBlock> = ({ tags }) => {
    return (
        <div>TagsBlock</div>
    )
}

export default TagsBlock