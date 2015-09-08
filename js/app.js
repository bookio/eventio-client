import React from 'react';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Navbar,  CollapsibleNav, NavItem, Nav} from 'react-bootstrap';

var Router = require('react-router'); //import {Router, DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
		  <Navbar  brand='eventio.com' toggleNavKey={0} style={{borderRadius:'0px'}}>
		  
		    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
		      <Nav navbar right>
		        <NavItem eventKey={1} href='#/home'>Nyheter</NavItem>
		        <NavItem eventKey={2} href='#/event'>Nytt event</NavItem>
		        <NavItem eventKey={3} href='#/events'>Kommande events</NavItem>
		        <NavItem eventKey={4} href='#/isotope'>Isotope</NavItem>
		        <NavItem eventKey={5} href='#/login'>Log in</NavItem>
		      </Nav>
		    </CollapsibleNav>
		  </Navbar>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/login/login.js')} />  
  	
    <Route name="events"   path="/events"   handler={require('./pages/events/events.js')}/>
    <Route name="event"    path="/event"    handler={require('./pages/event/event.js')}/>
    <Route name="home"     path="/home"     handler={require('./pages/home/home.js')}/>
    <Route name="isotope"  path="/isotope"  handler={require('./pages/isotope/isotope.js')}/>
    <Route name="login"    path="/login"    handler={require('./pages/login/login.js')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
	React.render(<Handler/>, document.body);
});