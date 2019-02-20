import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main'
import Layout  from './components/Layout'

class App extends Component {
	render() {
		return (
				<div>
					<Navbar />
					<Layout>
						<Main />
					</Layout>	
				</div>
		);
	}
}

export default App;
