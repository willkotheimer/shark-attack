import React, { Component } from 'react';
import GraveStone from './graveStone';
import students from '../helpers/data/studentData';

class GraveYard extends Component {
  state = {
    deadStudents: []
  };

  componentDidMount() {
    students.dearlyBeloved().then(resp => {
      console.warn(resp);
      this.setState({
        deadStudents: resp
      });
    });
    console.warn(this.state.deadStudents);
  }

  makeLiving = () => {
    students.dearlyBeloved().then(resp => {
      this.setState({
        deadStudents: resp
      });
    });
  };

  makeDeadStudents = () =>
    Object.values(this.state.deadStudents).map(deadStudent => (
      <GraveStone
        lastName={deadStudent.lastName}
        firstName={deadStudent.firstName}
        image={deadStudent.image}
        key={deadStudent.firebaseKey}
      />
    ));

  render() {
    return (
      <>
        <h1>Grave Yard</h1>
        <div>{this.state.deadStudents && this.makeDeadStudents()}</div>
      </>
    );
  }
}

export default GraveYard;
