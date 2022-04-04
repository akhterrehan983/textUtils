import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './loading.gif'
export class Spinner extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div className="text-center">
        <img src={loading} ></img>
      </div>
    )
  }
}

export default Spinner
