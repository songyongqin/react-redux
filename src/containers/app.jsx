// import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {addCount, redCount, addMsg} from '../redux/actions'

export default connect(
  state => ({count:state.count, msgs: state.msgs}),
  {addCount, redCount, addMsg}
)(Counter)
