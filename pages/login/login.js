

import React from 'react';
import {Glyphicon, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

import {Page, TextBox, Grid, Row, Col} from '../../components/ui.js';

//var sprintf = require('../../tools/sprintf.js');
import {sprintf} from '../../tools/tools.js';
//import {Spinner} from '../../components/spinner.js';
var Spinner = require('react-spinkit');


var LoginButton = React.createClass({


	getDefaultProps() {
	
		function onClick() {
			alert(1);
		}
		
		return {
			onClick: onClick
		}
	},
		

	getInitialState() {
		return {disabled:false};
	},
	
	render() {
	
		var glyphStyle = {
			fontSize:'3em',
			boxShadow:'none',
			display:'table-cell',
			verticalAlign: 'middle',
			textAlign: 'right'
		};
	
		return (
				<Button  style={{border:'none', boxShadow:'none', borderRadius:'0px'}}>	
					<Glyphicon  glyph='play-circle'  style={glyphStyle}/>
				</Button>
		);
		
	}
});



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

		if (localStorage.loginPage) {
			state = JSON.parse(localStorage.loginPage);
		}
		state.password = '';
		state.spinning = false;
		state.foo = 'MEG';

		return state;
	},

	componentWillMount() {
	},
	
	componentDidUpdate(prevProps, prevState) {
		localStorage.loginPage = JSON.stringify({
			username: this.state.username
		});
	},
	
	onChange(name, value) {
		var state = {};
		state[name] = value;
		this.setState(state);
	},

	
	login() {
		var self = this;
		
		var Gopher = require('../../tools/gopher.js');
		console.log(this.state.username, this.state.password);
		
		var request = Gopher.login(this.state.username, this.state.password);
		
		self.setState({spinning:true});
		
		request.done(function() {
			localStorage.sessionID = Gopher.sessionID;
			console.log(Gopher.sessionID);
			window.location.hash = "#/home";
		});
		
		request.fail(function() {
			self.setState({spinning:false});
			
		});
	},

	render() {

		var self = this;

		var renderSpinner = function() {
			if (self.state.spinning) {
				return (
					<Row style={{textAlign:'center', padding:'1em'}}>
						<Spinner spinnerName='three-bounce'  noFade/>
					</Row>
				);
				
			}
			
		}
		
		var glyphStyle = {
			fontSize:'3em'
		};
		
		if (this.state.spinning) {
			glyphStyle.opacity = '0.5';
		}
		else {
			glyphStyle.cursor = 'pointer';
		}
		
		return (
			
			
			<Page>
					<Grid style={{maxWidth:'30em'}}>
						<Row>
							<TextBox name='username' value={this.state.username} placeholder='Användarnamn' onChange={this.onChange} />
						</Row>
						<Row>
							<TextBox name='password' value={this.state.password} placeholder='Lösenord' onChange={this.onChange} />
						</Row>
	
						<Row style={{textAlign:'center'}}>
							<div onClick={this.login} style={{}}>	
								<Glyphicon  glyph='play-circle'  style={glyphStyle}/>
							</div>
							
						</Row>
						
						
						{renderSpinner()}
					</Grid>
			
			</Page>
		);

	}

});


					/*
					<Row style={{textAlign:'center'}}>
							<Button onClick={this.login} bsStyle='primary' style={{width:'100%', padding:'1em'}}>
								<img style={{width:'2em', height:'2em'}} src={require('./images/login.png')}/>
							</Button>
					</Row>
					*/


