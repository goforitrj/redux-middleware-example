import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    console.log(data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    if (!data) return null;
    return <PostList posts={data} />;
}

export default PostListContainer;
