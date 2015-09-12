

import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';
import {Page} from '../../components/controls.js';

var sprintf = require('../../tools/sprintf.js');
var Model = require('../../tools/model.js');



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
	},
	
	componentDidMount() {
	},

	componentDidUpdate(prevProps, prevState) {
	},
	
	componentWillUnmount() {
	},
	
	render() {
		var userNodes = this.props.users.map(function(user, index) {
		
			return (
				<ListViewItem key={index} title={user.name} glyphRight='chevron-right' href={sprintf('#/user/%s', user.id)}>
				</ListViewItem>
			);
		});
      
		console.log(userNodes);
		
		return (
			<Grid>
			    <ListView>
					{userNodes}
			    </ListView>
		    </Grid>
		);		
	}

});



module.exports = React.createClass({


	
	getInitialState() {
		return {users:[]};
	},
	
	
	componentWillUnmount() {
		
	},
	
	componentWillMount() {
	},
	
	componentDidMount() {
		
		var self = this;
		var request = Model.Users.fetch();
		
		request.done(function(users) {

			if (self.isMounted()) {
				self.setState({users:users});				
				
			}
		});	

	
	},

	componentDidUpdate(prevProps, prevState) {
	},
	
	
	render() {
		return (
			<Page>
			<Grid>
				<UserList users = {this.state.users} />
			
				<Row style={{textAlign:'center'}}>
					<Button href='#/user' bsStyle='primary'>
						Skapa ny
					</Button>
				</Row>
			</Grid>
			</Page>
			
		);
	}

});


