import React, { Component } from 'react';
import LiveStudent from './liveStudent';

class sharkTank extends Component {
  makeStudents = () =>
    this.props.liveStudents.map(student => (
      <LiveStudent
        lastName={student.lastName}
        firstName={student.firstName}
        image={student.image}
        key={student.id}
      />
    ));

  render() {
    return (
      <>
        <h1>SharkTank</h1>
        <div className="sharkTank">{this.makeStudents()}</div>
      </>
    );
  }
}

export default sharkTank;
