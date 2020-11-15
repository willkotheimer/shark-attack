import React from 'react';
import './App.scss';
import Graveyard from './components/graveYard';
import SharkTank from './components/sharkTank';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank />
        <Graveyard />
      </div>
    );
  }
}
