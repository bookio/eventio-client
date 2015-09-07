var React = require('react');

var Bootstrap = require('react-bootstrap');
var ui = Bootstrap;

var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Input = Bootstrap.Input;

var React = require('react');


require('./isotope.less');




var Isotope = React.createClass({

	getInitialState() {
		return {

		};
	},

	// Just to show it's possible to manipulate DOM with JQuery inside React
	componentDidMount() {
		var self = this;

		$('.grid').isotope({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
	},

	render() {
		var style = {
			position: 'relative'
			
		}
		return (
            <div className="Isotope">
				<div className="grid" style={style}>
					{this.props.children}
				</div>
            </div>
		);
	}
});

var IsotopeItem = React.createClass({

	propTypes: {
		style: React.PropTypes.object
	},

	getDefaultProps() {
		return {
			style: {
			}
		};
	},
	
	getInitialState() {
		return {
			width: '50%',
			height: '50%',
			overflow: 'auto',
			margin: 'auto',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right:0		

		};
	},

	render() {
	
		var itemStyle = {
			border: '1px solid black',
			minWidth: '10px',	
			minHeight: '10px',
			width: '50%',
			background: 'rgb(240, 240, 240)',
			padding: '1em 1em 1em 1em'	,
			overflow:'hidden'
			
		};
		return (
			<div className="grid-item" style={itemStyle}>
				<div style={this.props.style}>
					{this.props.children}
				</div>
			</div>
		);		
	}
});


module.exports = React.createClass({

	getInitialState() {
		return {

		};
	},



	render() {
		return (
            <div >
                <h1>Hello {this.props.name}</h1>
                <p>This is rendered with a React JSX Component! yeah2</p>
				<Isotope>
					<IsotopeItem>
						<Button>Hej</Button>
					</IsotopeItem>
					<IsotopeItem>
						<img src={require('./images/wine.jpg')}/>
					</IsotopeItem>
					<IsotopeItem>
						<img src={require('./images/beer.jpg')}/>
					</IsotopeItem>
				</Isotope>
            </div>

		);
	}
});
