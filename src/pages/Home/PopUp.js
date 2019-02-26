import React from 'react';
import "./Home.css";

const PopUp=(props)=>{
    return(
        <div className="popup">
            Name: {props.name};
            Phone: {props.phone};
            Email: {props.email};
            Postcode: {props.postcode}
        </div>
    )
}

export default PopUp;