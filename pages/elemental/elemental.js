import React from 'react';
import {Checkbox, List, ListItem, Styles} from 'material-ui';

module.exports = React.createClass({

	onChange() {
		
	},
	
	componentWillMount() {
		var injectTapEventPlugin = require('react-tap-event-plugin');
		injectTapEventPlugin();
		
		var mui = require('material-ui');
		var ThemeManager = new mui.Styles.ThemeManager();
		var Colors = mui.Styles.Colors;
		
	
		ThemeManager.setPalette({
			accent1Color: Styles.Colors.blue300,
		});
	},	
	render() {
		return (
			<div>
				<List>
					<ListItem primaryText="Hello">
					</ListItem>
				</List>
			</div>
		);
	}
});

