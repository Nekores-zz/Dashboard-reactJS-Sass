import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InputSearch from 'components/InputSearch'
import MaterialIcon from '@material/react-material-icon';

// Classes
import classnames from 'classnames'

import { 
  // getFilterUSER as user_getFilter,
  setKeyword as user_setKeyword,
  setStatus as user_setStatus,
  setType as user_setType,
  increaseOffset as user_increaseOffset,
  decreaseOffset as user_decreaseOffset, } from 'store/actions/filterUser'


// Styles
import './_index.scss'

class FilterUser extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      firstIndex: 0
    };

  }

  componentDidUpdate(){

    if(this.props.type === 'user'){
    }
    else if(this.props.type === 'customer'){
      //put your get filter here
      
    }
    else if(this.props.type === 'vehicles'){
      //put your get filter here
      
    }
  }
  componentDidMount(){
    console.log('filter props ', this.props);

    if(this.props.type === 'user'){
      
    }
    else if(this.props.type === 'customer'){
      //put your get filter here
      
    }
    else if(this.props.type === 'vehicles'){
      //put your get filter here
      
    }
  }

  whatToRender(){
    if(this.props.type === 'user'){
      return <div className="filter__container__input">
      <div className="filter__container__input">
          <div className="filter__container__input__flex-grow-two">
            <InputSearch value={this.props.user_keyword} onChange={(event)=>{
                console.log('keyword ', event);
                this.props.user_setKeyword(event)
              }}/>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select value={this.props.user_type} onChange={(event)=>{
              // console.log('keyword ', event.target.value);
              this.props.user_setType(event.target.value)
            }}>
              <option value="0">Administrator</option>
              <option value="1">User</option>
            </select>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select value={this.props.user_status} onChange={(event)=>{
              // console.log('keyword ', event.target.value);
              this.props.user_setStatus(event.target.value)
            }}>
              <option value="1">Locked</option>
              <option value="0">Unlocked</option>
            </select>
          </div>
        </div>
        <div className="filter__container__prev-next">
          < div className = "filter__container__prev-next__mod" >
            <span>{(this.props.user_offset+1)+ ' - '+
            ((this.props.user_offset+10)>this.props.user_total_count?this.props.user_total_count:(this.props.user_offset+10))
            + ' of ' + this.props.user_total_count}</span>
          <button onClick={this.props.user_decreaseOffset}>
            < MaterialIcon icon = 'arrow_back_ios' / >
          </button>
          <button className="active" onClick={this.props.user_increaseOffset}>
            < MaterialIcon icon = 'arrow_forward_ios' / >
          </button>
          </div>
        </div>
      </div>
    }

    else if(this.props.type === 'customer'){
      let listProp = this.props.list
      return <div className="filter__container__input">
      <div className="filter__container__input">
          <div className="filter__container__input__flex-grow-two">
            <InputSearch value="" onChange={(event)=>{
                console.log('keyword ', event);
                this.props.user_setKeyword(event)
              }}/>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select>
              {listProp.map((item, index) => (
                    // this.getType(index, item)
                    < option key={index} className = "__Option" > 
                        {item.type}
                    </option>

                    
                ))
                }
            </select>
          </div>
        </div>
        <div className="filter__container__prev-next">
          < div className = "filter__container__prev-next__mod" >
            <span>{(this.props.user_offset+1)+ ' - '+
            ((this.props.user_offset+10)>this.props.user_total_count?this.props.user_total_count:(this.props.user_offset+10))
            + ' of ' + listProp.length}</span>
          <button onClick={this.props.user_decreaseOffset}>
            < MaterialIcon icon = 'arrow_back_ios' / >
          </button>
          <button className="active" onClick={this.props.user_increaseOffset}>
            < MaterialIcon icon = 'arrow_forward_ios' / >
          </button>
          </div>
        </div>
      </div>

      
    }

    //Vehicle
    else if(this.props.type === 'vehicles'){
      // let listProp = this.props.list
      return <div className="filter__container__input">
      <div className="filter__container__input">
          <div className="filter__container__input__flex-grow-two">
            <InputSearch value="" onChange={(event)=>{
                console.log('keyword ', event);
                this.props.user_setKeyword(event)
              }}/>
          </div>
        </div>
        <div className="filter__container__prev-next">
          < div className = "filter__container__prev-next__mod" >
            <span>0 - 10 of 10</span>
          <button onClick={this.props.user_decreaseOffset}>
            < MaterialIcon icon = 'arrow_back_ios' / >
          </button>
          <button className="active" onClick={this.props.user_increaseOffset}>
            < MaterialIcon icon = 'arrow_forward_ios' / >
          </button>
          </div>
        </div>
      </div>
    }

    //Coupons
    if(this.props.type === 'coupons'){
      return <div className="filter__container__input">
      <div className="filter__container__input">
          <div className="filter__container__input__flex-grow-two">
            <InputSearch value={this.props.user_keyword} onChange={(event)=>{
                console.log('keyword ', event);
                this.props.user_setKeyword(event)
              }}/>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select value={this.props.user_type} onChange={(event)=>{
              // console.log('keyword ', event.target.value);
              this.props.user_setType(event.target.value)
            }}>
              <option value="0">All Status</option>
              <option value="1">Active</option>
              <option value="2">Not Active</option>
            </select>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select value={this.props.user_status} onChange={(event)=>{
              // console.log('keyword ', event.target.value);
              this.props.user_setStatus(event.target.value)
            }}>
              <option value="0">All Type</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">4</option>
              <option value="4">3</option>
            </select>
          </div>
        </div>
        <div className="filter__container__prev-next">
          < div className = "filter__container__prev-next__mod" >
            <span>{(this.props.user_offset+1)+ ' - '+
            ((this.props.user_offset+10)>this.props.user_total_count?this.props.user_total_count:(this.props.user_offset+10))
            + ' of ' + this.props.user_total_count}</span>
          <button onClick={this.props.user_decreaseOffset}>
            < MaterialIcon icon = 'arrow_back_ios' / >
          </button>
          <button className="active" onClick={this.props.user_increaseOffset}>
            < MaterialIcon icon = 'arrow_forward_ios' / >
          </button>
          </div>
        </div>
      </div>
    }


    //ActivityLog
    else if(this.props.type === 'activityLog'){
      // let listProp = this.props.list
      return <div className="filter__container__input">
      <div className="filter__container__input">
          <div className="filter__container__input__flex-grow-two">
            <InputSearch value="" onChange={(event)=>{
                console.log('keyword ', event);
                this.props.user_setKeyword(event)
              }}/>
          </div>
          <div className="filter__container__input__flex-grow-one">
            <select>
                    < option key={0} className = "__Option" > 
                    All Type
                    </option>
                    < option key={1} className = "__Option" > 
                    1
                    </option>
                     < option key={1} className = "__Option" > 
                    2
                    </option>
                     < option key={1} className = "__Option" > 
                    4
                    </option>
                     < option key={1} className = "__Option" > 
                    3
                    </option>

                    
                }
            </select>
          </div>
        </div>
        <div className="filter__container__prev-next">
          < div className = "filter__container__prev-next__mod" >
            <span>1 - 10 of 10</span>
          <button onClick={this.props.user_decreaseOffset}>
            < MaterialIcon icon = 'arrow_back_ios' / >
          </button>
          <button className="active" onClick={this.props.user_increaseOffset}>
            < MaterialIcon icon = 'arrow_forward_ios' / >
          </button>
          </div>
        </div>
      </div>

      
    }
  }

  render(){

    const classes = classnames('filter', 
    this.props.className)

    return(
      <div className={classes}>
        {this.whatToRender()}
      </div>
    )
    
  }
}

const mapStateToProps = state => ({
  user_keyword: state.filterUser.keyword,
  user_status: state.filterUser.status,
  user_type: state.filterUser.user_type,
  user_offset: state.filterUser.offset,
  user_total_count: state.users.total_count,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  user_setKeyword,
  user_setStatus,
  user_setType,
  user_increaseOffset,
  user_decreaseOffset,
}, dispatch)

FilterUser.propTypes = {
  className: PropTypes.string
}

FilterUser.defaultProps = {
  className: '',
  type:'',

}

export default connect(mapStateToProps, mapDispatchToProps)(FilterUser)