import React, { useEffect,useState } from 'react'
 import {io} from 'socket.io-client'
import './App.css'

function App() {
    const socket=io('http://localhost:8000');
    const [message,setMessage]=useState("");
    const handlesubmit=(e)=>{
      e.preventDefault();
      socket.emit('message',message);
      setMessage('')
    }
    useEffect(()=>{
      socket.on('connect',()=>{
        console.log('connected',socket.id)
      })
      socket.on('welcome',(s)=>{
        console.log(s)
      })
      return ()=>{
        socket.disconnect();
      }
    },[]);
    return(
      <div>
     <form onSubmit={handlesubmit}>
     {/* <label for="fname">First Name</label>
     <input type="text" id="fname" name="firstname" placeholder="Your name.."></input> */}
     <label for="lname">Last Name</label>
    <input type="text"value={message} onChange={(e)=>setMessage(e.target.value)} id="lname" name="lastname" placeholder="Your last name.."></input>
    <input type="submit" value="Submit"></input>

     </form>
 </div>
 ) 
}

export default App
