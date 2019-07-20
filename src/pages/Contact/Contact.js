import React, { Component } from 'react';
import './Contact.css';
import styled from 'styled-components';
import Button from '../../components/UI/Button/Button';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';

const Form = styled.form`
  box-shadow: 2px 3px 4px -2px grey;
  margin: 30px 0;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  @media (max-width: 360px) {
    padding: 10px 25px;
    font-size: 1rem;
    line-height: 1.25;
  }
  @media (min-width: 411px) {
    padding: 20px 70px;
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
  
  textarea {
      width: 100%;
      border-style: solid;
      border-width: 1px;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
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
        event.preventDefault()
        const { firstname, email, subject, message } = this.state;
        const url = process.env.URL || 'http://localhost:3001/';
        (async () => {
            await fetch(`${url}users/contact`, { 
              method: 'POST',
              body: JSON.stringify({name: firstname, email: email, subject: subject, message: message}),
              headers: {
                'content-type': 'application/json'
              }
            }).then(res => { 
                if (res.status===200) {
                  this.setState({error: `Successfully sent to Mappypals!`});
                  this.props.history.push('/contact');
                  this.refs.form.reset();
                } else {
                  alert(`${res.statusText}`);
                  this.setState({error: `${res.statusText}`});
            }}).catch(err =>
               this.setState({error: `Uncaught ${err.statusText}. Please try sending again.`})
            );
        })();
    };

    render() {
      const { error, loading } = this.props;
        return (
            <div className="contactForm">
                <Form onSubmit={this.handleSubmit} ref="form">
                  <fieldset>
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
                            placeholder="The name you want us to call you by"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <input
                            type="text"
                            name="subject"
                            placeholder="Email subject line, 'I have a bug!'"
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
                            rows="8"
                        />
                    </label>
                    {loading && <div className="u-text-center">Loading...</div>}
                    {error && (
                        <div className="u-text-center">
                            <ErrorMessage content={error} />
                        </div>
                    )}
                    <div className="btnContainer">
                        <Button btnType="Submit" type="submit">
                            Send
                        </Button>
                    </div>
                  </fieldset>
                </Form>
            </div>
        );
    }
}

export default Contact;
