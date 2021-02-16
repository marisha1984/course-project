import React from 'react'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'
import PropTypes from 'prop-types'

const user_url = 'https://hn.ui.dev/user?id='

export default function PostsList({ posts }) {
    if (posts.length === 0) {
        return (
            <p className='center-text'>
                This user hasn't posted yet
            </p>
        )
    }
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id} className="post">
                        <Title url={post.url} title={post.title} id={post.id} />
                        <PostMetaInfo
                            by={post.by}
                            time={post.time}
                            id={post.id}
                            descendants={post.descendants}
                        />

                    </li>
                )
            })}
        </ul>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
}
