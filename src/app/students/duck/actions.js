import types from './types'

const requestStudentJson = () => ({
  type: types.REQUEST_STUDENTS_JSON
})

const receiveStudentJson = (message, studentData) => ({
  type: types.RECEIVE_STUDENTS_JSON,
  message,
  studentData
})

const postStudentBegin = () => ({
  type: types.POST_STUDENT_BEGIN
})
const postStudentSuccess = message => ({
  type: types.POST_STUDENT_SUCCESS,
  message
})
export default {
  requestStudentJson,
  receiveStudentJson,
  postStudentBegin,
  postStudentSuccess
}
