import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

// Classes
import classnames from 'classnames'

// Styles
import './_index.scss'

class Loader extends React.Component{
  render(){
    const classes = classnames('loader')

    const loader = this.props.loader.isShown ?
    <div className={classes}>
      <div className="loader__spinner"></div>
    </div>
    : null
    return(
      loader
    )
  }
}

const mapStateToProps = state => ({
  loader: state.loader
})

Loader.propTypes = {
  isShow: PropTypes.bool
}

Loader.defaultProps = {
  isShow: false
}

export default connect(mapStateToProps)(Loader)