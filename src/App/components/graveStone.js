import React, { Component } from 'react';

export default class graveStone extends Component {
  state = {};

  render() {
    const { lastName, firstName } = this.props;
    return (
      <div className="Student">
        <div className="graveStone">
          {firstName} {lastName}
        </div>
      </div>
    );
  }
}
