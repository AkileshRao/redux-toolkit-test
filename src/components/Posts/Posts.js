import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector(state => state.posts)
    let postsBlock

    if (posts.length === 0) {
        return <h2>No posts found</h2>
    } else {
        postsBlock = posts.map(post => (
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
    }

    return (
        <>{postsBlock}</>
    )
}

export default Posts

