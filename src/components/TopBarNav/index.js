import React from 'react'
import PropTypes from 'prop-types'

import logo from 'img/logo.png'

// Classes
import classnames from 'classnames'


// Styles
import './_index.scss'

class TopBarNav extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    }
  }

  
  render(){
    const classes = classnames('__TopBarNav', 
    this.props.className)

    return(
      <div className={classes}>
            <ul className={classes+"__Ul"}>
                <li className={classes+"__Ul__Li "+classes+"__Ul__Li__Logo"}>
                   <img src={logo} alt="logo"/>
                </li>
                <li className={classes+"__Ul__Li"}>
                   <button className={classes+"__Ul__Li__Button active"}> Home</button>
                </li>
                <li className={classes+"__Ul__Li"}>
                   <button className={classes+"__Ul__Li__Button"}> Inbox</button>
                </li>
                <li className={classes+"__Ul__Li"}>
                   <button className={classes+"__Ul__Li__Button"}> Vehicles</button>
                </li>
                <li className={classes+"__Ul__Li"}>
                   <button className={classes+"__Ul__Li__Button"}> Coupons</button>
                </li>
                <li className={classes+"__Ul__Li"}>
                   <button className={classes+"__Ul__Li__Button"}> More</button>
                </li>
                 <li className={classes+"__Ul__Li "+classes+"__Ul__Li__Last"}>
                   <button className={classes+"__Ul__Li__Button"}> </button>
                </li>
              </ul>
      </div>
    )
  }
}

TopBarNav.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string
}

TopBarNav.defaultProps = {
  className: '',
  type: '',
  title: ''
}

export default TopBarNav