import { Input, Button } from '@material-ui/core'
import {db, auth} from '../firebase'
import firebase from 'firebase/compat/app'
import React, {useState} from 'react'
import '../App.css';

function SendMessage() {
    const[msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
           <form onSubmit={sendMessage}>
               <div className={"sendMsg"}>
                    <Input value={msg} onChange={(e) =>setMsg(e.target.value) } placeholder="Message..." />
                    <Button type="submit">Send Message</Button>
               </div>
           </form>
            
        </div>
    )
}

export default SendMessage