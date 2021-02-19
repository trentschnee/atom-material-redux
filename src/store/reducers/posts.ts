import { Posts } from "../../types/Posts";
import { GetPostsFailureI, GetPostsI, GetPostsSuccessI, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "../actions/posts";
export interface PostsStateI {
  data: Posts,
  isFetching: boolean,
  hasErrors: boolean,
  receivedAt?: number
}
export const initialState:PostsStateI = {
  data: [],
  isFetching: false,
  hasErrors: false,
}
type PostActionType = GetPostsI | GetPostsSuccessI | GetPostsFailureI;
export default function postsReducer(state = initialState, action: PostActionType) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state, isFetching: true
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        data: action.payload, isFetching: false, hasErrors: false,receivedAt: Date.now()
      };
    }
    case GET_POSTS_FAILURE: {
      return {
        ...state, isFetching: false, hasErrors: true
      };
    }
    default:
      return state
  }
}