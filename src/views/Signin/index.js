import React from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { withRouter } from 'react-router-dom'

// Classes
import classnames from 'classnames'

// Styles
import './_index.scss'

class Signin extends React.Component{
  render(){
    const classes = classnames('signin')
    
    return(
      <div className={classes}>
        Signin uygukhkuyjgh
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin))