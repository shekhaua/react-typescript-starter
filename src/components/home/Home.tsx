import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import logo from './logo.svg';

class HomeComponent extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>and save to reload.
        </p>
        <Link to="/mock" className="App-link">
          Mock Data
        </Link>
      </header>
    );
  }
}

export default HomeComponent;
