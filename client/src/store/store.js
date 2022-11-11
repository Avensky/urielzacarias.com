import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import blogReducer from './reducers/blog'
import commentsReducer from './reducers/comments'

export default configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer,
        comments: commentsReducer
    }, middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serialzableCheck: false,
    })
})