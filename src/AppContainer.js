import React from 'react';
import { App } from './App.js';
import ReactDOM from 'react-dom';

export class AppContainer extends React.Component {
	constructor(props){
    	super(props);

	    this.state = { 
	      thisText: "Airbnb",
	      thatText: "People"
	    };
	    this.handleRefresh = this.handleRefresh.bind(this);
  	}

  	handleRefresh(e){
	    this.setState({thisText: e.target.value});
	    this.setState({thatText: e.target.value});
  	}

  	render(){
  		return <App thisText=this.state.thisText thatText=this.state.thatText />;
  	}
}