import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counters extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increate: PropTypes.func.isRequired,
        decreate: PropTypes.func.isRequired,
    }

    hangdleAdd = () => {
        const num = this.select.value * 1
        this.props.increate(num)
    }
    hangdleReduce = () => {
        const num = this.select.value * 1
        this.props.decreate(num)

    }
    hangdleAddOdd = () => {
        const num = this.select.value * 1
        if(this.props.count % 2 ===1) {
            this.props.increate(num)
        }
    }
    hangdleAddAsyn = () => {
        const num = this.select.value * 1
        setTimeout(() => {
        this.props.increate(num)
        }, 1000);
    }
    render() {
        const {count} = this.props
        return (
            <div>
                <p>点击 {count} 次</p>
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

