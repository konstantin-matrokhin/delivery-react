import { applyMiddleware, compose, createStore } from 'redux'
import {rootReducer} from './reducers/reducer'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devTools
    )
)