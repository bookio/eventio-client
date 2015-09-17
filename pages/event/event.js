import React from 'react';

import {Page, TextBox, RadioButton, CheckBox, Input, Row, Col, SplitButton, Button, MenuItem, Grid, Panel} from '../../components/ui.js'
import {sprintf} from '../../tools/tools.js';
var Dropzone = require('react-dropzone');



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
			resize(event.target.result, {maxWidth:100, maxHeight:100}, function(image) {
				self.setState({image:image});
			});

		};
		reader.readAsDataURL(file);		

		
	},

	renderImage() {

		console.log(this.state.image);
		if (this.state.image) {
			return (
				<div style={{display:'table', width:'100%', height:'100%'}}>
					<div style={{display:'table-cell', verticalAlign:'middle', textAlign:'center', padding:'1em'}}>
						<img src={this.state.image} style={{maxHeight:'200px'}}/>
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
				<Clickable>
			<Page style={{}}>
				{html}
				
			</Page>
				</Clickable>
		);
	}
	

});



module.exports = App;