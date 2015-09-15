
import {React, ListGroup, ListGroupItem,  Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail, ListView, ListViewItem, Page, Panel, TextBox, CheckBox, Spinner, Grid, Row, Col} from '../../components/ui.js';


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
					<Col xs={12} sm={12} md={12}>
						<CheckBox name='changePassword' value={this.state.changePassword} label='Ändra lösenord' onChange={this.onChange}/>
						<Panel >
							<TextBox  name='password' value={this.state.password} disabled={this.state.changePassword == 0} label='Nytt lösenord' onChange={this.onChange}/>
							<TextBox  name='oldPassword' value={this.state.oldPassword} disabled={this.state.changePassword == 0} label='Ditt gamla lösenord' onChange={this.onChange}/>
						</Panel>
					</Col>
				</Row>
				
			);
			
			
		}
		else {
			return (
				<Row>
					<Col xs={12} sm={12} md={12}>
						<TextBox name='password' value={this.state.password} label='Lösenord' onChange={this.onChange}/>
						<TextBox name='retypedPassword' value={this.state.retypedPassword} label='Repetera lösenord' onChange={this.onChange}/>
					</Col>
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
					<Col md={12}>
						<Spinner spinnerName='three-bounce'  noFade/>
					</Col>
				</Row>
			);
		}
		else {
			return (
				<div>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<TextBox name='name' value={this.state.name} label='Namn' onChange={this.onChange}/>
							<TextBox name='username' value={this.state.username} label='Användarnamn' onChange={this.onChange}/>
						</Col>
					</Row>
	
					{this.renderPassword()}
	
					<Row style={{textAlign:'center'}}>
						<Col xs={12} sm={12} md={12}>
							<ButtonGroup>
								{this.renderSaveButton()}
								{this.renderDeleteButton()}
							</ButtonGroup>
						</Col>
					</Row>
				</div>
			);
			
		}
	},
	
	render() {
		return (
			<Page>
				<Grid>	
					{this.renderContent()}
				</Grid>
			</Page>
		);
	}

});


