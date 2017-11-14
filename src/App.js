import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import EmpTable from './components/EmpTable'
// import EmpDetails from './components/EmpDetails'
import logo from './logo.svg'
import './App.css'

import { fetchEmployees } from './services/empService'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employees: [],
      selectedEmployee: null,
      sortBy: 'firstName',
      size: 5
    }
  }
  componentDidMount () {
    this.updateEmployees()
  }

  componentDidUpdate (oldProps, oldState) {
    if (oldState.sortBy !== this.state.sortBy) {
      this.updateEmployees()
    }
  }

  async updateEmployees () {
    let empList = await fetchEmployees({
      sortBy: this.state.sortBy,
      size: this.state.size
    })
    this.setState({ employees: empList })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='App-title'>Ugam Employee Database</div>
        </header>
        <EmpTable
          employees={this.state.employees}
          sortBy={this.state.sortBy}
          onSort={key => {
            console.log('updating sortBy', key)
            this.setState({ sortBy: key })
          }}
        />
        <ButtonGroup className='emp-pagination pull-right'>
          <Button> Previous </Button>
          <Button> Next </Button>
        </ButtonGroup>
        {/* <EmpDetails /> */}
      </div>
    )
  }
}

export default App
