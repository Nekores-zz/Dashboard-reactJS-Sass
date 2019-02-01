import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import { getCustomers } from 'store/actions/customers'



// Redux
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'

// Router
import {
  withRouter
} from 'react-router-dom'



// comps
import Filter from 'components/Filter'
import List from 'components/List'
import Header from 'components/Header'
import TopBarNav from "components/TopBarNav"
import Card from "components/Card"


// Styles
import './_index.scss'

import {Cell, Grid, Row} from '@material/react-layout-grid'

import classnames from 'classnames'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};



class CustomerProfile extends React.Component {
    constructor(props) {
    super(props);
    this.state ={
      items: [
        {name: "tab1", id: 1},
        {name: "tab2" , id: 2},
        {name: "tab3" , id: 3},
        {name: "tab4" , id: 4}
      ],
      content: "",
      value: 0,
    }
  }
   componentDidMount(){
    this.props.getCustomers(true)
  }
  orderBy(){
      console.log(this.props.list)
  }
  backTo = (path) => {
    this.props.history.push(path)
  }
  handlee(i,x){
    this.setState({
      index: x,
      content: i.name
    })
    console.log(i.name, x)
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const classes = classnames('__CustomerProfile')

    return (
        <Grid className={classes+"__Grid"}>
          <Row className={classes+"__Grid__Row "+classes+"__Grid__RowHead"}>
            <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
              < Header title = "Customer Profile" arrow="arrow_back" arrowLink={()=> this.backTo("/customers")} />
            </Cell>
          </Row>
          <Row className={classes+"__Grid__Row"}>
              <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                  <AppBar position="static" className={classes+"__Header"}>
                      <Tabs value={this.state.value} onChange={this.handleChange}>
                      <Tab label="OVERVIEW" />
                      <Tab label="VEHICLES" />
                      <Tab label="COUPONS" />
                      <Tab label="ACTIVITY LOG" />
                      <Tab label="MY-ISUZU" />
                      </Tabs>
                    </AppBar>
                  {value === 0 && <TabContainer>
                    <Row className={classes+"__Grid__Row "+classes+"__Grid__Row__Overview"}>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={7}>
                          <Row className={classes+"__Grid__Row__Cell__Row"}>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                    Registration Date
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  9 October 2019 10:30 AM
                                </p>
                            </Cell>
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                  LAST SIGN IN
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                              <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  28 October 2019 10:30 AMu
                                </p>
                            </Cell>
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                  STATUS
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  Unlocked
                                </p>
                            </Cell>
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                  USER DETAIL
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  user id
                                </h6>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  role
                                </h6>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                001
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  Administrator
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                Department
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  employee no.
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                Marketing
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  0105520000111
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                Given Name
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  SurName
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                Christopher
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  Mcclary
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                Email
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  Username
                                </p>
                            </Cell>
                            
                          </Row>
                          <Row>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <h6 className={classes+"__Grid__Row__Cell__Row__Cell__SubTitle"}>
                                  
                                </h6>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Title"}>
                                
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                chris@gmail.com
                                </p>
                            </Cell>
                            <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                                <p className={classes+"__Grid__Row__Cell__Row__Cell__Para"}>
                                  TIS_001
                                </p>
                            </Cell>
                            
                          </Row>
                        </Cell>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
                          <Row className={classes+"__Grid__Row__Cell__Row"}>
                          <Cell className={classes+"__Grid__Row__Cell"} columns={4}>
                            <div className={classes+"__Grid__Row__Cell__Row__Cell__TextBox " + classes +"__Grid__Row__Cell__Row__Cell__TextBox__Blue"}>
                                    <h6>
                                      TOTAL VEHICLEs
                                    </h6>
                                    <h4>
                                      12
                                    </h4>
                              </div>
                        </Cell>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={4}>
                            <div className={classes+"__Grid__Row__Cell__Row__Cell__TextBox " + classes +"__Grid__Row__Cell__Row__Cell__TextBox__Red"}>
                                    <h6>
                                      VEHICLES IN MY-ISUZU
                                    </h6>
                                    <h4>
                                      8
                                    </h4>
                              </div>
                        </Cell>
                          </Row>
                          <Row className={classes+"__Grid__Row__Cell__Row"}>
                          <Cell className={classes+"__Grid__Row__Cell"} columns={4}>
                            <div className={classes+"__Grid__Row__Cell__Row__Cell__TextBox " + classes +"__Grid__Row__Cell__Row__Cell__TextBox__Green"}>
                                    <h6>
                                      active coupon
                                    </h6>
                                    <h4>
                                      13
                                    </h4>
                              </div>
                        </Cell>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={4}>
                            <div className={classes+"__Grid__Row__Cell__Row__Cell__TextBox " + classes +"__Grid__Row__Cell__Row__Cell__TextBox__Orange"}>
                                    <h6>
                                      Coupon used
                                    </h6>
                                    <h4>
                                      7
                                    </h4>
                              </div>
                        </Cell>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={4}>
                            < div className = {
                              classes + "__Grid__Row__Cell__Row__Cell__TextBox __Grid__Row__Cell__Row__Cell__TextBox__DarkGrey"
                            } >
                                    <h6>
                                    UNUSED EXPIRED COUPON
                                    </h6>
                                    <h4>
                                    4
                                    </h4>
                              </div>
                        </Cell>
                          </Row>
                        </Cell>
                    </Row>
                  </TabContainer>}
                  {value === 1 && <TabContainer>
                      <Row className={classes+"__Grid__Row"}>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                                <Filter type="vehicles"></Filter>
                        </Cell>
                        {/* test */}
                      </Row>
                          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                            <List list={this.props.list} rowClick=""/>
                          </Cell> 
                  </TabContainer>}
                  {value === 2 && <TabContainer>
                      <Row className={classes+"__Grid__Row"}>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                          {/* < Header title = "Coupon" arrow="arrow_back" arrowLink={()=> this.backTo("/customers")} /> */}
                                <Filter type="coupons"></Filter>
                        </Cell>
                      </Row>
                          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                            <List list={this.props.list} rowClick=""/>
                          </Cell> 
                  </TabContainer>}
                  {value === 3 && <TabContainer>
                      {/* <Grid className={classes+"__Grid"}> */}
                        <Row className={classes+"__Grid__Row"}>
                          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                                  <Filter type="activityLog"></Filter>
                          </Cell>
                        </Row>
                            <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                              <List list={this.props.list} rowClick=""/>
                            </Cell> 
                      {/* </Grid> */}
                  </TabContainer>}
                  {value === 4 && <TabContainer>
                      <Row className={classes+"__Grid__Row"}>
                      <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                      </Cell>
                    </Row>
                    <Row className={classes+"__Grid__Row " +classes+"__Grid__Row__Isuzu"} >
                        <Cell className={classes+"__Grid__Row__Cell " +classes+"__Grid__Row__Isuzu__Cell"} columns={12}>
                          <TopBarNav/>
                        </Cell> 

                        <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                            <div className={classes+"__Grid__Row__Cell__BreadCrumb"}>
                                <h2 className={classes+"__Grid__Row__Cell__BreadCrumb__Heading2"}> Home</h2>
                                <p className={classes+"__Grid__Row__Cell__BreadCrumb__Para"}>Lorem ipsum dolor sminth dija  </p>
                            </div>
                          </Cell>                 
                        <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                          <div className={classes+"__Grid__Row__Cell__PageBody"}>
                              <h3 className={classes+"__Grid__Row__Cell__PageBody__Heading3"}>
                                  Home
                              </h3>
                              <Row className={classes+"__Grid__Row "} >
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                              </Row>
                            </div>
                        </Cell>
                        <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
                          <div className={classes+"__Grid__Row__Cell__PageBody"}>
                              <h3 className={classes+"__Grid__Row__Cell__PageBody__Heading3"}>
                                  next vehicles maintenance
                              </h3>
                              <Row className={classes+"__Grid__Row "} >
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                                <Cell clasz sName={classes+"__Grid__Row__Cell"} columns={4}>
                                      <Card/>
                                </Cell>
                              </Row>
                            </div>
                        </Cell>
                      </Row>
                  </TabContainer>}
          
              </Cell>
          </Row>
        </Grid>
    );
  }
}
const mapStateToProps = state => ({
  list: state.customers.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCustomers
}, dispatch)

CustomerProfile.propTypes = {
  className: PropTypes.string,
}

CustomerProfile.defaultProps = {
  className: '',
  getCustomers: () => {},
  list: {
    total_count: 1000,
    data: []
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerProfile))