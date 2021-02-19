import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { RootStateI } from '../store/reducers';
import { fetchPosts } from '../store/actions/posts';
import { PostsStateI } from '../store/reducers/posts';

export const usePosts = () => {
  const postsState = useSelector<RootStateI,PostsStateI>((x) => x.posts,shallowEqual);
  const dispatch = useDispatch();
  const boundAction = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    if (postsState.isFetching === false && !postsState.receivedAt) {
      boundAction();

    }
  }, [boundAction, postsState]);



  return { posts:postsState, postsFetching: postsState.isFetching,fetchPosts:boundAction };
}