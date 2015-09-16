import React from 'react';

import {Page, TextBox, RadioButton, CheckBox, Input, Row, Col, SplitButton, Button, MenuItem, Grid, Panel} from '../../components/ui.js'
import {sprintf} from '../../tools/tools.js';
var Dropzone = require('react-dropzone');


var App = React.createClass({

	getInitialState(){

		var state = {
			name: '',
			allow_queue: true,
			open_at:null,
			close_at:null
		};
		return state;
	},
	
	onChange(name, value) {

		var state = {};
		state[name] = value;
		this.setState(state);
	},
	
	handleChange(name, event) {
		
		console.log('change');
		switch (name) {
			case 'name': {
				this.setState({name:event.target.value});
				break;
			}
		}
	},
	
	onSave() {
		console.log(this.state);	
	},

	onDrop(files) {
		console.log('onDrop', files);
		this.setState({image:files[0]});
	},

	renderImage() {

		console.log(this.state.image);
		if (this.state.image) {
			return (
				<div style={{display:'table', width:'100%', height:'100%'}}>
					<div style={{display:'table-cell', verticalAlign:'middle', textAlign:'center', padding:'1em'}}>
						<img src={this.state.image.preview} style={{maxHeight:'200px'}}/>
					</div>
				</div>
			);
		}
	},

	render() {

		
		var html = (
				<Grid >
					<h4>Nytt event</h4>
					<Row>
						<Col md={12}>
							<TextBox name='name' value={this.state.name} placeholder='Namn' onChange={this.onChange} />
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Panel style={{}}>
								<Input type='textarea' style={{height:'4em'}} value={this.state.value} placeholder='Beskrivning' label='' help='' hasFeedback  onChange={this.onChange} />
							</Panel>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<TextBox name='price' label='Pris' value={this.state.price} onChange={this.onChange}/>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<TextBox name='location' label='Plats' value={this.state.location} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<TextBox name='when' label='Tid och datum' value={this.state.when} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<TextBox name='seats' label='Antal platser' value={this.state.seats} onChange={this.onChange}/>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<Panel header='Bild' style={{textAlign:'left'}}>
								<div style={{textAlign:'center'}}>
									<Dropzone ref='dropzone' onDrop={this.onDrop} multiple={false} style={{display:'inline-block', textAlign:'center', width:'200px', height:'200px', borderRadius:'10px', border:'5px dashed rgb(220, 220, 220)'}}>
										{this.renderImage()}
									</Dropzone>
								</div>
								
							</Panel>
						</Col>
					</Row>
					
					<Row>
						<Col sm={12} md={6}>
							<Panel header='Öppen för reservation'>
								<RadioButton name='open_at_option' option={0} label='Nu' value={this.state.open_at_option} onChange={this.onChange}/>
								<RadioButton name='open_at_option' option={1} label='Inte förrän' value={this.state.open_at_option} onChange={this.onChange}/>
								<TextBox name='open_at' placeholder='Ange datum/tid' onChange={this.onChange} />
							</Panel>
						</Col>
						<Col sm={12} md={6}>
							<Panel header='Stäng för reservation'>
								<RadioButton name='close_at_option' option={0} label='När eventet påbörjas' value={this.state.close_at_option} onChange={this.onChange}/>
								<RadioButton name='close_at_option' option={1} label='Stäng vid' value={this.state.close_at_option} onChange={this.onChange}/>
								<TextBox name='close_at' placeholder='Ange datum/tid' onChange={this.onChange} />
							</Panel>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<Panel header="Kösystem">
								<CheckBox name='allow_queue' value={this.state.allow_queue} help='Om eventet är fullt placeras nya bokningar i kö. Deltagarna meddelas via SMS eller mail.' label='Tillåt kö' onChange={this.onChange} />
							</Panel>
						</Col>
  					</Row>

					
					<Row style={{textAlign:'center'}}>
						<Button bsStyle='success' onClick={this.onSave} style={{minWidth: '10em'}} >Spara</Button>
						
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