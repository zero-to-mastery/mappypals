import React from 'react';
import "./Home.css";

const PopUp=(props)=>{
    return(
        <div className="popup">
            <p>Name: {props.name}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Postcode: {props.postcode}</p>
        </div>
    )
}

export default PopUp;