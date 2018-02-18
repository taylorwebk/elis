import { connect } from 'react-redux'
import Modules from './Modules'
import { moduleOperations } from './duck'

const mapStateToProps = (state) => {
  const { modulesData, message, showSpinner } = state.module
  return {
    modulesData,
    message,
    showSpinner
  }
}
const mapDispatchToProps = (dispatch) => {
  const fetchModulesJson = () => {
    dispatch(moduleOperations.fetchModulesJson())
  }
  return {
    fetchModulesJson
  }
}
const ModuleCont = connect(mapStateToProps, mapDispatchToProps)(Modules)
export default ModuleCont
