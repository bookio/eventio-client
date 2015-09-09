import React from 'react';
import {Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';



var EventCard = React.createClass({
	
	
	
	render() {
		return (
				<Thumbnail src={this.props.image} >
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
					<p>
						<Button block href="#/reservation">Boka</Button>
					</p>
				</Thumbnail>
		);
		
	}
});


module.exports = React.createClass({ 
	
	
	
	render() {
		var image = require('./images/wine.jpg');
		var beer = require('./images/beer.jpg');
		
		var searchButton = <div><Glyphicon glyph='search' /></div>
		
		return (
			<div>

			<Grid>
				<Row>
					<Input type='text' placeholder='Sök' label='' help='' hasFeedback ref='input'>
						
					</Input>
				</Row>
			</Grid>			

			<Grid>

				<Row>
					<Col xs={6} md={4}>
						<EventCard title = 'Vinprovning' description = 'Nu en vinprovning på Österlen med spännande röda viner' image = {require('./images/wine.jpg')}/> 
					</Col>
					<Col xs={6} md={4}>
						<EventCard title = 'Ölprovning' description = 'Udda tjeckiska ölsorter kommer att smakas av denna Torsdag' image = {require('./images/beer.jpg')}/> 
					</Col>
					<Col xs={6} md={4}>
						<EventCard title = 'Whiskey' description = 'Nu finns äntligen whiskey-provning på programmet. Välkommen den 17/12!' image = {require('./images/whiskey.jpg')}/> 
					</Col>
				</Row>
			</Grid>

			</div>


		);
	}
});

