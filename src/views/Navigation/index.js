import React from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { withRouter } from 'react-router-dom'
import { NavLink } from "react-router-dom"

// Classes
import classnames from 'classnames'

// Styles
import './_index.scss'

class Navigation extends React.Component{
  render(){
    const classes = classnames('navigation')

    return(
      <div className={classes}>
        <div className="navigation__logo">
        </div>
        <div className="navigation__primary">
          <NavLink
            to='/'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">dashboard</i>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to='/promotions'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">local_offer</i>
            <span>Promotion</span>
          </NavLink>

          <NavLink
            to='/reminders'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">notifications</i>
            <span>Reminder</span>
          </NavLink>

          <NavLink
            to='/customers'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">people</i>
            <span>Customer</span>
          </NavLink>

          <NavLink
            to='/users'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">supervised_user_circle</i>
            <span>User</span>
          </NavLink>
        </div>
        <div className="navigation__secondary">
          <NavLink
            to='/myprofile'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <i className="material-icons">account_circle</i>
            <span>My Profile</span>
          </NavLink>

          <button
            className="navigation-item">
            <i className="material-icons">exit_to_app</i>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))