import React, {useState} from 'react';
import "./Home.css";
const anythingChanges=(event, state, setState)=>{
  setState({data:{...state.data, [event.target.id]: event.target.value}})
}

const AddFriendForm=(props)=>{
  const [state, setState]=useState({data:{}});

    return(
        <div id="add-new" >
            <input type="text" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Nickname" id="nickname" required/>
            <input type="email" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Email address" id="email" required/>
            <input type="text" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Full Namer" id="name" />
            <input type="tel" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Phone Number" id="phone" />
            <input type="button" value="Add Friend" id="add" onClick={()=>{props.onFriendLoaded(state)}} />
        </div>
    )
}

export default AddFriendForm;