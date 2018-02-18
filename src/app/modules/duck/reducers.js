import types from './types'

const initialState = {
  message: '',
  modulesData: [],
  showSpinner: false
}
const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_MODULES_JSON: {
      return {
        ...state,
        modulesData: [],
        showSpinner: true
      }
    }
    case types.RECEIVE_MODULES_JSON: {
      const { message, modulesData } = action
      return {
        ...state,
        message,
        modulesData,
        showSpinner: false
      }
    }
    default: return state
  }
}
export default moduleReducer
