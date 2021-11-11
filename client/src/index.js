import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import reportWebVitals    from './reportWebVitals';
import { BrowserRouter }  from 'react-router-dom';
import { Provider }       from 'react-redux'
import thunk              from 'redux-thunk';
import authReducer        from './store/reducers/auth';
import blogReducer        from './store/reducers/blog';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.scss';

const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

 const rootReducer = combineReducers({
   auth: authReducer,
   blog: blogReducer
})

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
);

//const app = <React.StrictMode><App /></React.StrictMode>
const app = (
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
