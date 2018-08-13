import React, { Component } from 'react';
import './App.css';
import { Display } from './Display.js';
import { Refresh } from './Refresh.js';
// import Express from 'express';
// import bodyParser from 'body-parser';
//import ReactDOM from 'react-dom';

// var app = Express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


// var server = app.listen(3000, function(){
//   console.log("App running on port.", server.address().port);
// });

// var appRouter = function(app) {
//   app.get("/", function(req, res){
//     res.status(200).send("GET Request is received.");
//   })
// }

const thisOptions = ["Google Analytics", "Node.js Server", "TBH App", "Slack", "Online Marketplace", "Wikipedia", "Pintrest", "Playboy", "HQ Trivia", "Amber Alert System", "Reddit", "Social CRM", "OpenTable", "Zappos", "1-800-FLOWERS", "Deal Finder", "Collaborative Filter"]
const thatOptions = ["The Homeless", "Pilots", "Cheap Vodka", "Billionaires", "Alcoholics", "Ugg Boots", "Pounding Jaeger Bombs", "Social Outcasts", "High-End Pronography", "Nightclub Lines", "Traveling", "Camp Counselors", "Qualifying Leads", "Ex-Convicts", "Your Mom", "Baristas", "Middle Schoolers"];

class App extends Component {
  constructor(props){
    super(props);

    const firstThisRandom = Math.floor(Math.random() * 16);
    const firstThatRandom = Math.floor(Math.random() * 16);

    this.state = { 
      thisText: thisOptions[firstThisRandom],
      thatText: thatOptions[firstThatRandom]
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(n1, n2){
    this.setState({thisText: thisOptions[n1]});
    this.setState({thatText: thatOptions[n2]});
  }

  render(){
    return (
      <div className="App">
        <Display thisText={this.state.thisText} thatText={this.state.thatText} />
        <Refresh handleRefresh={this.handleRefresh} />
      </div>
    );
  }
}

export default App;
