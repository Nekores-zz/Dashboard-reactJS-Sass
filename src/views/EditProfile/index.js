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
class EditProfile extends React.Component{
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
    const classes = classnames('__EditProfile')

    return(
      <form onSubmit={()=> alert("Form is submitted")}>
      <Grid className={classes+"__Grid"}>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
            <Header className={classes+"__Grid__Row__Cell__Header"} title="Edit Profile" arrow="arrow_back" arrowLink={()=>this.backTo("/myprofile")}/>
          </Cell>
        </Row>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Christopher" label="GIVEN NAME"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Mcclary" label="SURNAME"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="email" placeholder="chris.mcclary@gmail.com" label="EMAIL ADDRESS"/>
          </Cell>
          </Row>
        <Row className={classes+"__Grid__Row"}>
        <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
          <Button type="submit" className={classes+"__Grid__Row__Cell__Button"} raised={true} icon={<MaterialIcon icon='save' />}> Update Profile</Button>
          </Cell>
        </Row>
        
      </Grid>
      </form>
    )
  }
}


export default EditProfile