/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;


import { AppBar, Slider, ListNested, List, ListItem, Checkbox, ToggleStar, ToggleStarBorder, RadioButton, RadioButtonGroup} from 'material-ui';

module.exports = React.createClass({
	
	childContextTypes: {
		muiTheme: React.PropTypes.object,
	},
	
	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme(),
		};
	},
	
	componentWillMount() {
		let injectTapEventPlugin = require('react-tap-event-plugin');
		injectTapEventPlugin();
		ThemeManager.setPalette({
			accent1Color: Colors.blue300,
		});
	},
	
	onChange(event) {
		var target = event.target; 
		console.log('button changed', target);
	},
	render() {
	
		var checkbox = <RadioButton/>;
		
		return (
			<div>
				<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
  			
				<List>
					<ListItem primaryText = "Hello" secondaryText="Detta är ett test">
						<Checkbox>HEJ</Checkbox>
					</ListItem>
					
					<ListItem primaryText = "Hello">
						<Checkbox>HEJ</Checkbox>
					</ListItem>
					
					<ListItem primaryText = "Hello" leftCheckbox={checkbox} rightToggle={checkbox}>
						
						<Slider name="slider2" defaultValue={0.5} step={0.10} />
					</ListItem>
				</List>

						<Slider name="slider2" defaultValue={0.5} step={0.10} />
						<span><Checkbox></Checkbox>HEJ</span>
						<RadioButtonGroup name="foo" labelPosition='left' onChange={this.onChange}>
							<RadioButton>Egelberg</RadioButton>
							<RadioButton>Magnus</RadioButton>
						</RadioButtonGroup>
			</div>
		);
	},
	
	_handleTouchTap() {
	//this.refs.superSecretPasswordDialog.show();
	},

});

