/*


*/

import React from 'react';

//import {Input, MenuItem, Page, Panel, Grid, Row, Col, SplitButton} from '../../components/ui.js';
//import {Panel, Grid, Row, Col, SplitButton, Button} from 'react-bootstrap';
import {Page, Input, Row, Col, SplitButton, Button, MenuItem, Grid, Panel} from '../../components/ui.js'
import {sprintf} from '../../tools/tools.js';





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
		return state;
	},
	

	render() {

		var self = this;
		
		var gridStyle = {
			//border: '1px solid yellow',
			cornerRadius: '8px',
			textAlign: 'left'			
		};

		var rowStyle = {
			
		};
		

		function buttonClick(event) {
			console.log(self.context);
			console.log('handling back button press');
			event.preventDefault();
			window.history.back();
		}
		
		var html = (
				<Grid >
					<Row>
						<h4>Nytt event</h4>
					</Row>
					<Row>
						<Input type='text' value={this.state.value} placeholder='Namn' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
					<Row>
						<Panel style={{}}>
							<Input type='textarea' style={{height:'4em'}} value={this.state.value} placeholder='Beskrivning' label='' help='' hasFeedback ref='input' onChange={this.handleChange} />
						</Panel>
					</Row>





					<Row>
						<Input type='text' value={this.state.value} placeholder='' label='Taggar' help='Exempel #tasting #excursion #seminar' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>


					<Row>
						<Panel>
							<Row>
								<Col md={12}>
									<Input type='text' value={this.state.value} placeholder='' label='Pris' help='' hasFeedback ref='input' onChange={this.handleChange} />
									<Input type='text' value={this.state.value} placeholder='' label='Datum och tid' help='' hasFeedback ref='input' onChange={this.handleChange} />
									<Input type='text' value={this.state.value} placeholder='' label='Antal platser' help='' hasFeedback ref='input' onChange={this.handleChange} />
									<Input type='text' value={this.state.value} placeholder='' label='Plats' help='' hasFeedback ref='input' onChange={this.handleChange} />
								</Col>
							</Row>
						</Panel>
					</Row>


					<Row>
						<Panel header={sprintf('Öppen för %s', 'reservation!')}>
								<Row>
									<Col md={12}>
										<Input type='radio' name="foo" value={this.state.value} label='Nu' hasFeedback ref='input' onChange={this.handleChange} />
										<Input type='radio' name="foo" value={this.state.value} label='Inte förrän' hasFeedback ref='input' onChange={this.handleChange} />
										<Input type='text' value={this.state.value} placeholder='Ange datum' label='' />
									</Col>
								</Row>
						</Panel>
					</Row>


					<Row>
						<Panel header='Stäng för reservation'>
							<Row style = {rowStyle} >
								<Col md={12}>
									<Input type='radio' name="foo2" value={this.state.value} label='När eventet startas' hasFeedback ref='input' onChange={this.handleChange} />
								</Col>
							</Row>
							<Row>
								<Col sm={12} md={3}>
									<Input type='radio' name = "foo2" value={this.state.value} label='Tillåt bokningar' hasFeedback ref='input' onChange={this.handleChange} />
								</Col>
								<Col sm={12} md={9}>
									<SplitButton title='6 timmar innan' pullRight id='split-button-pull-right'>
										<MenuItem eventKey='1'>En timme innan</MenuItem>
										<MenuItem eventKey='2'>En dag innan</MenuItem>
										<MenuItem eventKey='3'>En vecka </MenuItem>
									</SplitButton>	
								</Col>
							</Row>
						</Panel>
					</Row>


					<Row>
						<Panel header="Kösystem">
							<Input type='checkbox' value={this.state.value} help='Om eventet är fullt placeras nya bokningar i kö. Deltagarna meddelas via SMS eller mail.	' label='Tillåt kö' hasFeedback ref='input' onChange={this.handleChange} />
						</Panel>
  					</Row>

					
					<Row style={{textAlign:'center'}}>
						<Button bsStyle='success' onClick={buttonClick} style={{minWidth: '100px'}} >Skapa nytt event</Button>
						
					</Row>











				</Grid>
		);

		return (
			<Page style={{}}>
				{html}
			</Page>
		);
	}
	

});



module.exports = App;