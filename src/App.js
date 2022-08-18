import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header data-testid="my-action"></Header>
        <SolarSystem></SolarSystem>
      </main>
    );
  }
}

export default App;
