import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../state/postsSlice'

const Posts = () => {
    const posts = useSelector(getAllPosts)
    let postsBlock

    if (posts.length === 0) {
        return <h2>No posts found</h2>
    } else {
        postsBlock = posts.map(post => (
            <div key={post.id}>
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

