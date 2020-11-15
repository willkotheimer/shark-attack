import React, { Component } from 'react';
import LiveStudent from './liveStudent';
import students from '../helpers/data/studentData';

class sharkTank extends Component {
  state = {
    liveStudents: []
  };

  componentDidMount() {
    students.livingStudents().then(resp => {
      console.warn(resp);
      this.setState({
        liveStudents: resp
      });
    });
    console.warn(this.state.liveStudents);
  }

  makeLiving = () => {
    console.warn('in make living');
    students.livingStudents().then(resp => {
      // console.warn(resp);
      this.setState({
        liveStudents: resp
      });
    });
  };

  makeStudents = () =>
    Object.values(this.state.liveStudents).map(student => (
      <LiveStudent
        lastName={student.lastName}
        firstName={student.firstName}
        image={student.image}
        key={student.firebaseKey}
      />
    ));

  render() {
    return (
      <>
        <h1>SharkTank</h1>
        <div className="sharkTank">
          {this.state.liveStudents && this.makeStudents()}
        </div>
      </>
    );
  }
}

export default sharkTank;
