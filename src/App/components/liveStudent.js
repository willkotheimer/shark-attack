import React, { Component } from 'react';

class liveStudent extends Component {
  state = {};

  render() {
    const { lastName, firstName, image, key } = this.props;
    return (
      <div className="Student">
        <div className="card" id={key}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              {firstName} {lastName}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default liveStudent;
