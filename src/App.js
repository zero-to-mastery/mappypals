import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Layout>
                    <Main />
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
