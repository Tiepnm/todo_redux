import { connect } from 'react-redux'
import Count from "../components/Count";

const mapStateToProps = (state, ownProps) => ({
  count: state.todos.length
})

export default connect(
  mapStateToProps,

)(Count)
