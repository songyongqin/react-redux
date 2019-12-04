/**
 * react-redux 模块
 * Provider
 * connect
 */
import React,{Component} from 'react'
import PropTypes from 'prop-type'

/**
 * Provider组件类
 * 作用：为所有的容器子组件提供store(context)
 * <Provider store = {store}>
 *  <App />
 * </Provider>
 */
export class Provider extends Component{
  static propTypes = {
    store: PropTypes.Object.isRequired
  }

  static childContextTypes = {
    store: PropTypes.Object.isRequired
  }

  //为子组件提供包含store的context
  getChildContext() {
    //返回的就是context对象
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.Children  //将所有子标签返回
  }
}
/**
 * connect 函数
 * export default connect((state) => {},{}))(xxx)
 * mapStateToProps:函数，用来确定一般属性
 * mapDispatchToProps:对象，用来确定函数（内部会使用dispatch方法）属性
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  //返回一个函数接收一个组件
  return (WrapComponent)=>{
    //返回一个容器组件
    return class ConnectComponent extends Component{

    }
  }
}