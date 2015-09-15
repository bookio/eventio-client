

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
module.exports.Spinner = require('react-spinkit');
/*
module.exports.Panel = React.createClass({

	render() {
	
		return (
			<Panel style={{background:'transparent'}}>
				{this.props.children}
			</Panel>
		);
		
	}
});
*/
module.exports.Page = React.createClass({

	render() {
	
		return (
			<div style={{}}>
				{this.props.children}
				</	div>
		);
		
	}
});


var CheckBox = module.exports.CheckBox = React.createClass({


	getDefaultProps() {
	
		return {
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, event.target.checked);
	},
	
	
	render() {
	
		return (
			<Input type='checkbox' disabled={this.props.disabled} checked={this.props.value}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});


var RadioButton = module.exports.RadioButton = React.createClass({


	getDefaultProps() {
	
		return {
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, this.props.option);
	},
	
	isChecked() {
		return this.props.value == this.props.option;
	},
	
	render() {
	
		return (
			<Input type='radio' name={this.props.name} disabled={this.props.disabled} checked={this.isChecked()}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});

var TextBox = module.exports.TextBox = React.createClass({

	getDefaultProps() {
	
		return {
			label: '',
			value: ''
		};
	},

	onChange(event) {
		this.props.onChange(this.props.name, event.target.value);
	},
	
	
	render() {
		return (
			<Input type='text' disabled={this.props.disabled} label={this.props.label} value={this.props.value} placeholder={this.props.placeholder} onChange={this.onChange}>
			</Input>
		);
		
	}
});





