import React, { Component } from 'react';
import './App.scss';
import Graveyard from './components/graveYard';
import SharkTank from './components/sharkTank';
import students from './helpers/data/studentData';

export default class App extends React.Component {
  state = {
    liveStudents: [],
    deadStudents: []
  };

  componentDidMount() {
    this.setState({
      liveStudents: students.livingStudents(),
      deadStudents: students.dearlyBeloved()
    });
  }

  sharkAttack = () => {
    students.followTheLight();
    this.setState({
      liveStudents: students.livingStudents(),
      deadStudents: students.dearlyBeloved()
    });
  };

  render() {
    return (
      <div className="App">
        <button className="btn btn-warning" onClick={this.sharkAttack}>
          Shark Attack
        </button>
        <SharkTank liveStudents={this.state.liveStudents} />
        <Graveyard deadStudents={this.state.deadStudents} />
      </div>
    );
  }
}
