import {connect} from 'react-redux'

import {increate,decreate,increateAsync} from '../redux/actions'
import Counters from '../components/counters'

export default connect(
    state => ({count: state}),
    {increate,decreate,increateAsync}
)(Counters)