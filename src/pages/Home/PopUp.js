import React from 'react';
import "./Home.css";


const PopUp=(props)=>{
    return(
        <div id="popup" >
            <div>Nickname: {props.nickname}</div>
            {(props.name)?(<div>Name: {props.name}</div>):""}
            {(props.phone)?(<div>Phone: {props.phone}</div>):""}
            {(props.email)?(<div>Email: {props.email}</div>):""}
            {(props.name)?(<div>Zip/Postcode: {props.postcode}</div>):""}
        </div>
    )
}

export default PopUp;