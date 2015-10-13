import React from 'react';

import {Page, TextBox, RadioButton, CheckBox, Input, Row, Col, Spinner, SplitButton, Button, ButtonGroup, MenuItem, Grid, Panel} from '../../components/ui.js'
import {sprintf} from '../../tools/tools.js';


var Model = require('../../tools/model.js');
var Dropzone = require('react-dropzone');
var Router = require("react-router");
var Promise = require('bluebird');



var Clickable = React.createClass({

	onClick(event) {
		
		alert('click');
		
	},
	
	onMouseDown(event) {
		console.log('mouse down');
		event.stopPropagation();
		event.preventDefault();
		console.log(event.clientX);
		console.log('mouse down OK');
	},

	render() {
		return (
			<div onMouseDown={this.onMouseDown} style={{ background:'red'}}>
				{this.props.children}
			</div>
		);
		
	}

});


var TextBoxEx = React.createClass({

	getInitialState() {
		return {};
	},

	getDefaultProps() {
	
		return {
			label: '',
			value: ''
		};
	},
	
	value() {
		return this.state.value;
	},

	onChange(event) {
		console.log('onchange');
		this.setState({value:event.target.value});
//		this.props.onChange(this.props.name, event.target.value);
	},
	
	
	render() {
		this.state.value = this.props.value;
		
		return (
			<Input type='text' disabled={this.props.disabled} label={this.props.label} value={this.state.value} placeholder={this.props.placeholder} onChange={this.onChange}>
			</Input>
		);
		
	}
});



var App = React.createClass({

	mixins: [Router.Navigation],
	
	getInitialState(){

		var state = {
			event: {},
			ready: false
		};
		
		return state;
	},
	

	componentWillMount() {
	
		var component = this;
		
		if (component.props.params.id != undefined) {
			var request = Model.Events.fetch(parseInt(component.props.params.id));
			
			request.done(function(event) {
				component.setState({ready:true, event:event});				
			});	
			
		}
		else
			component.setState({ready:true});
	},
		
	
	onChange(name, value) {

		var event = this.state.event;
		event[name] = value;
		this.setState({event:event});

		console.log(this.state);
	},
	
	
	onSave() {

		console.log(this.state.event);

		var component = this;
		var request = Model.Events.save(this.state.event);
		
		request.done(function(event) {

			if (Router.History.length > 1)
				Router.History.back();
			else
				component.transitionTo('/#home');


		});

	},

	onDrop(files) {
			
		var self = this;
				
		function resize(src, options, callback) {
			var image = new Image();
			
			function onLoad() {
				var canvas = document.createElement("canvas"); 
				
				if (image.height > options.maxHeight) {
					image.width  = image.width * options.maxHeight / image.height;
					image.height = options.maxHeight;
				}

				if (image.width > options.maxWidth) {
					image.height = image.height * options.maxWidth / image.width;
					image.width  = options.maxWidth;
				}
				
				var ctx = canvas.getContext("2d");
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				
				canvas.width  = image.width;
				canvas.height = image.height;
				
				ctx.drawImage(image, 0, 0, image.width, image.height);

				callback(canvas.toDataURL());				
			};
			
			image.onload = onLoad;
			image.src    = src;
		}		
		
		var file = files[0];

		console.log('image', file);

		if(!file.type.match(/image.*/)) {
			console.log("The dropped file is not an image: ", file.type);
			return;
		}

		
		var reader = new FileReader();
		
		reader.onload = function(event) {
			resize(event.target.result, {maxWidth:250, maxHeight:200}, function(image) {
				self.onChange('image', image);
			});

		};
		reader.readAsDataURL(file);		

		
	},

	renderImage() {

		if (this.state.event.image) {
			return (
				<div style={{display:'table', width:'100%', height:'100%'}}>
					<div style={{display:'table-cell', verticalAlign:'middle', textAlign:'center', padding:'1em'}}>
						<img src={this.state.event.image} style={{}}/>
					</div>
				</div>
			);
		}
	},

	renderSaveButton() {
		return (
			<Button onClick={this.onSave} bsStyle='primary'>
				Spara
			</Button>
		);
		
	},

	renderDeleteButton() {
		if (this.state.event.id != undefined) {
			return (
				<Button onClick={this.onDelete} bsStyle='warning'>
					Radera
				</Button>
			);
			
		}
		
	},
	renderPage() {

		if (!this.state.ready) {
			return (
				<Row>
					<Col md={12}>
						<Spinner spinnerName='three-bounce' noFade/>
					</Col>
				</Row>
			);
		}
		
		var html = (
				<Grid >
					<h4>Nytt event</h4>
					<Row>
						<Col md={12}>
							<TextBox name='name' value={this.state.event.name} placeholder='Namn' onChange={this.onChange} />
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Panel style={{}}>
								<TextBox type='textarea' name='description' style={{height:'4em'}} value={this.state.event.description} placeholder='Beskrivning' onChange={this.onChange} />
							</Panel>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<TextBox name='price' label='Pris' value={this.state.event.price} onChange={this.onChange}/>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<TextBox name='location' label='Plats' value={this.state.event.location} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<TextBox name='when' label='Tid och datum' value={this.state.event.when} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<TextBox name='seats' label='Antal platser' value={this.state.event.seats} onChange={this.onChange}/>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<Panel header='Bild' style={{textAlign:'left'}}>
								<div style={{textAlign:'center'}}>
									<Dropzone ref='dropzone' onDrop={this.onDrop} multiple={false} style={{display:'inline-block', textAlign:'center', width:'100%', minHeight:'100px', borderRadius:'10px', border:'5px dashed rgb(220, 220, 220)'}}>
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
						<Col xs={12} sm={12} md={12}>
							<ButtonGroup>
								{this.renderSaveButton()}
								{this.renderDeleteButton()}
							</ButtonGroup>
						</Col>
					</Row>


				</Grid>
		);


		return html;
		
	},
	
	render() {
	

		return (
			<Page style={{}}>
				{this.renderPage()}
				
			</Page>
		);
	}
	

});



module.exports = App;