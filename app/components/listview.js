

import React from 'react';
import {Label, ListGroup, ListGroupItem, Panel, ButtonGroup, Glyphicon, Input, Jumbotron, Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';




module.exports.ListView = React.createClass({

	render() {

		return (
	    	<div className='list-group' style={{}}>
	    		{this.props.children}
	    	</div>
		);
	}
	
});


module.exports.ListViewItem = React.createClass({


	getDefaultProps() {
		return {
			href: '',
			glyphLeft: '',
			glyphRight: '',
			glyphSize: '1.5em',
			title: '',
			subtitle: ''
			
		}
	},
	
	render() {
	
		self = this;
		

		var leftPart = function() {

			if (self.props.glyphLeft != '') {
				return (
						<div className={"glyphicon glyphicon-"+self.props.glyphLeft} style={{paddingRight:'1em', fontSize:self.props.glyphSize, display:'table-cell', verticalAlign:'middle'}}>
						</div>
				);
				
			}
		}    
		
		var rightPart = function() {
			if (self.props.glyphRight != '') {
				return (
						<div className={"glyphicon glyphicon-"+self.props.glyphRight} style={{paddingLeft:'1em', fontSize:self.props.glyphSize, display:'table-cell', verticalAlign:'middle'}}>
						</div>
				);
					
			}
		}
		
		var middlePart = function() {

			var titlePart = function() {
				if (self.props.title != '') {
					return (
						<h6>
							<strong>
								{self.props.title}
							</strong>
						</h6>
					);				
				}
			}		
			
			var subtitlePart = function() {
				if (self.props.subtitle != '') {
					return (
						<p>{self.props.subtitle}</p>
					);				
				}
			}
	
			return (
		    		<div style={{width:'100%', display:'table-cell', verticalAlign:'middle'}}>
						{titlePart()}
						{subtitlePart()}
						{self.props.children}
		    		</div>
			);
		}
		
		var content = function() {

			return (
		    	<div style={{display:'table'}}>
		    		{leftPart()}
		    		{middlePart()}
		    		{rightPart()}
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

