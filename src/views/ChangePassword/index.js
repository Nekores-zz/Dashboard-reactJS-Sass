import React from 'react'

// Classes
import classnames from 'classnames'

// Components
import Header from 'components/Header'
import Input from 'components/Input'
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import {Cell, Grid, Row} from '@material/react-layout-grid'
// Styles
import './_index.scss'
class ChangePassword extends React.Component{
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
    const classes = classnames('__ChangePassword')

    return(
      <form onSubmit={()=> alert("Form is submitted")}className={classes+"___Form"}>
      <Grid className={classes+"__Form__Grid"}>
        <Row className={classes+"__Form__Grid__Row"}>
          <Cell className={classes+"__Form__Grid__Row__Cell"} columns={12}>
            <Header className={classes+"__Form__Grid__Row__Cell__Header"} title="Change Password" arrow="arrow_back" arrowLink={()=> this.backTo("/myprofile")}/>
          </Cell>
        </Row>
        
        <Row className={classes+"__Form__Grid__Row"}>
          <Cell className={classes+"__Form__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Form__Grid__Row__Cell__Input"} type="password" placeholder="********" label="CURRENT PASSWORD"/>
          </Cell>
          </Row>
          <Row className={classes+"__Form__Grid__Row"}>
          <Cell className={classes+"__Form__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Form__Grid__Row__Cell__Input"} type="password" placeholder="********" label="NEW PASSWORD"/>
          </Cell>
          </Row>
          <Row className={classes+"__Form__Grid__Row"}>
          <Cell className={classes+"__Form__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Form__Grid__Row__Cell__Input"} type="password" placeholder="********" label="REPEAT NEW PASSWORD"/>
          </Cell>
          </Row>
        <Row className={classes+"__Form__Grid__Row"}>
        <Cell className={classes+"__Form__Grid__Row__Cell"} columns={5}>
          <Button type="submit" className={classes+"__Form__Grid__Row__Cell__Button"} raised={true} icon={<MaterialIcon icon='vpn_key' />}> Change Password</Button>
          </Cell>
        </Row>
        
      </Grid>
      </form>
    )
  }
}


export default ChangePassword