import * as React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Subscribe from '../../organisms/Subscribe';

import HomeTemplate from '../../templates/Home';
import PostsContainer from './containers/PostsContainer';

const HomePage: React.FunctionComponent = () => {
  // On loan, fetch posts
  
  return (
  
  <HomeTemplate header={<Header/>} footer={<Footer/>} posts={<PostsContainer/>} subscribe={<Subscribe/>}/>
  
  )
};

export default HomePage;
