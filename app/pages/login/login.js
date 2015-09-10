

import React from 'react';
import {Glyphicon, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

//var sprintf = require('../../tools/sprintf.js');
import {sprintf} from '../../tools/tools.js';




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

	componentWillMount() {
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
			
				<Grid style={{maxWidth:'25em'}}>
					<Row>
						<Input type='text' value={this.state.username} placeholder='Användarnamn' label='' help='' hasFeedback ref='input' onChange={this.onChangeUsername} />
					</Row>
					<Row>
						<Input type='text' value={this.state.password} placeholder='Lösenord' label='' help='' hasFeedback ref='input' onChange={this.onChangePassword} />
					</Row>

					<Row style={{textAlign:'center'}}>
						<div onClick={this.login} style={{}}>	
							<Glyphicon  glyph='play-circle'  style={{cursor:'pointer', fontSize:'3em'}}/>
						</div>
					</Row>
					

				</Grid>
			</div>
		);

		return html;
	}

});


					/*
					<Row style={{textAlign:'center'}}>
							<Button onClick={this.login} bsStyle='primary' style={{width:'100%', padding:'1em'}}>
								<img style={{width:'2em', height:'2em'}} src={require('./images/login.png')}/>
							</Button>
					</Row>
					*/


