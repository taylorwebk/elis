import types from './types'

const initialState = {
  message: '',
  studentData: {},
  showSpinner: false,
  postSpinner: false,
  postMessage: ''
}
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_STUDENTS_JSON: {
      return {
        ...state,
        studentData: {},
        showSpinner: true
      }
    }
    case types.RECEIVE_STUDENTS_JSON: {
      const { studentData, message } = action
      return {
        ...state,
        studentData,
        message,
        showSpinner: false
      }
    }
    case types.POST_STUDENT_BEGIN: {
      return {
        ...state,
        postMessage: '',
        postSpinner: true
      }
    }
    case types.POST_STUDENT_SUCCESS: {
      return {
        ...state,
        postMessage: action.message,
        postSpinner: false
      }
    }

    default: return state
  }
}
export default studentReducer
