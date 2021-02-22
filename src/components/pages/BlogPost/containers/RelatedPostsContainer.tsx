import React from 'react';
import { usePosts } from '../../../../hooks/usePosts';
import PostsList from '../../../organisms/PostsList';



const RelatedPostsContainer: React.FunctionComponent = () => {
    const { posts } = usePosts();
    const postsSpread = { ...posts, data: posts.data.reverse().slice(0, 4) }

    function handleShare() {
        alert('share')
    }

    // handleViewPost(){

    // }
    return (
        <PostsList title="Related Posts" posts={postsSpread} onShare={handleShare} />
    )
}
export default RelatedPostsContainer;
