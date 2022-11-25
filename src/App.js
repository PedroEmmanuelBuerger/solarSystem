import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem className="Planetas" />
        <Missions />
      </div>
    );
  }
}

export default App;
