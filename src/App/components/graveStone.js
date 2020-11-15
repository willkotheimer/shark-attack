import React, { Component } from 'react';

export default class graveStone extends Component {
  state = {};

  render() {
    const { deadStudent } = this.props;
    return <div className="Student">{deadStudent.name}</div>;
  }
}
