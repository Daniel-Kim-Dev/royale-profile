import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import PlayerProfile from './PlayerProfile/PlayerProfile';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/player/:playerTag" component={PlayerProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;