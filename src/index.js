import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/app'

import store from './redux/store'

import {Provider} from 'react-redux'

// ReactDOM.render(<App store={store} />,document.getElementById('root'))

// store.subscribe(function(){
// 	ReactDOM.render(<App store={store} />, document.getElementById('root'))
// })

ReactDOM.render(
	(
		<Provider store = {store}>
			<App />
		</Provider>
	),
	document.getElementById('root')
)