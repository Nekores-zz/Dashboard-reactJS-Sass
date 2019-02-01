import React from 'react'

import List, {
  ListItem,
  ListItemText
} from '@material/react-list';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { withRouter } from 'react-router-dom'

// Classes
import classnames from 'classnames'

// Styles
import './_index.scss'

class Dashboard extends React.Component{
  render(){
    const classes = classnames('dashboard')

    return(
      <div className={classes}>
        Dashboard
        < List >
          <
          ListItem >
          <
          ListItemText primaryText = 'Photos' / >
          <
          /ListItem> <
          ListItem >
          <
          ListItemText primaryText = 'Recipes' / >
          <
          /ListItem> <
          ListItem >
          <
          ListItemText primaryText = 'Work' / >
          <
          /ListItem> <
          /List>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))