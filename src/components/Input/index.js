import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './_Input.scss'

// const WAIT_INTERVAL = 1000
// const ENTER_KEY = 13

class Input extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value: props.value
    }
  }
  render(){
    // const {
    //   className,
    //   ...otherProps
    // } = this.props
   
    const classes = classnames('__inputRoot')
    
    return(
        <div className={classes}>
            <label className={"__Label"+classes}> {this.props.label}</label>
            <input className={"__Input"+classes}
            type={this.props.type}
            required={this.props.required}
            placeholder={this.props.placeholder}/>
        </div>
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  value: '',
}

export default Input
