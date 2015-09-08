

import React from 'react';

var Bootstrap = require('react-bootstrap');
var SectionHeader = require('../../components/SectionHeader.js');
var ui = Bootstrap;

//var RaisedButton = Material.RaisedButton;
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Input = Bootstrap.Input;
//import Button from 'react-bootstrap/lib/Button';


var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage

		var favorites = [];

		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}

		// Nobody would get mad if we center it on Paris by default

		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},
	

/*

			/*
				<div>
				    <Material.Button label="Default" />
	
				</div>
		*/

	render() {

	
		var btnSize = 'large';
		
		var gridStyle = {
			//border: '1px solid yellow',
			cornerRadius: '8px',
			textAlign: 'left'			
		};

		var rowStyle = {
			
		};
		
		return (
			<div>
				<Grid>
					<ui.Jumbotron>
						<h1>Boka nu!</h1>
						<p>Vi har nu en hel del nya events på gång.</p>
						<p>Kom och smaka på öl, vin och whiskey med era nära och kära.</p>
						<p><ui.Button href="#/events" bsStyle='primary'>Visa mer</ui.Button></p>
					</ui.Jumbotron>	
				</Grid>
				

			</div>

		);
	}

});

module.exports = App;