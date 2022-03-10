import React,{ useState,useEffect } from 'react'
import  './Chat.css'
import { Avatar,IconButton } from '@material-ui/core'
import { SearchOutlined,MoreVert,AttachFile, InsertEmoticon,Mic } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import db from '../Firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'

const Chat = () => {
    const [input,setInput] = useState("")
    const { roomId } = useParams()
    const[roomName,setRoomName] = useState("")
    const [searchItem,setSearchItem] = useState("")
    const [ messages,setMessages] = useState([])
    const [{user}, dispatch]=useStateValue()
      
    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name))

                db.collection('rooms').doc(roomId).
                collection("messages").orderBy('timestamp','asc').
                onSnapshot((snapshot )=> (
                    setMessages(snapshot.docs.map((doc)=>doc.
                        data())))
                );
                
        }
        
        
    }, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed...",input);
        db.collection("rooms").doc(roomId).collection
        ('messages').add({
            message:input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")

    }
    const searchHeader =() =>{}
    return (
        <div className="chat">
            <div className='chat-header'>
             <Avatar />
             <div className="chat-headerInfo">
                 <h3>
                {roomName}
                 </h3>
                 <p>last seen {" "}
                 { new Date(
                     messages[messages.lenght - 1]?.
                     timestamp?.toDate()
                 ).toUTCString()}
                 </p>
             </div>
             <div className="chat-headerRight">
                 <IconButton>
                     <SearchOutlined  term={searchItem}
                     searchKeyword={searchHeader}/>
                 </IconButton>
                 <IconButton>
                     <AttachFile />
                 </IconButton>
                 <IconButton>
                     <MoreVert />
                 </IconButton>
             </div>
            </div>
            <div className="chat-body">
                {messages.map(message =>(
                    <p className={`chat-message ${message.name === user.displayName && 'chat-recever'}`}>  
                    <span className="chat-name">{message.name}
                    </span>{message.message}<span className='chat-time'>
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>

                ))}
                

            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="type a message" onChange={e =>setInput(e.target.value)} value={input}/>
                    <button type="submit" onClick={sendMessage}> 
                        Send a message
                    </button>
                </form>
                <Mic />

            </div>
            
        </div>
    )
}

export default Chat
