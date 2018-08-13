import React from 'react';
import './App.css';

export class Refresh extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const thisRandom = Math.floor(Math.random() * 16);
		const thatRandom = Math.floor(Math.random() * 16);

		this.props.handleRefresh(thisRandom, thatRandom);
	}

	render(){
  		return (
  			<button className="Refresh" onClick={this.handleClick}>
  				Refresh
  			</button>
  		);
  	}
}