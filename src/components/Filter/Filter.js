import React from "react"
import { connect } from "react-redux"

import actions from "../../redux/actions"

const Filter = ({ value, onFilter }) => {
  return <input type="text" value={value} placeholder="Filter" onChange={onFilter} />
}

const mapStateToProps = (state) => ({
  value: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.Filter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
