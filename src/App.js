import React, { Component } from 'react';
import './App.css';
import About from './About';
import Projects from './Projects';
import More from './More';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/more" exact component={More} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
