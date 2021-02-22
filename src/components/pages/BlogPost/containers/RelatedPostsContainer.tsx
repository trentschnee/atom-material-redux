import { Button, Grid, makeStyles, Typography } from '@material-ui/core';

import React, { useState } from 'react';
import { usePosts } from '../../../../hooks/usePosts';
import Section from '../../../molecules/Section';
import BlogPost from '../../../organisms/BlogPost';
import PostsList from '../../../organisms/PostsList';

interface IRelatedPostsContainerProps {
}

const RelatedPostsContainer: React.FunctionComponent<IRelatedPostsContainerProps> = (props) => {
    const { posts } = usePosts();
    const postsSpread = { ...posts, data: posts.data.reverse().slice(0, 4) }
   
    function handleShare() {
        alert('share')
    }
  
    // handleViewPost(){

    // }
    return (<Section title="Related Posts">
        <PostsList posts={postsSpread} onShare={handleShare} />


    </Section>)
}
export default RelatedPostsContainer;
