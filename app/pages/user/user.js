import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';

var sprintf = require('../../tools/tools.js').sprintf;
var Model = require('../../tools/model.js');




module.exports = React.createClass({


	
	getInitialState() {
		return {user: {}};
	},
	
	
	componentWillUnmount() {
		
	},
	
	componentWillMount() {
	},
	
	componentDidMount() {
	
		var component = this;
		
		console.log(self.props);
		
		var request = Model.Users.fetch(parseInt(component.props.params.id));
		
		request.done(function(user) {
			console.log('Got user', user);
			component.setState({user:user});				
		});	
	},
		

	componentDidUpdate(prevProps, prevState) {
	},
	
	
	onChange() {
		console.log('onChange', arguments);
	},
	
	onChangeName(event) {
		console.log(event, event.target);	
		var user = this.state.user;
		user.name = event.target.value;
		//console.log(event.target.value);
		//console.log(event.target);
		this.setState({user: user});
	},

	onChangeUsername(event) {

		var user  = this.state.user;
		user.username = event.target.value;
		this.setState({user: user});
	},
	
	onSave(event) {

		console.log('OnSave', this.state.user);

		var request = Model.Users.save(this.state.user);
		
		request.done(function(user) {
			window.history.back();
		});	
		
	},

	
	render() {
		return (
			<Grid>	
				<Row>
					<Input type='text' value={this.state.user.name} placeholder='' label='Namn' help='' hasFeedback ref='name' onChange={this.onChangeName} />
					<Input type='text' value={this.state.user.username} placeholder='' label='Användarnamn' help='' hasFeedback ref='username' onChange={this.onChangeUsername} />
				</Row>
				<Row style={{textAlign:'center'}}>
					<Button onClick={this.onSave} bsStyle='primary'>
						Spara
					</Button>
				</Row>
			</Grid>
		);
	}

});


