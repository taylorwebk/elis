import types from './types'

const initialState = {
  message: '',
  studentData: {},
  showSpinner: false
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

    default: return state
  }
}
export default studentReducer
