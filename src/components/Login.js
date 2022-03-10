import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth ,provider } from '../Firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


const Login = () => {
    const [{},dispatch] =  useStateValue();
    const signin = () =>{
auth.signInWithPopup(provider).then((result) =>{
    dispatch({
        type: actionTypes.SET_USER,
        user:result.user,
    })

}
    
    ).catch((error) => alert(error.message))

    }
    return (
        <div className="login">
            <div className='login-container'>
                <img src="/aruna11.jpg"
                      alt=""/>
                      <div className="login-text">
                          <h1>Login page</h1></div>
                          
                          <Button type="submit" onClick={signin}>
                              Sign in with Google
                          </Button>
                          </div>
            
        </div>
    )
}

export default Login
