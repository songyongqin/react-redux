import React from 'react'
import ReactDOM from 'react-dom'

import Calc from './components/calc'
import store from './redux/store'

function render(){
    ReactDOM.render(<Calc store={store}/>,document.getElementById('root'))
}
render()
store.subscribe(render)
