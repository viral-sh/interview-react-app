import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import { map } from 'lodash'

const ASC = <span> ▲ </span>
// const DESC = <span> ▼ </span>

class EmpTable extends Component {
  render () {
    return (
      <div className='emp-table'>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <TableHeader
                field='id'
                label='Emp Id'
                onHeaderClick={this.props.onSort}
                sortBy={this.props.sortBy}
              />
              <TableHeader
                field='firstName'
                label='Name'
                onHeaderClick={this.props.onSort}
                sortBy={this.props.sortBy}
              />
              <TableHeader
                field='gender'
                label='Gender'
                onHeaderClick={this.props.onSort}
                sortBy={this.props.sortBy}
              />
              <TableHeader
                field='salary'
                label='Salary'
                onHeaderClick={this.props.onSort}
                sortBy={this.props.sortBy}
              />
            </tr>
          </thead>
          <tbody>
            {map(this.props.employees, (emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{`${emp.firstName} ${emp.lastName}`}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.salary}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

EmpTable.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.string,
  onSort: PropTypes.func
}

export default EmpTable

function TableHeader ({ field, label, onHeaderClick, sortBy }) {
  return (
    <td onClick={() => onHeaderClick(field)}>
      {label}{sortBy === field ? ASC : ''}
    </td>
  )
}
TableHeader.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  sortBy: PropTypes.string,
  onHeaderClick: PropTypes.func
}
