import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import '../App.css';

function SignOut() {
    return (
        <div className='signout'>
            <Button onClick={() => auth.signOut()}>sign out</Button>
        </div>
    )
}

export default SignOut