import React,{ useState,useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import './Contacts.css'
import db from '../Firebase'
import { Link } from 'react-router-dom'

const SidebarChat = ({id,name,addNewChat}) => {
    const [ messages,setMessages] = useState([])
    
    useEffect(()=>{
        if(id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').
            onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc)=>
                doc.data()))
            ))
        }
    },[id])


    const createChat = () =>
    {
        const roomName = prompt("please enter name");
        if(roomName) {
            db.collection('rooms').add({
                name: roomName,

            })
        }
    }
    
    return ! addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar  src='/aruna.jpg'/>
            <div className="sidebarChat_info">
                <h2>{name} </h2>
                <p > {messages[0]?.message} </p>
            </div>
            
            
        </div>
        </Link>
    ) :(
        <div onClick ={createChat} >
            <h3>Add new chat
                
                </h3>
            </div>
            

    )
}

export default SidebarChat
