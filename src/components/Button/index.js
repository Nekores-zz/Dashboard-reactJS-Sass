import React from 'react'
import PropTypes from 'prop-types'

// Classes
import classnames from 'classnames'

// Components
import ReactButton from '@material/react-button'

// Styles
import './_index.scss'

class Button extends React.Component{
  render(){
    const classes = classnames('button', 
    { [`button-${this.props.type}`]: true },
    { [`button-${this.props.color}`]: true },
    { 'button--icon-only': this.props.iconOnly},
    this.props.className)

    const button = this.props.href ? 
    <a className={classes}
      href={this.props.href}>
      { this.props.icon && 
        <i className="material-icons">{this.props.icon}</i>
      }
      { this.props.label &&
        <span>{this.props.label}</span>
      }
    </a> :
    <ReactButton className={classes}
      icon={ 
        this.props.icon ? 
        <i className="material-icons">{this.props.icon}</i> : 
        null
        }>
      {this.props.label}
    </ReactButton>

    return(
      button
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  iconOnly: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  type: '',
  label: '',
  icon: '',
  href: '',
  iconOnly: false
}

export default Button