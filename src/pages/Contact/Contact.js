import React, { Component } from 'react';
import './Contact.css';
import styled from 'styled-components';
import Button from '../../components/UI/Button/Button';
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

  .btnContainer {
    margin: 0 auto;
    text-align: center;
  }
`;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            email: '',
            subject: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.refs.form.reset();
    };

    render() {
        return (
            <div className="contactForm">
                <Form onSubmit={this.handleSubmit} ref="form">
                    <div className="header">
                        <h2>Contact Us</h2>
                        <p>
                            If you have any enquiries please contact us by
                            filling the form below:
                        </p>
                    </div>
                    <label htmlFor="name">
                        First Name
                        <input
                            type="text"
                            name="firstname"
                            placeholder="John"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="john@doe.com"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <input
                            type="text"
                            name="subject"
                            placeholder="Bug on homepage"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="message">
                        Your Message
                        <textarea
                            name="message"
                            onChange={this.handleChange}
                            id=""
                            cols="30"
                            rows="10"
                        />
                    </label>
                    <div className="btnContainer">
                        <Button btnType="Submit" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Contact;
