import React, { Component } from 'react';

export default class graveStone extends Component {
  state = {};

  render() {
    const { lastName, firstName } = this.props;
    return (
      <div className="Student">
        <div className="graveStone">
          <span className="name">
            {firstName} {lastName}
          </span>
        </div>
      </div>
    );
  }
}
