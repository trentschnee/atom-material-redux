import {combineReducers} from 'redux'

import postsReducer from './posts'

const rootReducer = combineReducers({
  posts: postsReducer,
})
export type RootStateI = ReturnType<typeof rootReducer>
export default rootReducer