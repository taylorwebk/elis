import { connect } from 'react-redux'
import Student from './Students'
import { studentOperations } from './duck'

const mapStateToProps = (state) => {
  const { studentData, showSpinner, message } = state.student
  return {
    studentData,
    showSpinner,
    message
  }
}

const mapDispatchToProps = (dispatch) => {
  const fetchStudentJson = () => {
    dispatch(studentOperations.fetchStudentsJson())
  }
  return {
    fetchStudentJson
  }
}

const StudentCont = connect(mapStateToProps, mapDispatchToProps)(Student)
export default StudentCont
