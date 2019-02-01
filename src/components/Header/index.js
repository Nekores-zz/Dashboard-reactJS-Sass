import React from 'react'
import PropTypes from 'prop-types'

// Classes
import classnames from 'classnames'

// Components
import {Cell, Grid, Row} from '@material/react-layout-grid'
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

// Styles
import './_index.scss'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      path : this.props.path
    }
    // backToCustomer = this.backToCustomer.bind(this)
  }

  backToCustomer(path) {
    this.props.history.push(path)
    // console.log(pro)
  }
  
  render(){
    const classes = classnames('header', 
    this.props.className)

    return(
      <div className={classes}>
        <Grid className="header__grid">
          <Row className="header__grid__row">
            <Cell className="header__grid__row__column" columns={4}>
                < h1 className="header__grid__row__column__main__Title" > {
                  this.props.title}
                  {this.props.arrow ? (
                    < button onClick = {this.props.arrowLink}> < MaterialIcon
                    icon = {
                      this.props.arrow
                    }
                    /></button >
                  ):(console.log("No Arrow"))}
                 </h1>
            </Cell>
            
              <Cell className="header__grid__row__column" columns={8}>
                <ul className="header__grid__row__column__ul">
                    {this.props.button1 ? (
                  <li className="header__grid__row__column__ul__li">
                    <Button className={"header__grid__row__column__ul__li__button "+ this.props.BtnStyle} onClick={this.props.link1} raised={true} icon={this.props.icon1}> {this.props.button1}</Button>
                 
                  </li>
                  )
                  :(
                    console.log()
                  ) 
                    }
                    {this.props.button2 ? (
                    <li className="header__grid__row__column__ul__li">
                    <Button className={"header__grid__row__column__ul__li__button "+ this.props.BtnStyle} onClick={this.props.link2} raised={true} icon={this.props.icon2}> {this.props.button2}</Button>
                 
                  </li>
                  )
                  :(
                    console.log()
                  )  
                    }
                    {this.props.button3 ? (
                    <li className="header__grid__row__column__ul__li">
                    <Button className={"header__grid__row__column__ul__li__button "+ this.props.BtnStyle} onClick={this.props.link3} raised={true} icon={this.props.icon3}> {this.props.button3}</Button>
                 
                  </li>
                  )
                  :(
                    console.log()
                  )  
                    }
                    {this.props.iconButton ? (
                    < li className = "header__grid__row__column__ul__li" >
                    <Button className={"header__grid__row__column__ul__li__buttonIcon "+ this.props.BtnLastStyle +" "+ this.props.BtnStyle} onClick={this.props.linkIconButton} 
                    raised={true}
                    
                    icon={this.props.iconButton}> </Button>
                 
                  </li>
                  )
                  :(
                    console.log()
                  )  
                    }
                  
                </ul>
            </Cell>
            
          
          </Row>
        </Grid>
      </div>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string
}

Header.defaultProps = {
  className: '',
  type: '',
  title: ''
}

export default Header