import types from './types'

const requestModulesJson = () => ({
  type: types.REQUEST_MODULES_JSON
})
const receiveModulesJson = (message, modulesData) => ({
  type: types.RECEIVE_MODULES_JSON,
  message,
  modulesData
})
export default {
  requestModulesJson,
  receiveModulesJson
}
