import React from 'react'
import PropTypes from 'prop-types'

const Count = ({ count }) => (
    <span>{count}</span>

)

Count.propTypes = {
  count: PropTypes.number.isRequired,

}

export default Count
