import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './_InputSearch.scss'

const WAIT_INTERVAL = 1000
const ENTER_KEY = 13

class InputSearch extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.triggerChange = this.triggerChange.bind(this)
    this.timer = null
  }

  handleChange(value) {
    clearTimeout(this.timer)
    console.log(value.target.value)
    this.setState({ value: value.target.value })
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this.triggerChange()
    }
  }
  
  triggerChange() {
    const { value } = this.state
    console.log(value)
    this.props.onChange(value)
  }

  render(){
    const {
      className,
      // ...otherProps
    } = this.props
   
    const classes = classnames('input-search', className)
    
    return(
      <div className={classes}>
        <input className={classes} 
          // value={this.state.value} 
          //onChange={this.props.onChange} 
          onKeyDown={this.handleKeyDown}
          type="text" 
          placeholder="Search"/>
        <i className="material-icons">search</i>
      </div>
    )
  }
}

InputSearch.propTypes = {
  className: PropTypes.string,
}

InputSearch.defaultProps = {
  className: '',
  value: '',
}

export default InputSearch
