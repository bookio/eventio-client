import React from 'react';
import {ListGroup, ListGroupItem,  Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';
import {Page, Panel, TextBox, Checkbox} from '../../components/controls.js';
import Spinner from 'react-spinkit';

var sprintf = require('../../tools/tools.js').sprintf;
var Model = require('../../tools/model.js');

/*
var TextBox = React.createClass({

	getDefaultProps() {
	
		return {
			controller: undefined,
			stateKey: '',
			placeholder: '',
			help: '',
			label: '',
			disabled: false
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.stateKey] = event.target.value;
		this.props.controller.setState(state);	
	},
	
	
	render() {
	
		return (
			<Input type='text' disabled={this.props.disabled} value={this.props.controller.state[this.props.stateKey]} placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});




var Checkbox = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			stateKey: '',
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.stateKey] = event.target.checked;
		this.props.controller.setState(state);	
	},
	
	isChecked() {
		return this.props.controller.state[this.props.stateKey];		
	},
	
	render() {
	
		return (
			<Input type='checkbox' checked={this.isChecked()}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});
*/

module.exports = React.createClass({


	
	getInitialState() {
		return {
			id:undefined,
			name:'',
			username:'',
			oldPassword: undefined,
			changePassword: false,
			password:undefined,
			retypedPassword:undefined,
			ready:false
		};
	},
	
	componentWillMount() {
	
		var component = this;
		
		console.log(component.props.params);
		var request = Model.Users.fetch(parseInt(component.props.params.id));
		
		request.done(function(user) {
			console.log('Got user', user);
			component.setState({ready:true, id:user.id, username:user.username, name:user.name});				
		});	
	},
		

	onDelete(event) {
		var user = {};
		
		user.id       = this.state.id;

		var request = Model.Users.remove(user);
		
		request.done(function(user) {
			window.history.back();
		});	
		
	},
	
	onSave(event) {

		var user = {};
		var options = {};
		
		user.id       = this.state.id;
		user.username = this.state.username;
		user.name     = this.state.name;
		
		
		if (this.state.changePassword) {
			user.password    = this.state.password;
			options.password = this.state.oldPassword;
		}
		
		console.log(user);

		var request = Model.Users.save(user, options);
		
		request.done(function(user) {
			window.history.back();
		});	
		
	},

	renderPassword() {

		if (this.state.id != undefined) {
			return (
				<Row>
					<Checkbox controller={this} stateKey='changePassword' label='Ändra lösenord'/>
					<Panel >
						<TextBox  controller={this} stateKey='password' disabled={this.state.changePassword == 0} label='Nytt lösenord'/>
						<TextBox  controller={this} stateKey='oldPassword' disabled={this.state.changePassword == 0} label='Ditt gamla lösenord'/>
					</Panel>
				</Row>
				
			);
			
			
		}
		else {
			return (
				<Row>
					<TextBox  controller={this} stateKey='password' label='Lösenord'/>
					<TextBox controller={this} stateKey='retypedPassword' label='Repetera lösenord'/>
				</Row>
			);
			
		}

	},

	renderSaveButton() {
		return (
			<Button onClick={this.onSave} bsStyle='primary'>
				Spara
			</Button>
		);
		
	},

	renderDeleteButton() {
		if (this.state.id != undefined) {
			return (
				<Button onClick={this.onDelete} bsStyle='warning'>
					Radera
				</Button>
			);
			
		}
		
	},


	renderContent() {
		if (!this.state.ready) {
			return (
				<Row>
					<Spinner spinnerName='three-bounce'  noFade/>
				</Row>
			);
		}
		else {
			return (
				<div>
					<Row>
						<TextBox controller={this} stateKey='name' label='Namn'/>
						<TextBox controller={this} stateKey='username' label='Användarnamn'/>
					</Row>
	
					{this.renderPassword()}
	
					<Row style={{textAlign:'center'}}>
						<ButtonGroup>
							{this.renderSaveButton()}
							{this.renderDeleteButton()}
						</ButtonGroup>
					</Row>
				</div>
			);
			
		}
	},
	
	render() {
		return (
			<Page>
				<Grid style={{maxWidth:'600px'}}>	
					{this.renderContent()}
				</Grid>
			</Page>
		);
	}

});


