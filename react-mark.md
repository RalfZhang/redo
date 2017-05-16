### children 遍历
React.Children.map(this.props.children, child => {})

### 子组件接收值
propTypes: {
  title: React.PropTypes.string.isRequired
}
getDefaultProps: function() {
  return {
    title: 'Default hello world'
  }
}

### dom 引用
<input ref='domRef'>
this.refs.domRef

### 设置和改变状态
getInitialState: function() {
  return {
    data: [1, 2, 3]
  }
}
this.setState({
  data: [1, 5, 4]
})

### 生命周期
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用