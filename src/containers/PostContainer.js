import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null
    };
    const dispatch = useDispatch();

    useEffect(() => {
        // if(data) return;
        dispatch(getPost(postId));
        // return () => {
        //     dispatch(clearPost());
        // };
    }, [postId, dispatch]);

    if (loading && !data) return <div>Loading..</div>;
    if (error) return <div>Error..</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;
