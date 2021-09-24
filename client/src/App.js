
import React, { useEffect, Suspense,/*, useCallback, useState*/ useState} from 'react'
//import axios from 'axios'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Blog       from './containers/Pages/Blog/Blog';
import Posts      from './containers/Pages/Blog/Posts/Posts';
import NewPost    from './containers/Pages/NewPost/NewPost';
import Home       from './containers/Pages/Home/Home';
import Projects   from './containers/Pages/Account/Account';
import About      from './containers/Pages/About/About';
import Login      from './containers/Pages/Login/Login';
import Auth      from './containers/Pages/Auth/Auth';
import Signup     from './containers/Pages/Signup/Signup';
import Connect    from './containers/Pages/Connect/Local';
import Account    from './containers/Pages/Account/Account';
import Register   from './containers/Pages/Register/Register';
//import asyncComponent from './hoc/asyncComponent';
import Wrapper    from './components/Wrapper/Wrapper';
import FullPost   from './containers/Pages/Blog/FullPost/FullPost';
//import Signup     from './components/sign-up';
import LoginForm  from './components/login-form';
import Profile    from './containers/Pages/profile/Profile';
import './App.scss';

const App = props => {
  const [authRedirectPath, onSetAuthRedirectPath] = useState('/')
  const { shop, data, fetchedUser, loading, submitted, isLoggedIn /*, loading, userLoading*/ } = props

useEffect(()=> {
  const fetchData = async () => {props.onFetchUser()}
    if ( !fetchedUser){fetchData()}
  }, [fetchedUser])

//  isElementInViewport = (el) =>{
//    var rect = el.getBoundingClientRect();
//    return (
//      rect.top >= 0 &&
//      rect.left >= 0 &&
//      rect.bottom <=
//        (window.innerHeight || document.documentElement.clientHeight) &&
//      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//    );
//  }

//  scrollHandler = () => {
//    let chartWrapper = document.querySelector(".chart-wrapper");
//    let scrollDown = document.querySelector(".scroll-down");
//      window.pageYOffset > 0
//        ? scrollDown.classList.add("is-hidden")
//        : scrollDown.classList.remove("is-hidden");
//      if (isElementInViewport(chartWrapper)) chartWrapper.classList.add("in-view");
//    }


//  updateUser (userObject) {
//    setState(userObject)
//  }


    let routes = (
      <Switch>
        <Route path="/home"       exact component={Home} />
        <Route path="/blog"       component={Blog} />
        <Route path="/fullPost"   component={FullPost} />
        <Route path="/posts"      exact component={Posts} />
        <Route path="/about"      component={About} />
        <Route path="/projects"   component={Projects} />
        <Route path="/authentication"       component={Auth} />
        <Route
          path="/signup"
          //render={() =><Signup/>}
          component={Signup}
        />
        <Route path="/register" component={Register} />
        <Route path="/connectlocal" component={Connect} />
        <Route path="/" exact component={Home} />
        {/* <Redirect to="/home" /> */}              
      </Switch>
    );

    if (props.isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/fullPost" component={FullPost} />
          <Route path="/about" component={About} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/newPost" exact component={NewPost} />
          <Route path="/projects" component={Projects} />
          <Route path="/profile" component={Profile} />
          <Route path="/account" component={Account} />
          <Redirect to="/home" /> 
        </Switch>
      )
    }

    return (
          <Wrapper>
            <Suspense fallback={<p>Loading...</p>}>
              {routes}
            </Suspense>
          </Wrapper>
    );
  }

const mapStateToProps = state => {
  return {
    isLoggedIn:   state.auth.payload,
    payload:      state.auth.payload,
//    facebook:   state.auth.payload.map( fb => { fb.id})
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoLogin   : () => dispatch( actions.loginCheckState() ),
    onFetchUser : () => dispatch(actions.fetchUser()),
//    onGetUser : () => dispatch(actions.getUser())
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );