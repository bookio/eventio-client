

import React from 'react';
import {Label, ListGroup, ListGroupItem, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';


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
			<Grid>
				<Panel>
					<h5>
						Detta är egentligen inte några inställningar utan mer en plats för att komma åt olika sidor.
					</h5>
					<p>
						Arbete pågår.
					</p>
				</Panel>
				<ListView>
				    <ListViewItem title='Logga in' href='#/login' glyphRight='chevron-right'/>
				    <ListViewItem title='Användare' href='#/users' glyphRight='chevron-right'/>
				    <ListViewItem title='Events' href='#/events' glyphRight='chevron-right'/>
				    <ListViewItem title='Masonry' subtitle='Prova på en variant av Isotope' href='#/masonry' glyphRight='chevron-right'/>
				    <ListViewItem title='Material-UI' subtitle='Se ett exempel på hur Material-UI ser ut' href='#/material' glyphRight='chevron-right'/>


				</ListView>


			</Grid>

		);
	}

});


