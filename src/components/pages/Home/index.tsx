import * as React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Subscribe from '../../organisms/Subscribe';

import HomeTemplate from '../../templates/Home';
import PostsContainer from './containers/PostsContainer';
interface IHomePageProps {

}
// TODO: Make it have a main layout for pages?
// Up to the page to determine what to stick where
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  // On loan, fetch posts
  
  return (
  
  <HomeTemplate header={<Header/>} footer={<Footer/>} posts={<PostsContainer/>} subscribe={<Subscribe/>}/>
  
  )
};

export default HomePage;
