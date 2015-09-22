import React from 'react';

import {Page, TextBox, RadioButton, CheckBox, Input, Row, Col, SplitButton, Button, MenuItem, Grid, Panel} from '../../components/ui.js'
import {sprintf} from '../../tools/tools.js';


var Model = require('../../tools/model.js');
var Dropzone = require('react-dropzone');
var Router = require("react-router");
var Promise = require('bluebird');


var Fetch = function(host, url) {
	
	var http = require('http');

	var headers = {};
	headers["Authorization"] = 'b17c6f64-4d1b-4b9e-9fd0-4cb95af3e76d';
	headers["Content-Type"] = 'application/json';
	headers["Accept"] = 'application/json';
	
	//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	var options = {
		host: 'localhost',
		port: 5000,
		path: '/users',
		header: headers
	};
	
	var callback = function(response) {
		var str = '';
	
		//another chunk of data has been recieved, so append it to `str`
		response.on('data', function (chunk) {
			str += chunk;
		});
	
		//the whole response has been recieved, so we just print it out here
		response.on('end', function () {
			console.log(str);
		});
	}
	
	http.request(options, callback).end();	
}
/*
	Module.request = function(method, url, data) {
	
		var beforeSend = function(xhr) {
			xhr.setRequestHeader("Authorization", Module.sessionID);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
		}
	
		console.log("Request %s/%s -> '%s'", method, url, data ? JSON.stringify(data) : '');
		
		var request = $.ajax({
			type: method,
			url: Module.baseURL + '/' + url,
			data: data ? JSON.stringify(data) : null,
			dataType: 'json',
			beforeSend: beforeSend
		});
	
		request.done(requestSucceeded);
		request.fail(requestFailed);
	
		return request;
	}	
}

*/
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

	getInitialState(){

		var state = {
			name: 'OLLE',
			allow_queue: true,
			open_at:null,
			close_at:null
		};
		return state;
	},
	
	onChange(name, value) {

		//console.log(name, value);
		var state = {};
		state[name] = value;
		this.setState(state);
		console.log(this.state);
	},
	
	
	onSave() {
	/*
		console.log(this.state);
		
		var event = {};
		
		event.name = this.refs.name.value(); //state.name;	
		alert(event.name);
		var request = Model.Events.save(event);
		
		request.done(function(event) {
			window.history.back();
		});
		*/
		Fetch();
		/*	
		var headers = {};
		headers["Authorization"] = 'b17c6f64-4d1b-4b9e-9fd0-4cb95af3e76d';
		headers["Content-Type"] = 'application/json';
		headers["Accept"] = 'application/json';


		var options = {};
		options.method = 'GET';
		options.headers = headers;

		var request = Fetch('http://localhost:5000/users');
		
		request.then(function(result) {
			console.log(result);
		});
		*/

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

/*
							<TextBoxEx ref='name' value={this.state.name} placeholder='Namn' onChange={this.onChange} />
*/		
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