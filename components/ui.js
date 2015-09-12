

import React, {PropTypes} from 'react';

import {Glyphicon, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, DropdownButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

import {sprintf} from '../tools/tools.js';
var Spinner = require('react-spinkit');


module.exports.Spinner = require('react-spinkit');
module.exports.SplitButton = SplitButton;
module.exports.Input = Input;
module.exports.MenuItem = MenuItem;
module.exports.Button = Button;
module.exports.Grid = Grid;
module.exports.Panel = Panel;
module.exports.Button = Button;
module.exports.ButtonGroup = ButtonGroup;
module.exports.Row = Row;
module.exports.Col = Col;


module.exports.Panel = React.createClass({

	render() {
	
		return (
			<Panel style={{background:'transparent'}}>
				{this.props.children}
			</Panel>
		);
		
	}
});

module.exports.Page = React.createClass({

	render() {
	
		return (
			<div style={{padding:'2em', background:'transparent'}}>
				{this.props.children}
			</div>
		);
		
	}
});

module.exports.TextBox = React.createClass({

	getDefaultProps() {
	
		return {
			controller: undefined,
			stateKey: '',
			placeholder: '',
			help: '',
			label: '',
			disabled: false
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.stateKey] = event.target.value;
		this.props.controller.setState(state);	
	},
	
	
	render() {
	
		return (
			<Input type='text' disabled={this.props.disabled} value={this.props.controller.state[this.props.stateKey]} placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});




module.exports.Checkbox = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			stateKey: '',
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.stateKey] = event.target.checked;
		this.props.controller.setState(state);	
	},
	
	isChecked() {
		return this.props.controller.state[this.props.stateKey];		
	},
	
	render() {
	
		return (
			<Input type='checkbox' checked={this.isChecked()}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});



module.exports.RadioButton = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			name: '',
			field: '',
			help: '',
			label: '',
			value: '',
			disabled: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.field] = this.props.value;
		this.props.controller.setState(state);	
	},
	
	isChecked() {
		return this.props.controller.state[this.props.field] == this.props.value
	},
	
	render() {
	
		return (
			<Input name={this.props.name} type='radio' disabled={this.props.disabled} checked={this.isChecked()}  label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});



