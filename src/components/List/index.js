import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Classes
import classnames from 'classnames'

// Components
import { Column, Table, AutoSizer } from 'react-virtualized'

// Styles
import 'react-virtualized/styles.css'
import './_index.scss'

class List extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      rowCount: 1000,
    }

    this._noRowsRenderer = this._noRowsRenderer.bind(this);
  }

  backTo = () => {
    this.props.history.push("")
  }

  _noRowsRenderer() {
    return <div className="list__no-rows">No rows</div>;
  }
  
  render(){
    const classes= classnames('list')

    // const listColumns = Object.keys(this.props.list).map(key => {
    //   var item = this.props.list[key]
    //   return <Column
    //     label={item}
    //     dataKey={item}
    //     width={200}
    //   />
    // }
  
    let listColumns;
  
    if(this.props.list[0]){
      listColumns = []
      for (let property in this.props.list[0]){
        
        if(this.props.list[0].hasOwnProperty(property)){
          listColumns.push(<Column
            label={property}
            dataKey={property}
            onRowClick= { () => alert(1) }
            width={200}
            > </Column>)
        }
      }
    }

    return(
      <AutoSizer className="rootCl">
      {({width}) => (
        <div className={classes}>
        { listColumns && 
          <Table
            ref="Table" onRowClick={this.props.rowClick}
            width={width} onHeaderClick={this.props.headerClick}
            height={500}
            headerHeight={40}
            rowHeight={40}
            rowCount={this.props.list.length}
            rowGetter={({ index }) => this.props.list[index]}
            noRowsRenderer={this._noRowsRenderer}
            className="__table"
          >
          {
            !listColumns &&
            <Column
              className="__column"
              label='Name'
              dataKey='name'
              width={200}
              sortBy
            />
          }
          {listColumns}
          </Table>
        }
      </div>
      )}
      </AutoSizer>
    )
  }
}

const mapStateToProps = state => ({
  // list: state.customers.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

List.propTypes ={
  className: PropTypes.string,
  rowClick: PropTypes.func,
  headerClick: PropTypes.func,
}

List.defaultProps = {
  className: '',
  list: {
    total_count: 1000,
    data: []
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))