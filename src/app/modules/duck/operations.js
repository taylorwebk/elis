import axios from 'axios'
import creators from './actions'
import { baseip } from '../../../utils'

const {
  requestModulesJson,
  receiveModulesJson
} = creators

const fetchModulesJson = () => (dispatch) => {
  dispatch(requestModulesJson())
  return axios.get(`${baseip}module`)
    .then((response) => {
      const res = response.data
      if (res.code === 200) {
        dispatch(receiveModulesJson(res.usrmsg, res.content))
      }
    })
}
export default {
  fetchModulesJson
}
