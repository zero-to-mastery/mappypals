import React, {useState} from 'react';
import "./Home.css";
const anythingChanges=(event, state, setState)=>{
	setState({data:{...state.data, [event.target.id]: event.target.value}})
}
const checkAndReturn=(state,props)=>{
	if(state.data.nickname!==""){
		props.onFriendLoaded(state)
	}
}

const AddFriendForm=(props)=>{
	const [state, setState]=useState({data:{}});

    return(
        <div id="add-new" >
            <input type="text" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Nickname" id="nickname" required/>
            <input type="email" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Email address" id="email" />
            <input type="text" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Full Namer" id="name" />
            <input type="tel" onChange={(e)=>anythingChanges(e,state,setState)} placeholder="Phone Number" id="phone" />
            <input type="button" value="Add Friend" id="add" onClick={()=>{checkAndReturn(state,props)}} />
        </div>
    )
}

export default AddFriendForm;