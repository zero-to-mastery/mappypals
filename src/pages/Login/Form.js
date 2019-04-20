import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding-top: 35px;
  padding-right: 70px;
  padding-bottom: 35px;
  padding-left: 70px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.75;
  label {
    display: block;
    margin-bottom: 2.5rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.35rem;
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
    margin-bottom: 2.5rem;
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
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.5rem 2.5rem;
  }

  a {
    color: #6831DE;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2;
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

  .btnContainer {
    display: flex;
    justify-content: center;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const PasswordReqs = () => (
  <div id="newPassword">At least 6 characters, a number or a symbol, at least 1 letter</div>
);
export default Form
export {PasswordReqs}