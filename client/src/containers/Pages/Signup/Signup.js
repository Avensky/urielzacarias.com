import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
//import Header from '../../Layout/Header/Header';
import classes from '../Pages.module.scss';
import myClasses from './Signup.module.scss';
//import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
//import { updateObject } from '../../../utility/utility';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Auxiliary from '../../../hoc/Auxiliary';
class Login extends Component {
    state = {
        controls: {
            username: {
                value: '',
                validation: {
                    required: false
                }
            },
            givenName: {
                value: '',
                validation: {
                    required: false
                }
            },
            familyName: {
                value: '',
                validation: {
                    required: false
                }
            },
            email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            picture: {
                value: '',
                validation: {
                    required: false
                }
            }
        },
        authLogin: true,
        loading: false,
    }

    componentDidMount() {
        //console.log("isSignup: " + this.state.authLogin)
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return {authLogin: !prevState.authLogin};
        });
    }

    loginToggleHandler = () => {
        this.setState(prevState => {
            return {authLogin: true};
        });
    }

    registerToggleHandler = () => {
        this.setState(prevState => {
            return {authLogin: false};
        });
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
//                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    
    loginHandler = ( event ) => {
        event.preventDefault();
        this.props.onLogin( 
            this.state.controls.email.value, 
            this.state.controls.password.value, 
            this.state.authLogin 
        );
    }
    newUserHandler = ( event ) => {
        event.preventDefault();
        const pic = 'https://lh3.googleusercontent.com/a-/AOh14Gjyf9dG_HQji_W8Js4Kps0_nxl5RyobebP6Nqeg';
        this.props.onNewUser(
            this.state.controls.username.value, 
            this.state.controls.givenName.value,
            this.state.controls.familyName.value, 
            this.state.controls.email.value, 
            this.state.controls.password.value, 
//            this.state.controls.picture.value,
            pic
        );
    }

    render () {
    //       let form = <p style={{textAlign: 'center'}}>Something went wrong!</p>

            let form = (
            <Auxiliary className={myClasses.Auth}>
                <form action="/api/signup" method="post">
                    <input 
                        type="text"
                        name="username"
                        onChange={(event) => this.inputChangedHandler( event, "givenName")}
                        placeholder="Username"
                        className={myClasses.AuthInput}
                    />
                    <input 
                        type="email"
                        name="email"
                        onChange={(event) => this.inputChangedHandler( event, "email")}
                        placeholder="Email"
                        className={myClasses.AuthInput}
                    />
                    <input 
                        type="password"
                        name="password"
                        onChange={(event) => this.inputChangedHandler( event, "password")}
                        placeholder="Password"
                        className={myClasses.AuthInput}
                    />
                    <input 
                        type="password"
                        name="confirm Password"
                        onChange={(event) => this.inputChangedHandler( event, "confirmPassword")}
                        placeholder="Confirm Password"
                        className={myClasses.AuthInput}
                    />
                    <input 
                        className={[myClasses.AuthInput, classes.picure]} 
                        type="file" 
                        name="picture"
                    />
                    <button 
                        className={[myClasses.Btn, myClasses.AuthBtn].join(' ')}
                    ><div className={myClasses.BtnDiv}><span className="fa fa-user"></span> Sign Up</div></button>
                    </form>
                </Auxiliary>
            )
        
 
        
        if (this.state.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        
        let loginRedirect = null;
        //if (this.props.isLoggedIn) {
        //    loginRedirect = <Redirect to={this.props.loginRedirectPath}/>
        //}

        
        let selected, unselected = myClasses.AuthToggle;
        if  ( this.state.authLogin === false){
            selected = myClasses.AuthToggle
            unselected = [myClasses.AuthToggle, myClasses.AuthSelected].join(' ')
        }
        if  ( this.state.authLogin === true){
            selected = [myClasses.AuthToggle, myClasses.AuthSelected].join(' ')
            unselected = myClasses.AuthToggle

        }

        return(
            <Layout>
                {loginRedirect}
           
                <div className={[classes.Card, myClasses.Auth].join(' ')}>
                    <div className={myClasses.AuthNav}>


                        <button 
                            // onClick={this.registerToggleHandler}
                            className={selected}
                        ><div className={myClasses.BtnDiv}><h3><span className="fa fa-user" /> Signup</h3></div>
                        </button>

                        <button 
                            className={[unselected, 'disabeled'].join(' ')}
                        >
                        </button> 
                    </div>
                
                    {form}

                    <div className={classes.CardTitle}>Or continue with:</div>

                    <button className={[myClasses.Btn, "btn-primary"].join(' ')}>
                        <a href="/auth/facebook"><span className="fa fa-facebook" /> Facebook</a>
                    </button>

                    <button className={[myClasses.Btn, "btn-info"].join(' ')}>
                        <a href="/auth/twitter"><span className="fa fa-twitter" /> Twitter</a>
                    </button>

                    <button className={[myClasses.Btn, "btn-danger"].join(' ')}>
                        <a href="/auth/google"><span className="fa fa-google-plus" /> Google+</a>
                    </button>

                    <p>Forgot Password?</p>
                    <div className={classes.borderTop + classes.pt3}  />
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isLoggedIn: state.auth.user,
        loginRedirectPath: state.auth.loginRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password, isSignup) => dispatch(actions.login(email, password, isSignup)),
        onSetLoginRedirectPath: () => dispatch(actions.setLoginRedirectPath('/blog')),
        onNewUser: (username, givenName, familyName, email, password, picture) => dispatch(actions.newUser(username, givenName, familyName, email, password, picture))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);