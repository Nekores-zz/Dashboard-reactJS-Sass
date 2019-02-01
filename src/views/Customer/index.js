import React from 'react'
import PropTypes from 'prop-types'
import { getCustomers } from 'store/actions/customers'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { withRouter } from 'react-router-dom'

// Classes
import classnames from 'classnames'

// Components
import Header from 'components/Header'
import List from 'components/List'
import Filter from 'components/Filter'

// Styles
import './_index.scss'
class Customer extends React.Component{

  componentDidMount(){
    this.props.getCustomers(true)
  }
orderBy(){
    console.log(this.props.list)
}
backTo(path) {
  this.props.history.push(path)
}
  render(){
    const classes = classnames('customer')

    return(
      <div className={classes}>
        {/* <Header title='Customers'/>
        < div className = "__inputContainer" >
          <ul className="__inputContainer__Ul">
          < li className = "__inputContainer__Ul__Li" > < InputSearch / > < /li>
          <li> <InputSelect list={this.props.list}/> </li>
          <li> <TableBreads/> </li>
          {console.log(this)}
        </ul>
        </div>
        <List list={this.props.list}/> */}
        <Header title="Customers"/>
        <Filter type="customer" list={this.props.list}></Filter>
        <List list={this.props.list} rowClick={()=>this.backTo("/customerprofile")}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.customers.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCustomers
}, dispatch)

Customer.propTypes ={
  className: PropTypes.string,
}

Customer.defaultProps = {
  className: '',
  getCustomers: () => {},
  list: {
    total_count: 1000,
    data: []
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customer))