import React from 'react';
import "./Home.css";


const PopUp=(props)=>{
console.log(props)
    return(
        <div id="popup" >
            <div>Nickname: {props.nickname}</div>
            {(props.name.length)?(<div>Name: {props.name}</div>):""}
            {(props.phone.length)?(<div>Phone: {props.phone}</div>):""}
            {(props.email.length)?(<div>Email: {props.email}</div>):""}
            {(props.name.postcode)?(<div>/Zip/Postcode: {props.postcode}</div>):""}
        </div>
    )
}

export default PopUp;