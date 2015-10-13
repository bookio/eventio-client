import React from 'react';
import {Page, TextBox, RadioButton, CheckBox, Input, Row, Col, Spinner, SplitButton, Button, ButtonGroup, MenuItem, Grid, Panel} from '../../components/ui.js'

var moment = require('moment');

var Selectable = require('../../components/selectable.js');
 
 

var x = require('./test.less');


var CalendarEntry = React.createClass({
  
  
	getDefaultProps() {
		date: new Date()
	},
  
	render: function () {


		return (
			<div style={{display:'table', height:'100%', width:'100%'}}>
				<div style={{display:'table-cell', verticalAlign:'middle', width:'50%', textAlign:'right', paddingLeft:'0.5em', paddingRight:'0.25em'}}>
					<label style={{display:'block', fontSize:'180%', margin:'0'}}>{moment(this.props.date).format('D')}</label>
				</div>
				<div style={{display:'table-cell', verticalAlign:'middle', width:'50%', textAlign:'left', paddingRight:'0.5em', paddingLeft:'0.25em'}}>
					<label style={{display:'block', margin:'0', fontSize:'75%', lineHeight:'150%'}}>
						{moment(this.props.date).format('ddd')}
						<br/>
						{moment(this.props.date).format('MMM')}
					</label>
				</div>
			</div>
		);
	}

});

var CalendarTimeline = React.createClass({
  
  
	getDefaultProps() {
		return {
			dates: []
		}
	},
  
	render: function () {

		var date = moment(new Date());
		var dates = [];
		
		for (var i = 0; i < 10; i++) {
			dates.push(date.clone().toDate());
			date.add(1, 'days');	
			console.log(date.toString());
		}

        var children = dates.map(function(date, index) {

			var style = {};
			
			style.borderLeft = index > 0 ? '1px solid' : '1px solid transparent';
			style.overflow = 'hidden';
			
			return (
           		<td style={style}>
	           		<CalendarEntry key={index} date={date}/>
		   		</td>
            );
        });		
        
        return (
        	<div style={{display:'table', textAlign:'center', width:'100%', height:'4em'}}>
        		<table style={{tableLayout:'fixed', outline:'1px solid red', width:'100%'}}>
                	<tr>
						{children}
                	</tr>
				</table>
            </div>
        );
        
	}

});


module.exports = React.createClass({
  
  
	render: function () {

		return (
			<div className='calendar'>
				<Grid >
					<Row>
						<Col>
							<CalendarTimeline/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});
 
 
