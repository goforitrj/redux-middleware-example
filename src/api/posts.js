const sleep = sec => new Promise(resolve => setTimeout(resolve, sec));

const posts = [
    { id: 1, title: 'culture', body: 'We have diverse cultures' },
    {
        id: 2,
        title: 'music',
        body: 'Listening music is what I love to do during studying'
    },
    {
        id: 3,
        title: 'cartoon',
        body: 'I always watch webtoons before going sleep'
    }
];

export const getPosts = async () => {
    await sleep(3000);
    return posts;
};

export const getPost = async id => {
    await sleep(3000);
    return posts.find(post => post.id === id);
};
