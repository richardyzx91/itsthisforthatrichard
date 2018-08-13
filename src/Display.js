import React from 'react';
import './App.css';

export const Display = (props) => (
	<div>
      <header className="App-header">
        <h1 className="App-title">So wait, what does your app do?</h1>
      </header>
      <p className="Intro">It's like</p>
      <p className="This">{props.thisText}</p> 
      <p className="For">for</p>
      <p className="That">{props.thatText}!</p>
    </div>
);