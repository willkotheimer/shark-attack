import React, { Component } from 'react';
import GraveStone from './graveStone';

class GraveYard extends Component {
  makeDeadStudents = () =>
    this.props.deadStudents.map(deadStudent => (
      <GraveStone
        lastName={deadStudent.lastName}
        firstName={deadStudent.firstName}
        image={deadStudent.image}
        key={deadStudent.id}
      />
    ));

  render() {
    return (
      <>
        <h1>Grave Yard</h1>
        <div className="graveYard">
          <div>{this.makeDeadStudents()}</div>
        </div>
      </>
    );
  }
}

export default GraveYard;
