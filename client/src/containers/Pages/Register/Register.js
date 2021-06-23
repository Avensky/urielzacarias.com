import React from 'react';
import Layout from '../../Layout/Layout';
//import Header from '../../Layout/Header/Header';
import './Register.module.scss';
import classes from '../Pages.module.scss';

const register = () => {
    return(
        <Layout grid="one">
            <form className={classes.Pages}>
                <h1>Register Today!</h1>
                <p>Please fill in this form to create an account.</p>
                <label>Usermame:</label>
                <input type="text" defaultValue="Enter Username" />
                <label>Email:</label>
                <input type="text" defaultValue="Enter Email" />
                <label>Password:</label>
                <input type="text" defaultValue="Enter Password" />
                <label>Confirm Password:</label>
                <input type="text" defaultValue="Confirm Password" />
                <p>By creating an account you agree to our <a href="...">Terms & Privacy</a>.</p>
                <button className={classes.btn}>Add Post</button>
                <small className={classes.textMuted}><p>Already Have An Account? <a href="...">Sign In</a></p></small>
            </form>
        </Layout>
    )
}

export default register;