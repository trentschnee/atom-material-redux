import { AppThunk } from ".."
import { Posts } from "../../types/Posts"

// Create Redux action types
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
// Create Redux action creators that return an action
export interface GetPostsI {
  type: typeof GET_POSTS,
}

export interface GetPostsSuccessI {
  type: typeof GET_POSTS_SUCCESS,
  payload: Posts,
}
export interface GetPostsFailureI {
  type: typeof GET_POSTS_FAILURE,
}
export const getPosts = () => ({
  type: GET_POSTS,
})

export const getPostsSuccess = (posts :Posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})
// Combine them all in an asynchronous thunk
export function fetchPosts():AppThunk {
  return async (dispatch) => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data:Posts = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}