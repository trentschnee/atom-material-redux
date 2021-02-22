import { Button, Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { usePosts } from '../../../../hooks/usePosts';
import Section from '../../../molecules/Section';
import PostsList from '../../../organisms/PostsList';

interface IPostsContainerProps {
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        margin: '0 auto',
        marginTop: theme.spacing(1),
        marginButton: theme.spacing(1),
    }
}));
const PostsContainer: React.FunctionComponent<IPostsContainerProps> = (props) => {
    const { posts } = usePosts();

    const [loadingMoreClicks, setLoadingMoreClicks] = useState<number>(1);
    const postsSpread = { ...posts, data: posts.data.slice(0, loadingMoreClicks * 20) }
    const classes = useStyles();
    function handleShare() {
        alert('share')
    }
    function handleLoadMore() {
        setLoadingMoreClicks(loadingMoreClicks + 1);
    }
    // handleViewPost(){

    // }
    return (
        <PostsList title={"Blog Posts"} posts={postsSpread} onShare={handleShare}>
            {loadingMoreClicks * 20 < posts.data.length && (<Button classes={{ root: classes.root }} onClick={handleLoadMore} >Load More Posts ...</Button>)}
        </PostsList>

    )


}
export default PostsContainer;
