import React from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Router
import { withRouter } from 'react-router-dom'

// Classes
import classnames from 'classnames'

// Components
import Header from 'components/Header'
import Filter from 'components/Filter'
import List from 'components/List'

// Styles
// import './_index.scss'

// Actions
import { getUSER, } from '../../store/actions/user'
import { orderBy, } from '../../store/actions/filterUser'
import MaterialIcon from '@material/react-material-icon';

class User extends React.Component{

  componentDidUpdate(prevProps){
    const curProps = this.props;
    if(prevProps.keyword !== curProps.keyword || 
      prevProps.status !== curProps.status || 
      prevProps.user_type !== curProps.user_type || 
      prevProps.offset !== curProps.offset){
      this.props.getUSER();

    }

    console.log('user props ', this.props);
  }
  backTo(path) {
    this.props.history.push(path)
  }
  render(){
    const classes = classnames('user')


    // const rowClick = ( event, index, rowData)=>{
    //   console.log('user event ', event);
    //   console.log('index ', index);
    //   console.log('rowData ', rowData);

    // }

    return(
      <div className={classes}>
        <Header title="Users" 
        link1={()=> this.backTo("/adduser")} 
        icon1={<MaterialIcon icon="add"/>} 
        button1={"Add User"}
        BtnStyle={"__btn-bg-red"}
       />
        <Filter type="user"></Filter>
        <List list={this.props.users} rowClick={()=>this.backTo("/userprofile")} headerClick={this.props.orderBy}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    keyword: state.filterUser.keyword,
    status: state.filterUser.status,
    user_type: state.filterUser.user_type,
    offset: state.filterUser.offset,
    users: state.users.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUSER, orderBy,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User))