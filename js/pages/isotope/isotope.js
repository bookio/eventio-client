var React = require('react');

var Bootstrap = require('react-bootstrap');
var ui = Bootstrap;

var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Input = Bootstrap.Input;
var Thumbnail = Bootstrap.Thumbnail;

import { Jumbotron } from 'react-bootstrap';

var React = require('react');


/*
var Isotope = require('../../components/isotope.js').Isotope;
var IsotopeItem = require('../../components/isotope.js').IsotopeItem;
*/


var Isotope = React.createClass({

	getInitialState() {
		return {

		};
	},

	// Just to show it's possible to manipulate DOM with JQuery inside React
	componentDidMount() {
		var self = this;

		$('.Isotope .grid').isotope({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
	},

	render() {
		var style = {
			position: 'relative',
			padding: '1em'
			
		}
		return (
            <div className="Isotope">
				<div className="grid" style={style}>
					{this.props.children}
				</div>
            </div>
		);
	}
});

var IsotopeItem = React.createClass({

	propTypes: {
		style: React.PropTypes.object
	},

	getDefaultProps() {
		return {
			style: {
			}
		};
	},
	
	getInitialState() {
		return {
		};
	},

	render() {
	
		var style = {
			border: '2px solid rgb(240, 240, 240)',
			//borderStyle: 'dashed',
			borderRadius: '8px',
			margin: '0.25em',
			minWidth: '10px',	
			minHeight: '10px',
			background: 'transparent',
			padding: '0.5em 0.5em 0.5em 0.5em'	,
			overflow:'hidden'
		};

		return (
			<div className="grid-item" style={style}>
				<div style={this.props.style}>
					{this.props.children}
				</div>
			</div>
		);		
	}
});



module.exports = React.createClass({


	getInitialState() {
		return {

		};
	},



	render() {
	
		var Item = React.createClass({
		
			propTypes: {
				title       : React.PropTypes.string,
				description : React.PropTypes.string,
				image       : React.PropTypes.string
		
			},
		
			getDefaultProps() {
				return {
					title: 'Title',
					description: 'Description'
				}
			},
		
			render() {
			
				return (
					<div style={{}}>
						<img src={require(this.props.image)} style={{
							display: 'block',
							margin: 'auto',
							height:'200px',
						}}/>
						<h3>
							{this.props.title}
						</h3>
						<p>
							{this.props.description}
						</p>								
						<Button block >Boka</Button>&nbsp;
					</div>
				);
			}
		});

		return (
            <Grid >
            	<Row>
					<Grid>
						<Jumbotron>
							<h2>Aktuella events</h2>
							<p>Boka nu!</p>
						</Jumbotron>	
					</Grid>
		
            	</Row>
				<Row>
					<Isotope>
						
						<IsotopeItem>
							<Item image='./images/beer.jpg' title="Ölprovning" description="Denna vecka är det tjeckisk öl som gäller" />
						</IsotopeItem>

						<IsotopeItem>
							<Item image='./images/wine.jpg' title="Vinprovning" description="Röda viner provas. Utlovas pris för den som kan smaka skillnad mellan rött och vitt vin" />
						</IsotopeItem>

						<IsotopeItem>
							<Item image='./images/wine.jpg' title="Vinprovning" description="Röda viner provas. Utlovas pris för den som kan smaka skillnad mellan rött och vitt vin" />
						</IsotopeItem>

						<IsotopeItem>
							<Item image='./images/beer.jpg' title="Ölprovning" description="Denna vecka är det tjeckisk öl som gäller" />
						</IsotopeItem>

						<IsotopeItem>
							<Item image='./images/whiskey.jpg' title="Ölprovning" description="Denna vecka är det tjeckisk öl som gäller" />
						</IsotopeItem>


					</Isotope>
				</Row>
            </Grid>

		);
	}
});
