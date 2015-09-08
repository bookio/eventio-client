

import React from 'react';
import {Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

//var sprintf = require('../../tools/sprintf.js');
import {sprintf} from '../../tools/tools.js';



require('./login.less');



module.exports = React.createClass({

	
	propTypes: {
		username : React.PropTypes.string,
		password : React.PropTypes.string
	},

	loadState() {
		
	},
	saveState() {
		
	},
	getInitialState() {

		var state = {};

		state.username = sprintf('foo@bar.se');
		state.password = '';

		if (localStorage.loginPage) {
			state = JSON.parse(localStorage.loginPage);
		}

		return state;
	},
	
	componentDidUpdate(prevProps, prevState) {
		localStorage.loginPage = JSON.stringify({
			username: this.state.username
		});
	},
	
	onChangePassword(event) {

		this.setState({password: event.target.value});
	},

	onChangeUsername(event) {

		this.setState({username: event.target.value});
	},
	
	login() {
		var Gopher = require('../../tools/gopher.js');
		console.log(this.state.username, this.state.password);
		
		var request = Gopher.login(this.state.username, this.state.password);
		
		request.done(function() {
			localStorage.sessionID = Gopher.sessionID;
			console.log(Gopher.sessionID);
			window.location.hash = "#/home";
		});
	},

	render() {


		var rowStyle = {
		};

		
		
		var html = (
			<div className='login-page'>
			
				<Grid >
					<Row>
						<h2>Logga in</h2>
					</Row>
					<Row>
						<Input type='text' value={this.state.username} placeholder='Användarnamn' label='' help='' hasFeedback ref='input' onChange={this.onChangeUsername} />
					</Row>
					<Row>
						<Input type='text' value={this.state.password} placeholder='Lösenord' label='' help='' hasFeedback ref='input' onChange={this.onChangePassword} />
					</Row>

					<Row style={{textAlign:'center'}}>
						<ButtonGroup>
							<Button onClick={this.login} bsSize={'medium'} style={{minWidth: '100px'}}>Logga in</Button>
						</ButtonGroup>				
					</Row>


				</Grid>
			</div>
		);

		return html;
	}

});


