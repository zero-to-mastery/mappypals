import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  @media (max-width: 410px) {
    padding: 10px 25px;
    font-size: 0.5rem;
    margin-top: 50px;
    margin-left: 10px;
    line-height: 1.25;
  }
  @media (min-width: 411px) {
    padding: 30px 70px;
    font-size: 0.8rem;
    line-height: 1.75;
  }
  fieldset {
    border: #ffffff;
    }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
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
    display: inline;
    justify-content: flex-end;
    transform: translateY(-2rem);
  }

  .btnContainer {
    padding-top: 15px;
    padding-bottom: 7px;
    margin: 0 auto;
    text-align: center;
  }

  button:hover {
    opacity: 0.8;
  }


`;

export default Form;
