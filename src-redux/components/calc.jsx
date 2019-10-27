import React, { Component } from 'react'

import * as actions from '../redux/actions'

export default class Calc extends Component {

    hangdleAdd = () => {
        const num = this.select.value * 1
        this.props.store.dispatch(actions.increate(num))
    }
    hangdleReduce = () => {
        const num = this.select.value * 1
        this.props.store.dispatch(actions.decreate(num))
    }
    hangdleAddOdd = () => {
        const num = this.select.value * 1
        if(this.props.store.getState() % 2 ===1) {
            this.props.store.dispatch(actions.increate(num))
        }
    }
    hangdleAddAsyn = () => {
        const num = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.increate(num))
        }, 1000);
    }
    render() {
        const num = this.props.store.getState()
        return (
            <div>
                <p>点击 {num} 次</p>
                <div>
                    <select ref={select => this.select = select} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick= {this.hangdleAdd}>add</button>
                    <button onClick= {this.hangdleReduce}>reduce</button>
                    <button onClick= {this.hangdleAddOdd}>add odd</button>
                    <button onClick= {this.hangdleAddAsyn}>add asyn</button>
                </div>
            </div>
        )
    }
}
