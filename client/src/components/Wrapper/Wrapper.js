import React, { useState //, useLayoutEffect 
} from 'react';
import { connect } from 'react-redux';
import classes from './Wrapper.module.scss';
import Navbar from '../Navigation/Navbar/Navbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';
import Background from '../UI/Background/Background';
import * as actions from '../../store/actions/index';
import Footer from '../UI/Footer/Footer';
import PropTypes from 'prop-types';

const Wrapper = props =>  {

    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarToggleHandler          = () => {setShowSidebar(!showSidebar);};
    const closeSidebarHandler           = () => {setShowSidebar(false);};
    //useLayoutEffect(() => {window.scrollTo(0, 0)})
    const {children, isLoggedIn} = props;

    return (    
        <div className={classes.Wrapper}>
            <Background />
            <Navbar 
                isLogged                = {isLoggedIn}
                sidebarToggleClicked    = {sidebarToggleHandler} 
            />
            <Sidebar 
                isLogged                = {isLoggedIn}
                open                    = {showSidebar} 
                closed                  = {closeSidebarHandler} 
            />
            <main className={classes.Main}>
                {children}
                <Footer />
            </main> 
        </div>
    );  
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.payload
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(actions.fetchUser()),
    };
};
Wrapper.propTypes = {
    children: PropTypes.any,
    isLoggedIn: PropTypes.bool    
};
export default connect( mapStateToProps, mapDispatchToProps )(Wrapper);

