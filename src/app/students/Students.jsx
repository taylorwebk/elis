import React, { Component } from 'react'
import ButterToast from 'butter-toast'

import Load from './../common/Load'
import MessagePop from './../common/MessagePop'
import HeaderStudent from './HeaderStudent'
import SearchStudent from './SearchStudent'
import TableCont from './TableCont'

class Student extends Component {
  constructor() {
    super()
    this.state = {
      filter: ''
    }
  }
  componentDidMount() {
    if (Object.keys(this.props.studentData).length === 0) {
      this.fetchStudents()
    }
  }
  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.studentData).length !== Object.keys(this.props.studentData).length) {
      ButterToast.raise({
        content: () => (
          <MessagePop message={this.props.message} type="success" />
        ),
        toastTimeout: 2500 // default: 3000 ms
      })
    }
  }
  changeFilter = (e, { value }) => {
    this.setState({
      filter: value
    })
  }
  fetchStudents = () => {
    this.props.fetchStudentJson()
  }
  render() {
    const { filter } = this.state
    const { showSpinner, studentData } = this.props
    let content = null
    if (Object.keys(studentData).length > 0) {
      content = Object.keys(studentData).map(key => (
        <TableCont key={key} module={studentData[key]} filter={filter} />
      ))
    }
    return (
      <div>
        <ButterToast trayPosition="top-right" />
        {showSpinner ? <Load message="Cargando Contenido..." /> : null}
        <br />
        <br />
        <br />
        <HeaderStudent />
        <SearchStudent filter={filter} changeFilter={this.changeFilter} />
        {content}
      </div>
    )
  }
}

export default Student
