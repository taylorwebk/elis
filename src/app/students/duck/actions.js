import types from './types'

const requestStudentJson = () => ({
  type: types.REQUEST_STUDENTS_JSON
})

const receiveStudentJson = (message, studentData) => ({
  type: types.RECEIVE_STUDENTS_JSON,
  message,
  studentData
})
export default {
  requestStudentJson,
  receiveStudentJson
}
