import { combineReducers } from 'redux'
import studentReducer from './app/students/duck'
import moduleReducer from './app/modules/duck'

const rootReducer = combineReducers({
  student: studentReducer,
  module: moduleReducer
})
export default rootReducer
