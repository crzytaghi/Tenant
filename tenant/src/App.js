import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css'
// BrowserRouter handlers the ability to route
// Switch allows you to specify exactly where you want to route a component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    username:'Kyle'
  }

  render = () => {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Nav />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
