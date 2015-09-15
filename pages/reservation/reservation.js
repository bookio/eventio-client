import React from 'react';

import {Page, TextBox, Grid, Row, Col, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Thumbnail, Button} from '../../components/ui.js';


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
	
	onChange(name, value) {
		var state = {};
		state[name] = value;
		this.setState(state);
	},
	
	render() {

		var ThankYouForm = React.createClass({
			
			render() {
				return (
					<div>
						<Jumbotron>
							<h1>Tack för din bokning!</h1>
							<p>Se gärna om det finns något annat evenemang som skulle passa.</p>
							<p><Button href="#/events"  bsStyle='primary'>Visa mer</Button></p>
						</Jumbotron>
					</div>	
				);
				
			}
		});

		var ReservationForm = React.createClass({
		
			render() {
				return (
					<div>
						<Row>
							<Col md={12}>
									<EventCard title = 'Vinprovning' description = 'Nu en vinprovning på Österlen med spännande röda viner' image = {require('./images/wine.jpg')}/> 
							</Col>
						</Row>
						<Row>
							<Col md={6} style={{}}>
								<Input type='text' placeholder='Antal platser' label='' help='' hasFeedback ref='input'  />
							</Col>
							<Col md={6} style={{textAlign:'left'}}>
								<ButtonGroup>
									<Button><Glyphicon glyph='plus'/></Button>
									<Button><Glyphicon glyph='minus'/></Button>
								</ButtonGroup>
							</Col>
						</Row>
		
						<Row>
							<Col xs={12} sm={6} md={4}>
								<Input type='text' placeholder='Telefon' label='' help='' hasFeedback ref='input'  />
							</Col>
							<Col xs={12} sm={6} md={4}>
								<Input type='text' placeholder='E-post' label='' help='' hasFeedback ref='input'  />
							</Col>
							<Col xs={12} sm={6} md={4}>
								<Input type='text' placeholder='Ditt namn på Twitter' label='' help='' hasFeedback ref='input'  />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Input type='checkbox'  label='Håll mig informerad om erbjudanden' hasFeedback ref='input'  />
							</Col>
						</Row>
		
						<Row>
							<Col md={12}>
								<Panel>
									<Input style={{height:'6em'}} type='textarea' placeholder='Övrig information' label='' help='' hasFeedback ref='input'  />
								</Panel>
							</Col>
						</Row>

		
						<Row style={{textAlign:'center'}}>
							<Button style={{width:'10em'}} bsStyle='primary' onClick={this.props.onSubmit} >Boka</Button>
						</Row>
					</div>
				);
			}
		});
		

		return (
			
			<Page>
				<Grid fluid>
					{this.state.mode == 'form' ? <ReservationForm onSubmit={this.onClick}/> : <ThankYouForm/>}
				</Grid>
			</Page>
		);
		
	}
});


