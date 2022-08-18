import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <Header data-testid="my-action"></Header>
    );
  }
}

export default App;
