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
class AddUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  backTo = (path) => {
    this.props.history.push(path)
  }
  render(){
    const classes = classnames('__AddUser')

    return(
      <form onSubmit={()=> alert("Form is submitted")}>
      <Grid className={classes+"__Grid"}>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={12}>
            <Header className={classes+"__Grid__Row__Cell__Header"}title="Edit User" arrow="arrow_back" arrowLink={()=> this.backTo("/users")}/>
          </Cell>
        </Row>
        <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="001" label="USER ID"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Administrator" label="ROLE"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Marketing" label="DEPARTMENT"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="0105520000111" label="EMPLOYEE NO."/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Christopher" label="GIVEN NAME"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="text" placeholder="Mcclary" label="SURNAME"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="email" placeholder="Chris@gmail.com" label="EMAIL ADDRESS"/>
          </Cell>
          </Row>
          <Row className={classes+"__Grid__Row"}>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="password" placeholder="********" label="PASSWORD"/>
          </Cell>
          <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
            <Input required="required" className={classes+"__Grid__Row__Cell__Input"} type="password" placeholder="********" label="CONFIRM PASSWORD"/>
          </Cell>
          
        </Row>
        <Row className={classes+"__Grid__Row"}>
        <Cell className={classes+"__Grid__Row__Cell"} columns={5}>
          <Button type="submit" className={classes+"__Grid__Row__Cell__Button"} raised={true} icon={<MaterialIcon icon='save' />}> Update User</Button>
          </Cell>
        </Row>
        
      </Grid>
      </form>
    )
  }
}


export default AddUser