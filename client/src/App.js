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
import About        from './components/Pages/About/About';
import Privacy      from './components/Pages/Privacy/Privacy';
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
      <Route path="/blog" render={props => <Blog {...props} />} />
      <Route path="/about"                  component={About} />    
      <Route path="/privacy"                component={Privacy}/>
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
        <Route path="/blog" render={props => <Blog {...props} />} />      
        <Route path="/profile"                component={Profile} /> 
        <Route path="/about"                  component={About} />
        <Route path="/privacy"      exact          component={Privacy}/>
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

