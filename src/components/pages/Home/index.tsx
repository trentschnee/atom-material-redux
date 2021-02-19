import * as React from 'react';
import { useDispatch } from 'react-redux';
import { usePosts } from '../../../hooks/usePosts';
import { fetchPosts } from '../../../store/actions/posts';
import HomeTemplate from '../../templates/Home';
interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  // On loan, fetch posts
  const {posts} = usePosts();
  return (<HomeTemplate posts={posts}>
      
  </HomeTemplate>)
};

export default HomePage;
