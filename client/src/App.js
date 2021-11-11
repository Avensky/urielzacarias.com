import React, { useEffect, Suspense} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
import * as actions from './store/actions/index';
import Auth         from './components/Pages/Auth/Auth';
import Home         from './components/Pages/Home/Home';
import Wrapper      from './components/Wrapper/Wrapper';
import Projects     from './components/Pages/Projects/Projects'
import Profile      from './components/Pages/Profile/Profile'
import Blog         from './components/Pages/Blog/Blog'
import AddPost      from './components/Pages/Blog/AddPost/AddPost';
import FullPost     from './components/Pages/Blog/FullPost/FullPost'; 
import EditPost     from './components/Pages/Blog/EditPost/EditPost';
import About        from './components/Pages/About/About';
import './App.scss';

const App = (props) => {
  const { fetchedUser } = props
  const fetchData = async () => { props.onFetchUser() }
  
  useEffect(()=> { 
    if ( !fetchedUser){
      fetchData()
    }
  }, [fetchedUser])

  let routes = (
    <Switch>
      <Route path="/authentication"         component={Auth} />
      <Route exact path="/authentication/api/v1/users/resetPassword/:token"       
                       render={props => <Auth {...props} />} />
      <Route path="/home"                   component={Home} />   
      <Route path="/projects"               component={Projects} />  
      <Route path="/blog"                   component={Blog} exact/>
      <Route path="/blog/fullpost/:blogId"  component={FullPost} />
      <Route path="/blog/editpost/:blogId"  component={EditPost} />
      <Route path="/blog/addPost"           component={AddPost} />    
      <Route path="/about"                  component={About} />    
      <Route path="/"                       component={Home} />
      <Redirect to="/home" /> 
    </Switch>
  )

  if (props.fetchedUser) {
    routes = (
      <Switch>
        <Route path="/authentication"         component={Auth} />
        <Route exact path="/authentication/api/v1/users/resetPassword/:token"       
                         render={props => <Auth {...props} />} />
        <Route path="/home"                   component={Home} />
        <Route path="/projects"               component={Projects} />
        <Route path="/blog"                   component={Blog} exact/>
        <Route path="/blog/fullpost/:blogId"  component={FullPost} />
        <Route path="/blog/editpost/:blogId"  component={EditPost} />   
        <Route path="/blog/addPost"           component={AddPost} />        
        <Route path="/profile"                component={Profile} /> 
        <Route path="/about"                  component={About} />      
        <Route path="/"                       component={Home} />             
        <Redirect to="/home" /> 
      </Switch>
    )
  }

  return (
    <Wrapper>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    fetchedUser       : state.auth.payload,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser           : () => dispatch(actions.fetchUser()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

