import React, { Component } from 'react';

class SingleObject extends Component {

  componentDidMount = () => {
    console.log(this.props);
  }
  

  render() {
    return (
      <div>
        SingleOPbject: {this.props.match.params.id}
      </div>
    )
  }
}

export default SingleObject;
