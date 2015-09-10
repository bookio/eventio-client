import React from 'react';
import {Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';


var EventCard = React.createClass({
	
	render() {
		return (
				<Thumbnail src={this.props.image} >
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</Thumbnail>
		);
		
	}
});

var Header = React.createClass({

	render() {
		return (
			<Grid>
				<Row>
					<EventCard title = 'Vinprovning' description = 'Nu en vinprovning på Österlen med spännande röda viner' image = {require('./images/wine.jpg')}/> 
				</Row>
			</Grid>			
		);
		
	}
});


module.exports = React.createClass({

	getInitialState() {

		var state = {};
		
		state.mode = 'form';
		
		return state;
	},

			
	onClick() {
		this.setState({mode:'thank-you'});
	},
	
	render() {

		function renderThankYou() {
			return (
				<Grid>
					<Jumbotron>
						<h1>Tack för din bokning!</h1>
						<p>Se gärna om det finns något annat evenemang som skulle passa.</p>
						<p><Button href="#/events"  bsStyle='primary'>Visa mer</Button></p>
					</Jumbotron>
				</Grid>	
			);
		}
		
		function renderForm(self) {
			return (
				<Grid>
					<Row>
						<Grid>
							<Row>
								<EventCard title = 'Vinprovning' description = 'Nu en vinprovning på Österlen med spännande röda viner' image = {require('./images/wine.jpg')}/> 
							</Row>
						</Grid>							
					</Row>
					<Row>
						<Col md={10} style={{paddingLeft:'0px'}}>
							<Input type='text' placeholder='Antal platser' label='' help='' hasFeedback ref='input'  />
						</Col>
						<Col md={2} style={{textAlign:'right'}}>
							<ButtonGroup>
								<Button><Glyphicon glyph='plus'/></Button>
								<Button><Glyphicon glyph='minus'/></Button>
							</ButtonGroup>
						</Col>
					</Row>
	
					<Row>
						<Input type='text' placeholder='' label='' help='' hasFeedback ref='input'  />
					</Row>
					<Row>
						<Input type='text' placeholder='Telefon' label='' help='' hasFeedback ref='input'  />
					</Row>
					<Row>
						<Input type='text' placeholder='E-post' label='' help='' hasFeedback ref='input'  />
					</Row>
					<Row>
						<Input type='text' placeholder='Ditt namn på Twitter' label='' help='' hasFeedback ref='input'  />
					</Row>
	
					<Row >
						<Input type='checkbox'  label='Håll mig informerad om erbjudanden' hasFeedback ref='input'  />
					</Row>
	
					<Row>
						<Panel>
							<Input style={{height:'6em'}} type='textarea' placeholder='Övrig information' label='' help='' hasFeedback ref='input'  />
						</Panel>
					</Row>
	
					<Row>
						<Button block bsStyle='primary' onClick={self.onClick} >Boka</Button>
					</Row>
				</Grid>
			);
			
		}


		return (
			<form>
				{this.state.mode == 'form' ? renderForm(this) : renderThankYou()}
			</form>
		);
		
	}
});


