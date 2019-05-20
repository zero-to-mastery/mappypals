import React from 'react';
import './Contact.css';

// add some content here

const Contact = () => (
    <div className="background">
        <div className="Contact">
            <form name="contact" method="POST">
                <fieldset>
                    <legend>Send us a Message!</legend>
                    <div className="Contact-item">
                        <label>Name</label>
                        <br />
                        <input type="text" name="name" />
                    </div>
                    <div className="Contact-item">
                        <label>Email</label>
                        <br />
                        <input type="email" name="name" />
                    </div>
                    <div className="Contact-item">
                        <label>Message</label>
                        <br />
                        <textarea type="text" rows="6" />
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
);

export default Contact;
