import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './../../Firebase'
import { useStateValue } from './../../StateProvider'
import { actionTypes } from './../../Reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className = 'login'>
            <div className = 'login__container'>
                <img src = 'https://www.linkpicture.com/q/undraw_calling_kpbp.svg' alt = 'webmeet'/>
            <div className = 'login__text'>
                <h1>Sign in to Webmeet</h1>
            </div>
            <Button type = 'submit' onClick={signIn}>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login
