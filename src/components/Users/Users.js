import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const users = useSelector(state => state.users)
    let usersBlock

    if (users.length === 0) {
        usersBlock = <h2> No users found</h2 >
    } else {
        usersBlock = users.map(post => (
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
    }
    return (
        <>
            {usersBlock}
        </>
    )
}

export default Users
