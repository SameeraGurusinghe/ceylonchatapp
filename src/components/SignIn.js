import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js'
import {Button} from '@material-ui/core'
import '../Signin.css';

function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
}
    return (
        <div style={{backgroundImage: "url(/image/welcome.png)"}} className="SignInToChat" >
            <div className="SignInGate">
                <p className='welcome_tag'>Welcome<br></br>Hello Chat App</p>
            <img className={"middle_img"} src="/image/middle_img.png" alt="" />
            <Button onClick={signInWithGoogle}>
                <p className='signin_tag'>sign in with</p>
                <img className={"AuthProvider_img"} src="/image/AuthProvider_img.png" alt="" />
            </Button>
            </div>
        </div>
    )
}

export default SignIn