import React from 'react';
import {Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';

var Masonry = require('react-masonry-component')(React);



var NewCard = React.createClass({
	
	render() {
		return (
			<div style={{paddingLeft:'1em', paddingRight:'1em', width:'300px'}}>
				<Thumbnail style={{border:'4px dashed rgb(240,240,240)', borderRadius:'20px'}}>
					<h4>Skapa nytt event</h4>
					<Button block href="#/event"><Glyphicon glyph='plus'/></Button>
				</Thumbnail>
			</div>
		);
		
	}
});


var EventCard = React.createClass({
	
	
	
	render() {
		return (
			<div style={{paddingLeft:'1em', paddingRight:'1em', width:'300px'}}>
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
                <NewCard/>
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
				description: 'Lorem ipsum dolor sit amet, delenit debitis splendide mei id.',
				image: require('./images/wine.jpg')
			},
			{
				title: 'Ölprovning',
				description: 'Lorem ipsum dolor sit amet, eam tamquam delenit ne, usu.',
				image: require('./images/beer.jpg')
			},
			{
				title: 'Vinprovning',
				description: 'Lorem ipsum dolor sit amet, et ius laudem adolescens consetetur, doctus euismod interesset eu sed. Vix wisi nihil quaestio cu.',
				image: require('./images/wine.jpg')
			},
			{
				title: 'Ölprovning',
				description: 'Lorem ipsum dolor sit amet, eos detraxit referrentur id. His ex eius utinam fastidii, ex dolore feugiat laboramus eam, et nonumes verterem platonem nam. Quod epicurei cotidieque quo cu, hinc.',
				image: require('./images/beer.jpg')
			},
			{
				title: 'Vinprovning',
				description: 'Lorem ipsum dolor sit amet, vis nibh malis cu, convenire consetetur disputando in sit. Qui probatus electram complectitur an, qui.',
				image: require('./images/wine.jpg')
			},
			{
				title: 'Ölprovning',
				description: 'Lorem ipsum dolor sit amet, pri saepe mollis te, id.',
				image: require('./images/beer.jpg')
			},
			{
				title: 'Vinprovning',
				description: 'Lorem ipsum dolor sit amet, eum aliquip scaevola ut, an nobis offendit complectitur nam. Pro te homero pertinacia, et his.',
				image: require('./images/wine.jpg')
			},
			{
				title: 'Ölprovning',
				description: 'Ett antal tjeckiska ölsorter smakar vi av denna torsdag. Välkommen!',
				image: require('./images/beer.jpg')
			},
			{
				title: 'Whiskeyprovning',
				description: 'Lorem ipsum dolor sit amet, in sea decore petentium disputationi. Nonumes volumus eu vis. Semper iudicabit pri at, mea augue omittam eu, affert ridens omnesque has te. Idque saepe no quo, ex mea dicunt adipisci senserit. Qui in magna dolore.',
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
