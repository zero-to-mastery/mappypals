import React from 'react';
import './Contact.css';
import styled from 'styled-components'

// add some content here

const Form = styled.form`
  box-shadow: 2px 3px 4px -2px grey;
  width: 30rem;
  margin 30px 0;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  @media (max-width: 360px) {
    padding: 10px 25px;
    font-size: 1rem;
    line-height: 1.25;
  }
  @media (min-width: 411px) {
    padding: 20px 150px;
    font-size: 0.999rem;
    line-height: 1.75;
  }
  fieldset {
    border: #ffffff;
    }
  label {
    display: block;
    margin-bottom: 2.3rem;
  }
  input,
  select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid grey;
    &:hover {
      outline: 0;
      border-bottom: 3px solid #6831DE;
    }
    &:focus {
      outline: 0;
      border-bottom: 3px solid #6831DE;
    }
  }
  
  textarea {
      width: 100%;
      border-style: solid;
      border-width: 1px;
  }

  button,
  input[type='submit'] {
    width: auto;
    background: linear-gradient(to bottom right, #E03BFB, #6831DE);;
    color: white;
    border: 0;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0.4rem 2.4rem;
    cursor: pointer;
  }

  .btnContainer {
    margin: 0 auto;
    text-align: center;
  }
`

const Contact = () => (
    <div className="contactForm">
        <Form>
            <div className="header">
                <h2>Contact Us</h2>
                <p>If you have any enquiries please contact us by filling the form below:</p>
            </div>
            <label htmlFor="name">
                First Name 
                <input
                    type="text"
                    name="firstname"
                    placeholder="Arnas"
                    required
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    placeholder=""
                    required
                />
            </label>
            <label htmlFor="subject">
                Subject 
                <input
                    type="text"
                    name="subject"
                    placeholder="Bug on homepage"
                    required
                />
            </label>
            <label htmlFor="message">
                Your Message
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10">
                </textarea>
            </label>
            <div className="btnContainer">
                <button type="submit">Send</button>
            </div>
        </Form>
    </div>
);

export default Contact;
