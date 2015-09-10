

import React from 'react';
import {Label, ListGroup, ListGroupItem, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';
import {ListView, ListViewItem} from '../../components/listview.js';


var ListGroupItemContent = React.createClass({

	render() {

		return (
			<div style={{display: 'inline-block'}}>
				<h6>
				<strong>
					{this.props.text}
				</strong>
				</h6>
				<div>
					HEHE
				</div>
			</div>
		);
	}

});

var ListGroupItemText = React.createClass({

	render() {

		return (
			<div style={{display: 'inline-block'}}>
				<h6 >
					{this.props.text}
				</h6>
				<div>
					HEJ
				</div>
			</div>
		);
	}

});

var ListGroupItemIcon = React.createClass({

	
	getDefaultProps() {
		return {
			image: require('./images/chevron-right.svg')
		}
	},

	render() {

		return (
	    	<div style={{display:'inline-block', float:'right'}}>
		    	<img style={{height:'2.75em'}} src={this.props.image}/>
	    	</div>
		);
	}

});
/*


var ListView = React.createClass({

	render() {

		return (
	    	<div className='list-group' style={{}}>
	    		{this.props.children}
	    	</div>
		);
	}
	
});


var ListViewItem = React.createClass({


	getDefaultProps() {
		return {
			href: '',
			glyphLeft: '',
			glyphRight: '',
			glyphSize: '1.5em'
			
		}
	},
	
	render() {
	
		self = this;
		
		var leftPart = function() {
		
			return (
					<div className={"glyphicon glyphicon-"+self.props.glyphLeft} style={{paddingRight:'1em', fontSize:self.props.glyphSize, display:'table-cell', verticalAlign:'middle'}}>
					</div>
			);
		}    
		
		var rightPart = function() {
			return (
					<div className={"glyphicon glyphicon-"+self.props.glyphRight} style={{paddingLeft:'1em', fontSize:self.props.glyphSize, display:'table-cell', verticalAlign:'middle'}}>
					</div>
			);
		}    
		
		var middlePart = function() {
			return (
		    		<div style={{width:'100%', display:'table-cell', verticalAlign:'middle'}}>
						{self.props.children}
		    		</div>
			);
		}
		
		var content = function() {
		
			if (self.props.glyphLeft != '' && self.props.glyphRight != '') {
				return (
			    	<div style={{display:'table'}}>
			    		{leftPart()}
			    		{middlePart()}
			    		{rightPart()}
			    	</div>
				);
			}

			if (self.props.glyphLeft != '') {
				return (
			    	<div style={{display:'table'}}>
			    		{leftPart()}
			    		{middlePart()}
			    	</div>
				);
			}

			if (self.props.glyphRight != '') {
				return (
			    	<div style={{display:'table'}}>
			    		{middlePart()}
			    		{rightPart()}
			    	</div>
				);
			}

			return (
		    	<div style={{display:'table'}}>
		    		{middlePart()}
		    	</div>
			);

		}

		if (this.props.href != '') {
			return (
			    <a className='list-group-item' href={this.props.href}>
			    	{content()}
			    </a>
			);
			
		}

		return (
		    <span className='list-group-item'>
		    	{content()}
		    </span>
		);
	}
	
});

*/

module.exports = React.createClass({

	getInitialState(){

		return {}
	},
	


	render() {

		return (
			<Grid>
				<ListView>
				    <ListViewItem title='Logga in' href='#/login' glyphRight='chevron-right'/>
				    <ListViewItem title='Användare' href='#/users' glyphRight='chevron-right'/>
				    <ListViewItem title='Events' href='#/events' glyphRight='chevron-right'/>
				    <ListViewItem title='Masonry' subtitle='Prova på en variant av Isotope' href='#/masonry' glyphRight='chevron-right'/>
				    <ListViewItem title='Material-UI' subtitle='Se ett exempel på hur Material-UI ser ut' href='#/material' glyphRight='chevron-right'/>


				</ListView>


			</Grid>

		);
	}

});


