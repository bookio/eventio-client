

import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';
import {Page, Spinner} from '../../components/ui.js';

var sprintf = require('../../tools/sprintf.js');
var Model = require('../../tools/model.js');



var UserList = React.createClass({

	getInitialState() {

		return {};
	},

	getDefaultProps() {
		return {
			users: []
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
	
		var state = {};
		
		state.users = [];
		state.ready = false;

		return state;
	},
	
	
	componentDidMount() {
		
		console.log('Fetching users...');

		var self = this;
		var request = Model.Users.fetch();
		

		request.done(function(users) {
			console.log('Done.');
			self.setState({ready:true, users:users});				
		});	

	
	},

	
	renderList() {

		if (this.state.ready) {
			var children = this.state.users.map(function(user, index) {
			
				return (
					<ListViewItem key={index} title={user.name} glyphRight='chevron-right' href={sprintf('#/user/%s', user.id)}>
					</ListViewItem>
				);
			});		
			
			return (
				<Row>
					{children}
				</Row>
			);
			
		}
	},
	
	renderSpinner() {

		if (!this.state.ready) {
			return (
				<Row style={{textAlign:'center', padding:'1em'}}>
					<Spinner spinnerName='three-bounce'  noFade/>
				</Row>
			);
		}
	},
	
	renderButton() {
		if (this.state.ready) {
			return (
				<Row style={{textAlign:'center', padding:'1em'}}>
					<Button href='#/user' bsStyle='primary'>
						Skapa ny
					</Button>
				</Row>
			);		
			
		}
	},
	
	render() {
		return (
			<Page>
				<Grid style={{maxWidth:'600px'}}>
					{this.renderSpinner()}
					{this.renderList()}
					{this.renderButton()}
				
				</Grid>
			</Page>
			
		);
	}

});


