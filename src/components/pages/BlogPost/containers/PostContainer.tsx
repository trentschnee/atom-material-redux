import { Button, Grid, makeStyles, Typography } from '@material-ui/core';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../../../hooks/usePosts';
import BlogPost from '../../../organisms/BlogPost';

interface IPostContainerProps {
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        margin: '0 auto',
        marginTop: theme.spacing(1),
        marginButton: theme.spacing(1),
    }
}));
const PostContainer: React.FunctionComponent<IPostContainerProps> = (props) => {
    let { postID } = useParams<{ postID: string }>();
    const { posts } = usePosts();
    const foundPost = posts.data.find((post) => post.id === Number(postID));
    return (foundPost ? (<BlogPost title={foundPost.title} body={foundPost.body}  />) : (<Typography>Not found</Typography>))

}
export default PostContainer;
