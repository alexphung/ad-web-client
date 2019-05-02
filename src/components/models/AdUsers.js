import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid';

class AdUsers extends Component {
  render() {
    return this.props.adusers.map((adUser) => (
            <p key={uuid.v1()}>{adUser}</p>
    ));
  }
}

// PropTypes
AdUsers.propTypes = {
    adusers: PropTypes.array.isRequired
}

export default AdUsers
