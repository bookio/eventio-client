/*


*/

var React = require('react');

var Bootstrap = require('react-bootstrap');
var SectionHeader = require('../../components/SectionHeader.js');
var ui = Bootstrap;

//var RaisedButton = Material.RaisedButton;
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var ButtonToolbar = Bootstrap.ButtonToolbar;
var Input = Bootstrap.Input;
var Well = Bootstrap.Well;
var Panel = Bootstrap.Panel;
var Tabs = Bootstrap.Tabs;
var Tab = Bootstrap.Tab;
var Modal = Bootstrap.Modal;
var Popover = Bootstrap.Popover;
var Tooltip = Bootstrap.Tooltip;
var OverlayTrigger = Bootstrap.OverlayTrigger;
var SplitButton = Bootstrap.SplitButton;
var MenuItem = Bootstrap.MenuItem;
var Label = Bootstrap.Label;

//import Button from 'react-bootstrap/lib/Button';

require('./event.less');



const Example = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  render() {
    let popover = <Popover title='popover'>very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
        <Button
          bsStyle='primary'
          bsSize='medium'
          onClick={this.open}>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

        </Button>

    );
  }
});


var TabPrice = React.createClass({

	getInitialState() {
		return {
			value: 1
		}
	},
	
	render() {
		return (
			<div style={{minHeight:'20em'}}>
				<Grid style={{textAlign: 'left'}}>
					
					<Row>
						<Input type='text' value={this.state.value} placeholder='Namn' label='&nsp' help='Ange namnet på ditt event' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
				</Grid>
			</div>
		);
	}
});


var Separator = React.createClass({

	render() {
		var rowStyle = {
			background: 'red',
			padding: '1em',
			paddingLeft: '2em',
			//borderRadius: '2em',			
			textAlign: 'left',
			fontSize: '120%'
		};
		
		return (
			<Row style={{rowStyle}}>
				<h5 style={{fontSize:'120%'}}>{this.props.caption}</h5>
			</Row>
		);
	}

});
var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage

		var favorites = [];

		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}

		// Nobody would get mad if we center it on Paris by default

		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},
	

	render() {

	
		var btnSize = 'large';
		
		var gridStyle = {
			//border: '1px solid yellow',
			cornerRadius: '8px',
			textAlign: 'left'			
		};

		var rowStyle = {
			
		};
		
		function clickPrice() {
			React.render(<Example/>, document.getElementById('modal'));
		}
		
		var html = (
			<div className='event-page'>
			
				<div id="modal">
				</div>
				<Grid>
					<Row>
					<h1>Nytt event</h1>
					</Row>
					<Row>
						<Input type='text' value={this.state.value} placeholder='Namn' label='' help='Ange namnet på ditt event' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
					<Row>
							<Input type='textarea' value={this.state.value} placeholder='Beskrivning' label='' help='Beskriv vad eventet handlar om' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
	
					<Row>
						<Input type='text' value={this.state.value} placeholder='Taggar' label='' help='Exempel #tasting #excursion #seminar' hasFeedback ref='input' onChange={this.handleChange} />
					</Row>
	
					<Row>
						<Panel header='Öppen för reservation'>
							<Grid style = {gridStyle}>
								<Row style = {rowStyle} >
									<Input type='radio' value={this.state.value} label='Nu' hasFeedback ref='input' onChange={this.handleChange} />
								</Row>
								<Row>
									<Grid>
									<Row>
										<Input type='radio' value={this.state.value} label='Inte förrän' hasFeedback ref='input' onChange={this.handleChange} />
									</Row>
									<Row>
										<div style={{width: '90%'}}>
											<Input type='text' value={this.state.value} placeholder='Ange datum' label='' />
										</div>
									</Row>
									</Grid>
								</Row>
								<Row>
								</Row>
							</Grid>
						</Panel>
					</Row>


					<Row>
						<Panel header='Stäng för reservation'>
							<Grid style = {gridStyle}>
								<Row style = {rowStyle} >
									<Grid>
									<Row>
										<Col md={8}>
									<Input type='radio' value={this.state.value} label='När eventet startas' hasFeedback ref='input' onChange={this.handleChange} />
										</Col>
									</Row>
									</Grid>
								</Row>
								<Row>
									<Grid>
										<Row>
											<Col md={2}>
												<Input type='radio' value={this.state.value} label='Tillåt bokningar' hasFeedback ref='input' onChange={this.handleChange} />
											</Col>
											<Col md={6}>
												<SplitButton title='6 timmar innan' pullRight id='split-button-pull-right'>
													<MenuItem eventKey='1'>En timme innan</MenuItem>
													<MenuItem eventKey='2'>En dag innan</MenuItem>
													<MenuItem eventKey='3'>En vecka </MenuItem>
												</SplitButton>	
											</Col>
										</Row>
									</Grid>
								</Row>
							</Grid>
						</Panel>
					</Row>

					<Row>
						<Panel header="Kösystem">
							<Input type='checkbox' value={this.state.value} help='Om eventet är fullt placeras nya bokningar i kö. Deltagarna meddelas via SMS eller mail.	' label='Tillåt kö' hasFeedback ref='input' onChange={this.handleChange} />
						</Panel>
  					</Row>

					<Row style={{textAlign:'center'}}>
						<ButtonGroup>
							<Button onClick={clickPrice} bsSize={'medium'} style={{minWidth: '100px'}}>Pris</Button>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Plats</Button>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Datum och tid</Button>
							<Button bsSize={'medium'} style={{minWidth: '100px'}}>Platser</Button>
						</ButtonGroup>				
					</Row>
					
					<Row style={{textAlign:'center'}}>
						<p/>
						<Button bsStyle='success' style={{minWidth: '100px'}} >Skapa nytt event</Button>
						<p/>
						
					</Row>
	
				</Grid>
			</div>
		);

		return html;
	}

});


/*	

					<Row>
						<div className="tabs">
							<Tabs style={{textAlign:'center'}} bsStyle='pills' defaultActiveKey={1} animation={false}>
								<Tab eventKey={1} title='Pris'>
									<TabPrice>
									</TabPrice>
								</Tab>
								<Tab eventKey={2} title='Plats'>Tab 2 content</Tab>
								<Tab eventKey={3} title='Datum och tid'>Tab 3 content</Tab>
								<Tab eventKey={4} title='Platser'>Tab 3 content</Tab>
							</Tabs>
						</div>
  					</Row>
*/	


module.exports = App;