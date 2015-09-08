/*


*/

import React from 'react';

var SectionHeader = require('../../components/SectionHeader.js');

import {Panel, Modal, Label, Well, Tabs, Tab, SplitButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

import {sprintf} from '../../tools/tools.js';

require('./event.less');



var TabPrice = React.createClass({

	getInitialState() {
		return {
			value: 1
		}
	},
	
	render() {
		return (
			<div style={{minHeight:'20em'}}>
				<Grid style={{textAlign: 'left'}}>
					
					<Row>
						<Input type='text' value={this.state.value} placeholder='Namn' label='&nsp' help='Ange namnet på ditt event' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
				</Grid>
			</div>
		);
	}
});


var Separator = React.createClass({

	render() {
		var rowStyle = {
			background: 'red',
			padding: '1em',
			paddingLeft: '2em',
			//borderRadius: '2em',			
			textAlign: 'left',
			fontSize: '120%'
		};
		
		return (
			<Row style={{rowStyle}}>
				<h5 style={{fontSize:'120%'}}>{this.props.caption}</h5>
			</Row>
		);
	}

});

var App = React.createClass({

	getInitialState(){

		var state = {};
		
		state.event = {};

		if (localStorage.event) {
			state.event = JSON.parse(localStorage.event);
		}

		return event;
	},
	

	render() {

		
		var gridStyle = {
			//border: '1px solid yellow',
			cornerRadius: '8px',
			textAlign: 'left'			
		};

		var rowStyle = {
			
		};
		

		function buttonClick(event) {
			console.log('handling back button press');
			event.preventDefault();
			window.history.back();
		}
		
		var html = (
			<div className='event-page'>
			
				<div id="modal">
				</div>
				<Grid>
					<Row>
						<h1>Nytt event</h1>
					</Row>
					<Row>
						<Input type='text' value={this.state.value} placeholder='Namn' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
					<Row>
						<Input type='textarea' value={this.state.value} placeholder='Beskrivning' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
	
					<Row>
						<Input type='text' value={this.state.value} placeholder='Taggar' label='' help='Exempel #tasting #excursion #seminar' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>

					<Row>
						<Grid>
							<Row>
								<Col md={6}>
									<Input type='text' value={this.state.value} placeholder='Taggar' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
								</Col>
								<Col md={6}>
									<Input type='text' value={this.state.value} placeholder='Taggar' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
								</Col>
							</Row>
							<Row>
								<Input type='text' value={this.state.value} placeholder='Taggar' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
							</Row>
						</Grid>
					</Row>
	
					<Row>
					</Row>
					<Row>
						<Panel header={sprintf('Öppen för %s', 'reservation!')}>
							<Grid style = {gridStyle}>
								<Row style = {rowStyle} >
									<Input type='radio' value={this.state.value} label='Nu' hasFeedback ref='input' onChange={this.handleChange} />
								</Row>
								<Row>
									<Grid>
									<Row>
										<Input type='radio' value={this.state.value} label='Inte förrän' hasFeedback ref='input' onChange={this.handleChange} />
									</Row>
									<Row>
										<div style={{width: '90%'}}>
											<Input type='text' value={this.state.value} placeholder='Ange datum' label='' />
										</div>
									</Row>
									</Grid>
								</Row>
								<Row>
								</Row>
							</Grid>
						</Panel>
					</Row>


					<Row>
						<Panel header='Stäng för reservation'>
							<Grid style = {gridStyle}>
								<Row style = {rowStyle} >
									<Grid>
									<Row>
										<Col md={8}>
									<Input type='radio' value={this.state.value} label='När eventet startas' hasFeedback ref='input' onChange={this.handleChange} />
										</Col>
									</Row>
									</Grid>
								</Row>
								<Row>
									<Grid>
										<Row>
											<Col md={2}>
												<Input type='radio' value={this.state.value} label='Tillåt bokningar' hasFeedback ref='input' onChange={this.handleChange} />
											</Col>
											<Col md={6}>
												<SplitButton title='6 timmar innan' pullRight id='split-button-pull-right'>
													<MenuItem eventKey='1'>En timme innan</MenuItem>
													<MenuItem eventKey='2'>En dag innan</MenuItem>
													<MenuItem eventKey='3'>En vecka </MenuItem>
												</SplitButton>	
											</Col>
										</Row>
									</Grid>
								</Row>
							</Grid>
						</Panel>
					</Row>

					<Row>
						<Panel header="Kösystem">
							<Input type='checkbox' value={this.state.value} help='Om eventet är fullt placeras nya bokningar i kö. Deltagarna meddelas via SMS eller mail.	' label='Tillåt kö' hasFeedback ref='input' onChange={this.handleChange} />
						</Panel>
  					</Row>

					<Row style={{textAlign:'center'}}>
						<ButtonGroup>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Plats</Button>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Datum och tid</Button>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Platser</Button>
						</ButtonGroup>				
					</Row>
					
					<Row style={{textAlign:'center'}}>
						<p/>
						<Button bsStyle='success' onClick={buttonClick} style={{minWidth: '100px'}} >Skapa nytt event</Button>
						<p/>
						
					</Row>
	
				</Grid>
			</div>
		);

		return html;
	}

});


/*	

					<Row>
						<div className="tabs">
							<Tabs style={{textAlign:'center'}} bsStyle='pills' defaultActiveKey={1} animation={false}>
								<Tab eventKey={1} title='Pris'>
									<TabPrice>
									</TabPrice>
								</Tab>
								<Tab eventKey={2} title='Plats'>Tab 2 content</Tab>
								<Tab eventKey={3} title='Datum och tid'>Tab 3 content</Tab>
								<Tab eventKey={4} title='Platser'>Tab 3 content</Tab>
							</Tabs>
						</div>
  					</Row>
*/	


module.exports = App;