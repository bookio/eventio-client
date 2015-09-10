/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;


import {AppBar, List, ListItem, Checkbox, ToggleStar, ToggleStarBorder} from 'material-ui';

let Main = React.createClass({

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
      accent1Color: Colors.deepOrange500,
    });
  },


  render() {

    let containerStyle = {
      textAlign: 'center',
      //paddingTop: '200px',
    };

    let standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Super Secret Password"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        
        <div style={{textAlign:'left'}}>
			<Checkbox
			  name="checkboxName1"
			  value="checkboxValue1"
			  label="went for a run today"/>
			
			<Checkbox
			  name="checkboxName2"
			  value="checkboxValue2"
			  label="fed the dog"
			  defaultChecked={true}/>
			
			<Checkbox
			  name="checkboxName3"
			  value="checkboxValue3"
			  label="built a house on the moon"
			  disabled={true}/>
  </div>

      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },

});

module.exports = Main;
