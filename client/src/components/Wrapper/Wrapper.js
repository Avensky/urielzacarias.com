import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Wrapper.module.scss';
import Navbar from '../Navigation/Navbar/Navbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';
import Background from '../UI/Background/Background';
import * as actions from '../../store/actions/index';
import Footer from '../UI/Footer/Footer';
const Wrapper = props =>  {
    const [showSidebar, setShowSidebar] = useState(false)
    const sidebarToggleHandler          = () => {setShowSidebar(!showSidebar)}
    const closeSidebarHandler           = () => {setShowSidebar(false)}
    useLayoutEffect(() => {window.scrollTo(0, 0)})

    return (    
        <div className={classes.Wrapper}>
            <Background />
            <Navbar 
                isLogged                = {props.isLoggedIn}
                sidebarToggleClicked    = {sidebarToggleHandler} 
            />
            <Sidebar 
                isLogged                = {props.isLoggedIn}
                open                    = {showSidebar} 
                closed                  = {closeSidebarHandler} 
            />
            <main className={classes.Main}>
                {props.children}
                <Footer />
            </main>
            
        </div>
    )
    
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.payload
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(actions.fetchUser()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Wrapper);