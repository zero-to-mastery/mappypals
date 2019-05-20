import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  @media (max-width: 360px) {
    padding-top: 10px;
    padding-right: 25px;
    padding-bottom: 10px;
    padding-left: 25px;
    font-size: 1rem;
    line-height: 1.25;
  }
  @media (min-width: 411px) {
    padding-top: 30px;
    padding-right: 70px;
    padding-bottom: 30px;
    padding-left: 70px;
    font-size: 1.2rem;
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
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.2rem;
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

  input[type="text"] {
    width: 90%;
  }

  .nameContainer {
    width: 100%;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 20px 20px;
    grid-template-areas:
      "a b"
      "c d";
    margin-bottom: 2.3rem;
  }
  .item1 {
    grid-area: a;
    align-self: start;
  }
  .item2 {
    grid-area: c;
    align-self: end;
  }
  .item3 {
    grid-area: b;
    align-self: start;
  }
  .item4 {
    grid-area: d;
    align-self: end;
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
  a {
    color: #6831DE;
    font-weight: normal;
    line-height: 1.5;
  }
  
    a:link {
      text-decoration: none;
    }
    
    a:visited {
      text-decoration: none;
      font-color: #6831DE;
      font-weight: normal;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    a:active {
      text-decoration: underline;
    }
  }

  .forgot-password {
    display: flex;
    justify-content: flex-end;
    transform: translateY(-2rem);
  }

  .btnContainer {
    margin: 0 auto;
    text-align: center;
  }

  button:hover {
    opacity: 0.8;
  }

  .errorMessage {
    color: red;
  }
`;

const PasswordReqs = () => (
  <div id="newPassword"><span aria-live="polite">At least 6 characters, a number or a symbol, at least 1 letter</span></div>
);
const EmailNotFoundMsg = () => (
  <div id="unknownUser"><span aria-live="polite">Email not found: Please check entry or go back to Login to sign up</span></div>
);
export default Form
export {PasswordReqs, EmailNotFoundMsg}