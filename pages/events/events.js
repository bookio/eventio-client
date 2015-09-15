import {React, Grid, Glyphicon, Input, Jumbotron, Row, Col, Thumbnail, Button, Page} from '../../components/ui.js';

var Masonry = require('react-masonry-component')(React);



var XNewCard = React.createClass({
	
	render() {
		return (
			<div style={{paddingLeft:'1em', paddingRight:'1em', width:'280px'}}>
				<Thumbnail style={{border:'4px dashed rgb(240,240,240)', borderRadius:'20px'}}>
					<h4>Skapa nytt eventXX</h4>
					<Button block href="#/event">Skapa nytt event</Button>
				</Thumbnail>
			</div>
		);
		
	}
});


var NewCard = React.createClass({
	
	render() {
		return (
			<div style={{paddingLeft:'1em', paddingRight:'1em', width:'300px', height:'400px'}}>
				<Thumbnail  >
					<div style={{border:'4px dashed rgb(240,240,240)', borderRadius:'20px', height:'200px'}}>
					</div>
					<h4>Skapa nytt event</h4>
					<p  style={{overflow:'hidden', textOverflow: 'ellipsis'}}>
						Lorem ipsum dolor sit amet, aperiri volutpat partiendo eos eu.
					</p>
					<p>
						<Button block href="#/event"><Glyphicon glyph='plus'/></Button>
					</p>
				</Thumbnail>
			</div>
		);
		
	}
});

var EventCard = React.createClass({
	
	
	
	render() {
		return (
			<div style={{textAlign:'center', display:'inline-block', paddingLeft:'1em', paddingRight:'1em', width:'300px'}}>
				<Thumbnail src={this.props.image} style={{}}>
					<h4>{this.props.title}</h4>
					<p  style={{overflow:'hidden', textOverflow: 'ellipsis', height:'5em'}}>
						{this.props.description}
					</p>
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
				description: 'Lorem ipsum dolor sit amet, duo an veri aperiam feugait, usu purto blandit ad. Iudico delenit gloriatur eu his, molestie democritum referrentur eum ex viris.',
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
		
		var style={
			//display:'table-cell',
			//textAlign:'center'	
		};

		        var children = events.map(function(event, index) {
		           return (
						<Col xs={12} sm={6} md={4} lg={3} style={style}>
		           			<EventCard key={index} title={event.title} description={event.description} image={event.image}/>
						</Col>
		            );
		        });		
		return (
				
			<Page>
			<Grid fluid style={{maxWidth:'100%'}}>
					<Row style={{display:'inline-block', textAlign:'center'}}>
						{children}
					</Row>
			</Grid>	
			</Page>		
	


		);
	}
});
