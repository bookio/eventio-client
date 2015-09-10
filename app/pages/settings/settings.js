

import React from 'react';
import {Label, ListGroup, ListGroupItem, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';




var ListGroupItemContent = React.createClass({

	render() {

		return (
			<div style={{display: 'inline-block'}}>
				<h6>
				<strong>
					{this.props.text}
				</strong>
				</h6>
				<div>
					HEHE
				</div>
			</div>
		);
	}

});

var ListGroupItemText = React.createClass({

	render() {

		return (
			<div style={{display: 'inline-block'}}>
				<h6 >
					{this.props.text}
				</h6>
				<div>
					HEJ
				</div>
			</div>
		);
	}

});

var ListGroupItemIcon = React.createClass({

	
	getDefaultProps() {
		return {
			image: require('./images/chevron-right.svg')
		}
	},

	render() {

		return (
	    	<div style={{display:'inline-block', float:'right'}}>
		    	<img style={{height:'2.75em'}} src={this.props.image}/>
	    	</div>
		);
	}

});

module.exports = React.createClass({

	getInitialState(){

		return {}
	},
	


	render() {

		return (
			<div>
				<Grid>
					<ListGroup>

					    <ListGroupItem href="#/users">
					    	<div style={{display:'table'}}>
					    		<div style={{width:'100%', display:'table-cell', verticalAlign:'middle'}}>
					    			<h6><strong>HEJ</strong></h6>
					    			<p>KALLE</p>
					    		</div>
					    		<div style={{width:'2em', display:'table-cell', verticalAlign:'middle'}}>
									<img style={{height:'2.75em'}} src={require('./images/chevron-right.svg')}/>
					    		</div>
					    	</div>
					    </ListGroupItem>


					    <ListGroupItem href="#/material">
						    <ListGroupItemText text='Prova material-ui'/>
					    	<ListGroupItemIcon/>
					    </ListGroupItem>
					    <ListGroupItem href="#/login">
						    <ListGroupItemText text='Logga in'/>
					    	<ListGroupItemIcon/>
					    </ListGroupItem>
					    <ListGroupItem href="#/events">
						    <ListGroupItemText text='Visa alla events'/>
					    	<ListGroupItemIcon/>
					    </ListGroupItem>
					</ListGroup>
				</Grid>
				
			</div>

		);
	}

});


