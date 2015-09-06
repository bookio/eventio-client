import React from 'react';
var ui = require('react-bootstrap');

module.exports = React.createClass({ 
	
	
	render() {
		var image = require('./images/wine.jpg');
		var beer = require('./images/beer.jpg');
		
		return (
			<div>
			
			<ui.Grid>
				<ui.Row>
					<ui.Col xs={6} md={4}>
						<ui.Thumbnail src={image} >
							<h3>Vinprovning</h3>
							<p>Nu en vinprovning på Österlen med spännande röda viner</p>
							<p>
								<ui.Button block >Boka</ui.Button>&nbsp;
							</p>
						</ui.Thumbnail>
					</ui.Col>
	
					<ui.Col xs={6} md={4}>
						<ui.Thumbnail src={require('./images/beer.jpg')} >
							<h3>Ölprovning</h3>
							<p>Udda tjeckiska ölsorter kommer att smakas av denna Torsdag</p>
							<p>
								<ui.Button block >Boka</ui.Button>&nbsp;
							</p>
						</ui.Thumbnail>
					</ui.Col>
	
					<ui.Col xs={6} md={4}>
						<ui.Thumbnail src={require('./images/whiskey.jpg')} alt='242x200'>
							<h3>Whiskey!</h3>
							<p>Nu finns äntligen whiskey-provning på programmet. Välkommen den 17/12!</p>
							<p>
								<ui.Button block >Boka</ui.Button>&nbsp;
							</p>
						</ui.Thumbnail>
					</ui.Col>
					
				</ui.Row>
			</ui.Grid>



			<ui.Grid>
				<ui.Row>
						<ui.Thumbnail src={require('./images/wine.jpg')} alt='242x200'>
							<h3>Vinprovning</h3>
							<p>Nu en vinprovning på Österlen med spännande röda viner</p>
							<p>
								<ui.Button block >Boka</ui.Button>&nbsp;
							</p>
						</ui.Thumbnail>
				</ui.Row>
				<ui.Row>
						<ui.Thumbnail src={require('./images/beer.jpg')} alt='242x200'>
							<h3>Ölprovning</h3>
							<p>Udda tjeckiska ölsorter kommer att smakas av denna Torsdag</p>
							<p>
								<ui.Button block >Boka</ui.Button>&nbsp;
							</p>
						</ui.Thumbnail>
				</ui.Row>
				<ui.Row>
					<ui.Thumbnail src={require('./images/whiskey.jpg')} alt='242x200'>
						<h3>Whiskey!</h3>
						<p>Nu finns äntligen whiskey-provning på programmet. Välkommen den 17/12!</p>
						<p>
							<ui.Button block >Boka</ui.Button>&nbsp;
						</p>
					</ui.Thumbnail>
					
				</ui.Row>
			</ui.Grid>
			</div>


		);
	}
});

