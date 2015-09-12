

import React, {PropTypes} from 'react';

import {Glyphicon, Panel, Modal, Label, Well, Tabs, Tab, SplitButton, DropdownButton, MenuItem, Jumbotron, Grid, Row, Col, Button, ButtonGroup, ButtonToolbar, Input, Thumbnail} from 'react-bootstrap';

//var sprintf = require('../../tools/sprintf.js');
import {sprintf} from '../../tools/tools.js';
//import {Spinner} from '../../components/spinner.js';
var Spinner = require('react-spinkit');


var LoginButton = React.createClass({


	getDefaultProps() {
	
		function onClick() {
			alert(1);
		}
		
		return {
			onClick: onClick
		}
	},
		

	getInitialState() {
		return {disabled:false};
	},
	
	render() {
	
		var glyphStyle = {
			fontSize:'3em',
			boxShadow:'none',
			display:'table-cell',
			verticalAlign: 'middle',
			textAlign: 'right'
		};
	
		return (
				<Button  style={{border:'none', boxShadow:'none', borderRadius:'0px'}}>	
					<Glyphicon  glyph='play-circle'  style={glyphStyle}/>
				</Button>
		);
		
	}
});

var ComboBox = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			name: '',
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.name] = event.target.value;
		this.props.controller.setState(state);	
	},
	
	
	render() {
	
		return (
		   <DropdownButton title="Dropdown">
		      <MenuItem href="#books">Books</MenuItem>
		      <MenuItem href="#podcasts">Podcasts</MenuItem>
		      <MenuItem href="#">Tech I Like</MenuItem>
		      <MenuItem href="#">About me</MenuItem>
		      <MenuItem href="#addBlog">Add a Blog</MenuItem>
		    </DropdownButton>		);
		
	}


});

var TextBox = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			name: '',
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.name] = event.target.value;
		this.props.controller.setState(state);	
	},
	
	
	render() {
	
		return (
			<Input type='text' value={this.props.controller.state[this.props.name]} placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});


var Checkbox = React.createClass({


	getDefaultProps() {
	
		return {
			controller: undefined,
			name: '',
			placeholder: '',
			help: '',
			label: ''
		};
	},

	onChange(event) {
		var state = {};
		state[this.props.name] = event.target.checked;
		this.props.controller.setState(state);	
	},
	
	isChecked() {
		return this.props.controller.state[this.props.name];		
	},
	
	render() {
	
		return (
			<Input type='checkbox' checked={this.isChecked()}  placeholder={this.props.placeholder} label={this.props.label} help={this.props.help} hasFeedback onChange={this.onChange} />
		);
		
	}
});


var RadioButton = React.createClass({


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






module.exports = React.createClass({

	
	propTypes: {
		username : React.PropTypes.string,
		password : React.PropTypes.string
	},

	loadState() {
		
	},
	saveState() {
		
	},

	getInitialState() {

		var state = {};

		state.username = sprintf('foo@bar.se');

		if (localStorage.loginPage) {
			state = JSON.parse(localStorage.loginPage);
		}
		state.password = '';
		state.spinning = true;
		state.foo = 'MEG';
		state.option = 0;

		return state;
	},

	componentWillMount() {
	},
	
	componentDidUpdate(prevProps, prevState) {
		localStorage.loginPage = JSON.stringify({
			username: this.state.username
		});
	},
	
	onChange(name, event) {
	
		if (event == undefined)
			return this.onChange.bind(this, name);
		
		switch (name) {

			case 'username': {
				this.setState({username: event.target.value});
				break;
			}
			case 'password': {
				this.setState({password: event.target.value});
				break;
			}
			case 'spinning': {
				this.setState({spinning: event.target.checked});
				break;
			}
		}
	},
	
	onRadioChange(name, value, event) {
	
		if (event == undefined)
			return this.onRadioChange.bind(this, name, value);
		
		var state = {};
		state[name] = value;
		this.setState(state);		
	},
	


	onClick() {
		console.log(this.state);
	},
	
	onChangePassword(event) {

		this.setState({password: event.target.value});
	},

	onChangeUsername(event) {

		this.setState({username: event.target.value});
	},
	
	login() {

	},

	render() {

		var self = this;

		var glyphStyle = {
			fontSize:'3em'
		};
		
		if (this.state.spinning) {
			glyphStyle.opacity = '0.5';
		}
		else {
			glyphStyle.cursor = 'pointer';
		}
		
		return (
			
			<Grid style={{maxWidth:'25em'}}>
				<Row>
					<ComboBox/>
				</Row>
				<Row>
				
    <DropdownButton title='Dropdown' id='bg-nested-dropdown'>
      <MenuItem eventKey='1'>Dropdown link</MenuItem>
      <MenuItem eventKey='2'>Dropdown link</MenuItem>
    </DropdownButton>				
				</Row>
				
				<Row>
					<TextBox label='Användarnamn' controller = {this} name='username'/>
				</Row>
				<Row>
					<TextBox label='Lösenord' controller = {this} name='password'/>
				</Row>
				<Row>
					<RadioButton controller={this} name='kalle' field='option' value={0} label='Option-1'/>
					<RadioButton controller={this} name='kalle' field='option' value={1} label='Option-2'/>
					<RadioButton controller={this} disabled={this.state.option==0} name='kalle' field='option' value={2} label='Option-3'/>
				</Row>
				
				<Row>
					<Checkbox controller={this} label='Cjeckbox'>
					</Checkbox>
				</Row>
				
				<Row>
						<Input type='text' value={this.state.username} placeholder='Användarnamn' label='' help='' hasFeedback ref='input' onChange={this.onChange('username')} />
				</Row>
				<Row>
					<Input type='text' value={this.state.password} placeholder='Lösenord' label='' help='' hasFeedback ref='input' onChange={this.onChange('password')} />
				</Row>
				
				<Row>
					<Input type='checkbox' value={this.state.spinning} placeholder='Lösenord' label='Checkbox' help='' hasFeedback ref='input' onChange={this.onChange('spinning')} />
				</Row>

				<Row>
					<Input type='radio' name = 'foo' checked={this.state.option == 0} Xvalue={this.state.option} label='Option 1' help='' onChange={this.onRadioChange('option', 0)} />
					<Input type='radio' name = 'foo' checked={this.state.option == 1} Xvalue={this.state.option} label='Option 2' help='' onChange={this.onRadioChange('option', 1)} />
					<Input type='radio' name = 'foo' checked={this.state.option == 2} Xvalue={this.state.option} label='Option 3' help='' onChange={this.onRadioChange('option', 2)} />
				</Row>

				<Button onClick={this.onClick}>
					HEJ
				</Button>
				
				
			</Grid>
		);

	}

});



