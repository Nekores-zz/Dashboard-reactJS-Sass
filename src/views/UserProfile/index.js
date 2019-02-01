import React from 'react'

// Classes
import classnames from 'classnames'

// Components
import Header from 'components/Header'
import ModalConfirmation from 'components/ModalConfirmation'
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid'

// Styles
import './_index.scss'
class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      modalOpen: false,
      Text: "",
      Title: ""
    
    }
  }
  backTo(path) {
    this.props.history.push(path)
  }
  handleClickOpen = (e, Title, Text) => {
    e.preventDefault()
    this.setState({
      Title,
      Text,
      open: true,
      modalOpen: !this.state.modalOpen,
      // Text: "Are you sure you want to reset password of this user? new password will be generated and send to their email address."
    });
  };
  render(){
    const classes = classnames('__UserProfile')

    return(
      <form>
      <Grid className={classes+"__Grid"}>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
          
            <Header title="User Profile" 
              arrow="arrow_back" 
              arrowLink={()=> this.backTo("/users")}
              link1={() => this.backTo('/edituser')} 
              icon1={<MaterialIcon icon="edit"/>} 
              button1={"Edit User"}
              button2={"Lock User"}
              link2 = {
                (e) => this.handleClickOpen(e, "Confirmation", "Are you sure you want to lock this user? Notfication will be send to their email address.")
              }
              icon2={<MaterialIcon icon="lock"/>}
              link3 = {(e) => this.handleClickOpen(e, "Confirmation", "Are you sure you want to reset password of this user? new password will be generated and send to their email address.")}
              button3={"Reset Password"}
              icon3={<MaterialIcon icon="vpn_key"/>}
              iconButton={<MaterialIcon icon="delete"/>}
              linkIconButton= {(e) => this.handleClickOpen(e, "Confirmation", "Are you sure you want to delete this user? This use will be not more available and notification will be send to their email address.")}
              BtnStyle = "__btn-bg-darkGrey"
              BtnLastStyle = "__btn-bg-red"
              />
              </Cell>
          </Row>
          <Row className={classes+"__Grid__Row"}>
              <Cell className={classes+"__Grid__Row__Cell"} columns={7}>
                <Row className={classes+"__Grid__Row__Cell__Row"}>
                <Cell columns={12}>
                <ModalConfirmation modalIsOpen={this.state.modalOpen} closeModal={this.handleClickOpen} Title={this.state.Title} Text={this.state.Text} />
                  </Cell>
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


export default UserProfile