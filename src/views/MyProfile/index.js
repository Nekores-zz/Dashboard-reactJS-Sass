import React from 'react'

// Classes
import classnames from 'classnames'

// Components
import Header from 'components/Header'
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid'

// Styles
import './_index.scss'

class MyProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  backTo(path) {
    this.props.history.push(path)
  }
  render(){
    const classes = classnames('__MyProfile')

    return(
      <form onSubmit="">
      <Grid className={classes+"__Grid"}>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
            <Header title="My Profile" 
              // arrow="arrow_back" 
              // arrowLink={()=> this.backTo("/us")}
              link1={() => this.backTo('/editprofile')} 
              icon1={<MaterialIcon icon="edit"/>} 
              button1={"Edit Profile"}
              button2={"Change Password"}
              link2={()=> this.backTo("/changepassword")} 
              icon2={<MaterialIcon icon="vpn_key"/>}
              link3={(()=> alert("Password Reset Successfully"))} 
              // button3={"Reset Password"}
              // icon3={<MaterialIcon icon="vpn_key"/>}
              // iconButton={<MaterialIcon icon="delete"/>}
              // linkIconButton={() => alert("User is Deleted Successfully")}
              BtnStyle = "__btn-bg-darkGrey"
              // BtnLastStyle = "__btn-bg-red"
              />
              </Cell>
          </Row>
          <Row className={classes+"__Grid__Row"}>
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
                      <p className={classes+"__Grid__Row__Cell__Row__Cell_Para"}>
                        28 October 2019 10:30 AM
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
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
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
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
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
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
                       Christopher
                      </p>
                  </Cell>
                  <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
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
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
                       chris@gmail.com
                      </p>
                  </Cell>
                  <Cell columns={4} className={classes+"__Grid__Row__Cell__Row__Cell"}>
                      <p className={classes+"__Grid__Row__Cell__Row__Cell__para"}>
                        TIS_001
                      </p>
                  </Cell>
                  
                </Row>
              </Cell>
          </Row>
      </Grid>
      </form>
    )
  }
}


export default MyProfile