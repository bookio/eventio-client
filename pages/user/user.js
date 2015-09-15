import React from 'react';
import {ListGroup, ListGroupItem,  Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';
import {Page, Panel, TextBox, CheckBox, Spinner} from '../../components/ui.js';


var sprintf = require('../../tools/tools.js').sprintf;
var Model = require('../../tools/model.js');


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
	
	onChange(name, value) {
	
		var state = {};
		state[name] = value;
		this.setState(state);	
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
					<CheckBox name='changePassword' value={this.state.changePassword} label='Ändra lösenord' onChange={this.onChange}/>
					<Panel >
						<TextBox  name='password' value={this.state.password} disabled={this.state.changePassword == 0} label='Nytt lösenord' onChange={this.onChange}/>
						<TextBox  name='oldPassword' value={this.state.oldPassword} disabled={this.state.changePassword == 0} label='Ditt gamla lösenord' onChange={this.onChange}/>
					</Panel>
				</Row>
				
			);
			
			
		}
		else {
			return (
				<Row>
					<TextBox name='password' value={this.state.password} label='Lösenord' onChange={this.onChange}/>
					<TextBox name='retypedPassword' value={this.state.retypedPassword} label='Repetera lösenord' onChange={this.onChange}/>
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
						<TextBox name='name' value={this.state.name} label='Namn' onChange={this.onChange}/>
						<TextBox name='username' value={this.state.username} label='Användarnamn' onChange={this.onChange}/>
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


