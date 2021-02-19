// External imports
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, Action} from 'redux'
import {Provider} from 'react-redux'
import thunk, { ThunkAction } from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Local imports
import rootReducer, { RootStateI } from './reducers'

// Assets
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateI,
  unknown,
  Action<string>
>
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store