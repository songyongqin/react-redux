import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Counter extends Component {

    static propTypes = {
      count: PropTypes.number.isRequired,
      msgs: PropTypes.array.isRequired,
      addCount: PropTypes.func.isRequired,
      redCount: PropTypes.func.isRequired,
      addMsg: PropTypes.func.isRequired,

    }

    hangdleAdd = () => {
      const num = this.select.value * 1
      this.props.addCount(num)
    }
    hangdleReduce = () => {
      const num = this.select.value * 1
      this.props.redCount(num)
    }
    hangdleAddOdd = () => {
        const num = this.select.value * 1
        const count  = this.props.count
        if(count % 2 ===1) {
          this.props.addCount(num)
        }
    }
    hangdleAddAsyn = () => {
      const num = this.select.value * 1
      setTimeout(() => {
        this.props.addCount(num)
      }, 1000);
    }

    handleAdd = ()=> {
      let msg = this.input.value
      this.props.addMsg(msg)
      this.input.value = ''
    }
    componentDidUpdate(){
      console.log(33,this.props)
    }

    render() {
        const {count, msgs} = this.props
        return (
          <div>
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
            <div style={{marginTop:30}}>
              <div>
                <input ref = {val => this.input = val} />
                <button onClick = {this.handleAdd}>添加消息</button>
              </div>
              <ul>
                {
                  msgs.map((msg, index) => <li key={index} >{msg}</li>)
                }
              </ul>
            </div>
          </div>
        )
    }
}

