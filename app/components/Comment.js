import React from 'react'
import PostMetaInfo from './PostMetaInfo'
import PropTypes from 'prop-types'

export default function Comment({ comment }) {
    return (
        <div className='comment'>
            <PostMetaInfo by={comment.by} time={comment.time} id={comment.id}/>
            <p dangerouslySetInnerHTML={{ __html: comment.text }} />
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}
