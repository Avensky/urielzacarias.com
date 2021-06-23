import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
//import Header from '../../Layout/Header/Header';
import myClasses from './Account.module.scss';
//import user from '../../../assets/images/user.jpg';
import classes from '../Pages.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
//import Auxiliary from '../../../hoc/Auxiliary'

class Account extends Component {
    state = {
        postForm:{
            name: {
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
                    required: false,
                    isEmail: true
                }
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
        error: null
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

    updateUserHandler = (event) => {
        event.preventDefault();
        //this.props.onSetAuthRedirectPath('/checkout');
        this.props.history.push('/account');
//        const pic = this.state.postForm.email.value
        const pic = 'https://lh3.googleusercontent.com/a-/AOh14Gjyf9dG_HQji_W8Js4Kps0_nxl5RyobebP6Nqeg'
        this.props.onUpdateUser(
            this.props.payload._id,
            this.state.postForm.name.value, 
            this.state.postForm.givenName.value, 
            this.state.postForm.familyName.value, 
            this.state.postForm.email.value,
//            this.state.postForm.picture.value,
            pic
        );
    }

    deleteUserHandler = () => {        
        this.props.history.push('/login');
        this.props.onDeleteUser(this.props.payload._id);
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.postForm,
            [controlName]: {
                ...this.state.postForm[controlName],
                value: event.target.value,
//                valid: this.checkValidity( event.target.value, this.state.postForm[controlName].validation ),
                touched: true
            }
        };
        this.setState( { postForm: updatedControls } );
    }


    render () {
        let attachedClasses = [classes.Pages, myClasses.Account]
        let account = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.props.error) {
            account = (                
                <form className={attachedClasses.join(' ')} onSubmit={this.updateUserHandler}>
                    <img src={this.props.payload.picture} alt="user"/>
                    <h1>{this.props.payload.username}</h1>
                    <small>{this.props.payload.email}</small>
                    <h2>Update account details</h2>
                    <label>Username:</label>
                    <input 
                        type="text"
                        onChange={(event) => this.inputChangedHandler( event, "name")} 
                        placeholder={this.props.payload.username} 
                    />
                    
                    <label>First Name:</label>
                    <input 
                        type="text"
                        onChange={(event) => this.inputChangedHandler( event, "givenName")}  
                        placeholder={this.props.payload.givenName} 
                    />
                    
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        onChange={(event) => this.inputChangedHandler( event, "familyName")} 
                        placeholder={this.props.payload.familyName} 
                    />
                    
                    <label>Email:</label>
                    <input 
                        type="text" 
                        onChange={(event) => this.inputChangedHandler( event, "email")} 
                        placeholder={this.props.payload.email} 
                    />
                    
                    <p>Update profile picture</p>
                    <input 
                        className={classes.picure} 
                        type="file" 
                    />
                    
                    <button className={classes.btn}>Update Account</button>
                    <div onClick={this.deleteUserHandler}>Delete Account</div>
                </form>
            )
        }
        return(
            <Layout grid="new">
                <Header />
                {account}
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
       error: state.auth.error,
       isLoggedIn: state.auth.payload,
       payload: state.auth.payload,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUser: (userId, name, givenName, familyName, email, picture) => dispatch(actions.updateUser(userId, name, givenName, familyName, email, picture)),
        onDeleteUser: (userId) => dispatch(actions.deleteUser(userId)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Account);