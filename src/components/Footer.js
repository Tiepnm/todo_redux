import React from 'react'
import FilterLink from '../containers/FilterLink'
import Count from '../containers/Count'
import { VisibilityFilters } from '../actions'


const divStyle = {

  color: 'blue',
  fontWeight:'bold',
  marginTop:'5px',
};

const Footer = () => (
  <div>

    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <div style={divStyle}>Total: <Count></Count></div>
  </div>
)

export default Footer
