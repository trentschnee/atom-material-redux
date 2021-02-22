import * as React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Subscribe from '../../organisms/Subscribe';

import BlogPostTemplate from '../../templates/BlogPost';
import PostContainer from './containers/PostContainer';
import PostsContainer from './containers/PostContainer';
import RelatedPostsContainer from './containers/RelatedPostsContainer';
interface IBlogPostProps {

}
// TODO: Make it have a main layout for pages?
// Up to the page to determine what to stick where
const BlogPost: React.FunctionComponent<IBlogPostProps> = (props) => {
  // On loan, fetch posts
  
  return (
  
  <BlogPostTemplate header={<Header/>} footer={<Footer/>} post={<PostContainer/>} relatedPosts={<RelatedPostsContainer/>} />
  
  )
};

export default BlogPost;
