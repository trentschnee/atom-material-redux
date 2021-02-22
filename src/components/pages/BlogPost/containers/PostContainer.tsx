import {  Typography } from '@material-ui/core';

import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../../../hooks/usePosts';
import BlogPost from '../../../organisms/BlogPost';

const PostContainer: React.FunctionComponent = () => {
    let { postID } = useParams<{ postID: string }>();
    const { posts } = usePosts();
    const foundPost = posts.data.find((post) => post.id === Number(postID));
    return (foundPost ? (<BlogPost title={foundPost.title} body={foundPost.body}  />) : (<Typography>Not found</Typography>))

}
export default PostContainer;
