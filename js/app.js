import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//require('../css/bootswatch/paper.css');

var ui = require('react-bootstrap');

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
		  <ui.Navbar  brand='eventio.com' toggleNavKey={0} style={{borderRadius:'0px'}}>
		  
		    <ui.CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
		      <ui.Nav navbar right>
		        <ui.NavItem eventKey={1} href='#/home'>Nyheter</ui.NavItem>
		        <ui.NavItem eventKey={2} href='#/test'>Nytt event</ui.NavItem>
		        <ui.NavItem eventKey={2} href='#/login'>Kommande events</ui.NavItem>
		      </ui.Nav>
		    </ui.CollapsibleNav>
		  </ui.Navbar>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/home/home.js')} />  
  	
    <Route name="login" path="/login" handler={require('./pages/login/login.js')}/>
    <Route name="test"  path="/test"  handler={require('./pages/test/test.js')}/>
    <Route name="home"  path="/home"  handler={require('./pages/home/home.js')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});