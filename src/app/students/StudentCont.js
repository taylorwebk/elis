import { connect } from 'react-redux'
import Student from './Students'
import { studentOperations } from './duck'

const mapStateToProps = (state) => {
  const {
    studentData, showSpinner, message, postMessage, postSpinner
  } = state.student
  return {
    studentData,
    showSpinner,
    message,
    postMessage,
    postSpinner
  }
}

const mapDispatchToProps = (dispatch) => {
  const fetchStudentJson = () => {
    dispatch(studentOperations.fetchStudentsJson())
  }
  const sendStudent = (student) => {
    dispatch(studentOperations.sendStudent(student))
  }
  return {
    fetchStudentJson,
    sendStudent
  }
}

const StudentCont = connect(mapStateToProps, mapDispatchToProps)(Student)
export default StudentCont
