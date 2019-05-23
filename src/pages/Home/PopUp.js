import React, { useState } from 'react';
import './Home.css';

const PopUp = props => {
    const [labels, hideLabels] = useState({
        name: true,
        phone: true,
        email: true,
        postcode: true
    });

    return (
        <div id="popup">
            <div>
                <label>Nickname</label>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={props.nickname}
                    readOnly
                />
            </div>
            {props.name ? (
                <div>
                    {labels.name ? <label>Name</label> : ''}
                    <input
                        type="text"
                        data="name"
                        placeholder="Name"
                        defaultValue={props.name}
                        onBlur={e => {
                            if (e.target.value.length)
                                hideLabels({ ...labels, name: true });
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.target.blur();
                        }}
                        onClick={e => {
                            console.log(e.target);
                            e.target.value = '';
                            hideLabels({ ...labels, name: false });
                        }}
                    />
                </div>
            ) : (
                ''
            )}
            {props.phone ? (
                <div>
                    {labels.phone ? <label>Phone</label> : ''}
                    <input
                        type="text"
                        data="phone"
                        placeholder="Phone"
                        defaultValue={props.phone}
                        onBlur={e => {
                            if (e.target.value.length)
                                hideLabels({ ...labels, phone: true });
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.target.blur();
                        }}
                        onClick={e => {
                            console.log(e.target);
                            e.target.value = '';
                            hideLabels({ ...labels, phone: false });
                        }}
                    />
                </div>
            ) : (
                ''
            )}
            {props.email ? (
                <div>
                    {labels.email ? <label>E-mail</label> : ''}
                    <input
                        type="text"
                        data="email"
                        placeholder="E-mail"
                        defaultValue={props.email}
                        onBlur={e => {
                            if (e.target.value.length)
                                hideLabels({ ...labels, email: true });
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.target.blur();
                        }}
                        onClick={e => {
                            console.log(e.target);
                            e.target.value = '';
                            hideLabels({ ...labels, email: false });
                        }}
                    />
                </div>
            ) : (
                ''
            )}
            {props.postcode ? (
                <div>
                    {labels.postcode ? <label>Zip-Postcode</label> : ''}
                    <input
                        type="text"
                        data="postcode"
                        placeholder="Zip-Postcode"
                        defaultValue={props.postcode}
                        onBlur={e => {
                            if (e.target.value.length)
                                hideLabels({ ...labels, postcode: true });
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.target.blur();
                        }}
                        onClick={e => {
                            console.log(e.target);
                            e.target.value = '';
                            hideLabels({ ...labels, postcode: false });
                        }}
                    />
                </div>
            ) : (
                ''
            )}
            {props.editMode ? (
                <div
                    onClick={e => {
                        props.save();
                        e.target.parentNode.style.height = '0px';
                    }}
                >
                    Save
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default PopUp;
