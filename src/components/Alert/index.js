import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Classes
import classnames from 'classnames'

// Components
import Button from 'components/Button'
import Snackbar from '@material-ui/core/Snackbar'
 
// Styles
import './_index.scss'

class Alert extends React.Component{
  closeAlert = () => {
  }

  render(){
    const classes = classnames('snackbar', 
    { 'snackbar--success': this.props.alert.type === 'success' },
    { 'snackbar--error': this.props.alert.type === 'alert'},
    { 'snackbar--warning': this.props.alert.type === 'warning'},
    this.props.className)

    return(
      <div>
        <Snackbar
          className={classes}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          classes={{
            root: 'snackbar-wrapper'
          }}
          open={this.props.alert.isShown}
          onClose={this.closeAlert}          
          autoHideDuration={6000}
          message={
            <div className="snackbar__message">
              {this.props.alert.message}
            </div>}
          action={[
            <Button 
              className="snackbar__close" 
              key="close" 
              type="icon-only" 
              icon="close" 
              onClick={this.closeAlert} />
          ]}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

Alert.propTypes = {
  isShow: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string
}

Alert.defaultProps = {
  isShow: false,
  message: '',
  type: '',
  className: ''
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)