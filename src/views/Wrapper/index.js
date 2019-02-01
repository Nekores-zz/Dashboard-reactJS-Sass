import React from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// Check Authentication
import { authenticated, notAuthenticated } from 'utils/auth.js'

// Components
// import Alert from 'components/Alert'
// import Loader from 'components/Loader'

// Views
import Navigation from 'views/Navigation'
import Dashboard from 'views/Dashboard'
import Signin from 'views/Signin'
import Customer from 'views/Customer'
import User from 'views/User'
import EditUser from 'views/EditUser'
import EditProfile from 'views/EditProfile'
import AddUser from 'views/AddUser'
import MyProfile from 'views/MyProfile'
import ChangePassword from 'views/ChangePassword'
// import Profile from 'views/Profile'
import UserProfile from 'views/UserProfile'
import CustomerProfile from 'views/CustomerProfile'

// Styles
import './_index.scss'

class Wrapper extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Router>
          <div className="wrapper__route">
            <Navigation />

            <div className="wrapper__route__container">
            <Switch>
              <Route exact path="/" component={authenticated(Dashboard)} />
              <Route exact path="/promotions" component={authenticated(Customer)}/>
              <Route exact path="/reminders" component={authenticated(Customer)}/>
              <Route exact path="/customers" component={authenticated(Customer)}/>
              <Route exact path="/users" component={authenticated(User)}/>
              {/* <Route exact path="/profile" component={authenticated(Profile)}/> */}
              <Route exact path="/signin" component={notAuthenticated(Signin)}/>
              <Route exact path="/edituser" component={authenticated(EditUser)} />
              <Route exact path="/editprofile" component={authenticated(EditProfile)} />
              <Route exact path="/adduser" component={authenticated(AddUser)} />
              <Route exact path="/myprofile" component={authenticated(MyProfile)} />
              <Route exact path="/changepassword" component={authenticated(ChangePassword)} />
              <Route exact path="/userprofile" component={authenticated(UserProfile)} />
              <Route exact path="/customerprofile" component={authenticated(CustomerProfile)} />
              <Redirect to="/" />
            </Switch>
              </div>
            {/* <Alert />
            <Loader /> */}
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Wrapper))