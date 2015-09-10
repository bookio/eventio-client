import React from 'react';
import {Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';

var Masonry = require('react-masonry-component')(React);


var EventCard = React.createClass({
	
	
	
	render() {
		return (
			<div style={{padding:'1em', width:'300px'}}>
				<Thumbnail src={this.props.image} style={{}}>
					<h4>{this.props.title}</h4>
					<p>{this.props.description}</p>
					<p>
						<Button block href="#/reservation">Boka</Button>
					</p>
				</Thumbnail>
			</div>
		);
		
	}
});


var EventGallery = React.createClass({

    render() {

        var events = this.props.events.map(function(event, index) {
           return (
           		<EventCard key={index} title={event.title} description={event.description} image={event.image}/>
            );
        });
        
        return (
            <Masonry className={'my-gallery-class'} elementType={'ul'} options={{}} disableImagesLoaded={false}>
                {events}
            </Masonry>
        );
    }
});



module.exports = React.createClass({ 
	
	
	
	render() {
		var image = require('./images/wine.jpg');
		var beer = require('./images/beer.jpg');
		
		var searchButton = <div><Glyphicon glyph='search' /></div>
		
		var events = [
			{
				title: 'Vinprovning',
				description: 'Nu en vinprovning på Österlen med spännande röda viner',
				image: require('./images/wine.jpg')
			},
			{
				title: 'Ölprovning',
				description: 'Ett antal tjeckiska ölsorter smakar vi av denna torsdag. Välkommen!',
				image: require('./images/beer.jpg')
			},
			{
				title: 'Whiskeyprovning',
				description: 'Single Malt står på menyn.',
				image: require('./images/whiskey.jpg')
			}
		];
		
		return (
			<div>
	
				<Grid>
					<Row>
						<Input type='text' placeholder='Sök' label='' help='' hasFeedback ref='input'>
							
						</Input>
					</Row>
					<Row>
						<EventGallery events={events}/>
					</Row>
				</Grid>			
	

			</div>


		);
	}
});
