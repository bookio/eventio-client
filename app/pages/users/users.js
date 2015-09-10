

import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

var sprintf = require('../../tools/sprintf.js');
var Model = require('../../tools/model.js');

require('./users.less');


/*
var UserListItem = React.createClass({


	componentWillMount() {
	},
	
	componentDidMount() {
	},

	componentDidUpdate(prevProps, prevState) {
	},
	
	
	render() {

		return (
		    <ListGroupItem>
			    {this.props.user.name}
		    </ListGroupItem>
		);		
	}

});

*/

var UserList = React.createClass({

	getInitialState() {

		return {users:[]}
	},

	getDefaultProps() {
		return {
			users: [{id:1, name:'OLLE'}, {id:2, name:'PELLE'}]
		};
	},
  
  	componentWillMount() {
		console.log('UserList.componentWillMount');
	},
	
	componentDidMount() {
		console.log('UserList.componentDidMount');
	},

	componentDidUpdate(prevProps, prevState) {
		console.log('UserList.componentDidUpdate');
	},
	
	componentWillUnmount() {
		console.log('UserList.componentWillUnmount');
		this.setState(this.getInitialState());
		
	},
	
	render() {
		console.log('UserList.render');

		var userNodes = this.props.users.map(function(user, index) {
		
			return (
				<ListGroupItem key={index}>
					{user.name}
				</ListGroupItem>
			);
		});
      
		console.log(userNodes);
		
		return (
			<Grid>
			    <ListGroup>
					{userNodes}
			    </ListGroup>
		    </Grid>
		);		
	}

});



module.exports = React.createClass({


	
	getInitialState() {
		return {users:[{id:1, name:'MEG'}, {id:2, name:'olle'}]};
	},
	
	
	componentWillUnmount() {
		console.log('componentWillUnmount');
		
	},
	
	componentWillMount() {
		console.log('componentWillMount');
	},
	
	componentDidMount() {
		console.log('componentDidMount');
	
		var self = this;
		var request = Model.Users.fetch();
		
		request.done(function(users) {

			if (self.isMounted()) {
				self.setState({users:users});				
				
			}
		});	

	
	},

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	},
	
	
	render() {
		console.log('render');
		return (
			<UserList key = {2344} users = {this.state.users} />
		);
	}

});


