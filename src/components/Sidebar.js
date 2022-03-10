import React,{ useState,useEffect } from 'react'
import { Avatar, Typography,Toolbar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import './Contacts.css'
import SidebarChat from './SidebarChat';


import db from '../Firebase'


const Sidebar = ( ) => {
    const [rooms,setRooms] = useState([]);
    useEffect(() => {
      const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(
          setRooms(snapshot.docs.map(doc =>({
              id:doc.id,
              data: doc.data()
          })))
      ))  
      return () =>{
          unsubscribe();
      }
        
        
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
              <Avatar src='/aruna1.jpg'/>
              
              <div className="sidebar_headerRight">
              <ChatIcon />
             <NotificationsIcon  />
                        <MoreVertIcon />
              </div>
            </div>
            <Typography><h1>Contacts</h1></Typography>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlined />
            <input placeholder="Search " type="text" />
            </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                
               {rooms.map(room=>(
                   <SidebarChat key={room.id} id={room.id}
                   name={room.data.name} />
               ))}
                
                
                

            </div>
            
        </div>
    )
}

export default Sidebar
