import React from 'react';

function PostList({ posts }) {
    const data = posts;
    console.log(posts);
    return (
        <ul>
            {posts.map(post => (
                <li key={post.key}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;
